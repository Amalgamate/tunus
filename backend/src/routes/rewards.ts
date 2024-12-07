import express from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();

const claimRewardSchema = z.object({
  rewardId: z.string(),
});

router.post('/claim', auth, async (req: AuthRequest, res) => {
  try {
    const { rewardId } = claimRewardSchema.parse(req.body);
    const userId = req.user!.id;

    const reward = await prisma.reward.findUnique({
      where: { id: rewardId },
    });

    if (!reward) {
      return res.status(404).json({ error: 'Reward not found' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.points < reward.pointsCost) {
      return res.status(400).json({ error: 'Insufficient points' });
    }

    // Create claim and deduct points in a transaction
    const result = await prisma.$transaction(async (prisma) => {
      const claim = await prisma.rewardClaim.create({
        data: {
          userId,
          rewardId,
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: {
          points: {
            decrement: reward.pointsCost,
          },
        },
      });

      return claim;
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: 'Failed to claim reward' });
  }
});

router.get('/available', auth, async (req: AuthRequest, res) => {
  try {
    const rewards = await prisma.reward.findMany({
      where: {
        OR: [
          { validUntil: null },
          { validUntil: { gt: new Date() } },
        ],
      },
      orderBy: {
        pointsCost: 'asc',
      },
    });

    res.json(rewards);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch rewards' });
  }
});

export default router;