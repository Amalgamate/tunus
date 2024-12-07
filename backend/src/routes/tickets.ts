import express from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();

const purchaseTicketSchema = z.object({
  eventId: z.string(),
  quantity: z.number().min(1).max(10),
});

router.post('/purchase', auth, async (req: AuthRequest, res) => {
  try {
    const { eventId, quantity } = purchaseTicketSchema.parse(req.body);
    const userId = req.user!.id;

    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Check ticket availability
    const soldTickets = await prisma.ticket.count({
      where: {
        eventId,
        status: 'ACTIVE',
      },
    });

    if (soldTickets + quantity > event.capacity) {
      return res.status(400).json({ error: 'Not enough tickets available' });
    }

    // Calculate points (1 point per $10 spent)
    const pointsEarned = Math.floor((event.price * quantity) / 10);

    // Create tickets and update user points in a transaction
    const result = await prisma.$transaction(async (prisma) => {
      const tickets = await Promise.all(
        Array(quantity).fill(0).map(() =>
          prisma.ticket.create({
            data: {
              userId,
              eventId,
              price: event.price,
              pointsEarned,
            },
          })
        )
      );

      await prisma.user.update({
        where: { id: userId },
        data: {
          points: {
            increment: pointsEarned * quantity,
          },
        },
      });

      return tickets;
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to purchase tickets' });
  }
});

router.get('/my-tickets', auth, async (req: AuthRequest, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: req.user!.id,
      },
      include: {
        event: true,
      },
      orderBy: {
        purchaseDate: 'desc',
      },
    });

    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch tickets' });
  }
});

export default router;