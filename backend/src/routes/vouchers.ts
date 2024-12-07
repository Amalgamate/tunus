import express from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { auth, AuthRequest } from '../middleware/auth';
import { generateVoucherCode } from '../utils/vouchers';

const router = express.Router();

const createVoucherSchema = z.object({
  discount: z.number().min(0).max(100),
  validUntil: z.string().datetime(),
  maxUses: z.number().min(1),
});

router.post('/create', auth, async (req: AuthRequest, res) => {
  try {
    const { discount, validUntil, maxUses } = createVoucherSchema.parse(req.body);

    const voucher = await prisma.voucher.create({
      data: {
        code: generateVoucherCode(),
        discount,
        validUntil: new Date(validUntil),
        maxUses,
      },
    });

    res.status(201).json(voucher);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create voucher' });
  }
});

router.post('/validate', auth, async (req: AuthRequest, res) => {
  try {
    const { code } = req.body;

    const voucher = await prisma.voucher.findUnique({
      where: { code },
    });

    if (!voucher) {
      return res.status(404).json({ error: 'Voucher not found' });
    }

    if (voucher.validUntil < new Date()) {
      return res.status(400).json({ error: 'Voucher has expired' });
    }

    if (voucher.usedCount >= voucher.maxUses) {
      return res.status(400).json({ error: 'Voucher has reached maximum uses' });
    }

    res.json(voucher);
  } catch (error) {
    res.status(400).json({ error: 'Failed to validate voucher' });
  }
});

export default router;