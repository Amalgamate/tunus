import crypto from 'crypto';

export const generateVoucherCode = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const randomBytes = crypto.randomBytes(length);
  let result = '';

  for (let i = 0; i < length; i++) {
    result += chars[randomBytes[i] % chars.length];
  }

  return result;
};