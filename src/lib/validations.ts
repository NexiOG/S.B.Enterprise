import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit phone number')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number format'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.enum([
    'TallyPrime',
    'Tally services',
    'S.B. Enterprise products',
    'Nexiog products',
    'General enquiry',
  ]),
  message: z.string().min(10, 'Requirement message must be at least 10 characters').max(2000, 'Message is too long'),
});

export type EnquiryFormInputs = z.infer<typeof enquirySchema>;
