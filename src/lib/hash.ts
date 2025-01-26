import crypto from 'crypto';

export const generateUnsubscribeHash = (email: string, plateNumber: string) => {
  const secret = process.env.UNSUBSCRIBE_SECRET || 'default-secret';
  return crypto
    .createHmac('sha256', secret)
    .update(`${email}:${plateNumber}`)
    .digest('hex');
}; 