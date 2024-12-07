import React from 'react';
import MembershipCard from '../components/membership/MembershipCard';
import { useAuth } from '../hooks/useAuth';

const membershipTiers = [
  {
    tier: 'BASIC',
    price: 9.99,
    features: [
      'Access to basic deals',
      'Weekly newsletters',
      'Community forum access',
      'Basic support'
    ]
  },
  {
    tier: 'PREMIUM',
    price: 19.99,
    features: [
      'All Basic features',
      'Premium deals',
      'Early access to sales',
      'Priority support',
      'Monthly special offers'
    ],
    isPopular: true
  },
  {
    tier: 'ELITE',
    price: 29.99,
    features: [
      'All Premium features',
      'Exclusive deals',
      'Personal shopping assistant',
      '24/7 VIP support',
      'Free shipping on all orders',
      'Member-only events'
    ]
  }
] as const;

const MembershipPage = () => {
  const { isAuthenticated } = useAuth();

  const handleSelectPlan = (tier: 'BASIC' | 'PREMIUM' | 'ELITE') => {
    if (!isAuthenticated) {
      // Redirect to login
      return;
    }
    // Handle subscription
    console.log(`Selected ${tier} plan`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Membership</h1>
          <p className="text-xl text-gray-600">Unlock exclusive perks and deals with our membership plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipTiers.map((tier) => (
            <MembershipCard
              key={tier.tier}
              tier={tier.tier}
              price={tier.price}
              features={tier.features}
              isPopular={tier.isPopular}
              onSelect={() => handleSelectPlan(tier.tier)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;