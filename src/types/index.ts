export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role: 'USER' | 'ADMIN';
  membership?: Membership;
}

export interface Membership {
  id: string;
  tier: 'BASIC' | 'PREMIUM' | 'ELITE';
  startDate: Date;
  endDate: Date;
  status: 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
}

export interface Perk {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tier: 'BASIC' | 'PREMIUM' | 'ELITE';
}