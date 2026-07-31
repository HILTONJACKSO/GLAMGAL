import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  consent: z.boolean().refine(val => val === true, 'You must accept the privacy terms to subscribe.'),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  orderNumber: z.string().optional(),
  reason: z.enum([
    'Product Question',
    'Order Support',
    'Shipping',
    'Returns',
    'Wholesale',
    'Collaboration',
    'Press',
    'General Enquiry'
  ], { errorMap: () => ({ message: 'Please select a contact category.' }) }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  privacyConsent: z.boolean().refine(val => val === true, 'You must accept the privacy policy to submit.'),
});
