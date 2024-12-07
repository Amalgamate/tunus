import express from 'express';
import { z } from 'zod';
import Stripe from 'stripe';
import { prisma } from '../lib/prisma';
import { config } from '../config';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();
const stripe = new Stripe(config.stripe.secretKey);

const createSubscriptionSchema = z.object({
  tier: z.enum(['BASIC', 'PREMIUM', 'ELITE']),
  paymentMethodId: z.string(),
});

router.post('/create-subscription', auth, async (req: AuthRequest, res) => {
  try {
    const { tier, paymentMethodId } = createSubscriptionSchema.parse(req.body);
    const userId = req.user!.id;

    const prices = {
      BASIC: 'price_basic_id',
      PREMIUM: 'price_premium_id',
      ELITE: 'price_elite_id',
    };

    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email: req.user!.email,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: prices[tier] }],
      expand: ['latest_invoice.payment_intent'],
    });

    const membership = await prisma.membership.create({
      data: {
        userId,
        tier,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        stripeSubscriptionId: subscription.id,
      },
    });

    res.json({ membership, subscription });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create subscription' });
  }
});