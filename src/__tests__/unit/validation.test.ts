import { describe, it, expect } from 'vitest';
import { newsletterSchema, contactFormSchema } from '../../lib/validation/schemas';

describe('Zod Validation Schemas Unit Tests', () => {
  it('should validate valid newsletter subscriptions', () => {
    const valid = newsletterSchema.safeParse({
      email: 'customer@glamgal.com',
      consent: true,
    });
    expect(valid.success).toBe(true);
  });

  it('should reject invalid email addresses in newsletter form', () => {
    const invalid = newsletterSchema.safeParse({
      email: 'not-an-email',
      consent: true,
    });
    expect(invalid.success).toBe(false);
  });

  it('should validate complete contact form submissions', () => {
    const valid = contactFormSchema.safeParse({
      name: 'Elena Rostova',
      email: 'elena@example.com',
      reason: 'Product Question',
      message: 'Can the Luminous Barrier Serum be layered with Vitamin C?',
      privacyConsent: true,
    });
    expect(valid.success).toBe(true);
  });

  it('should reject contact forms with short messages or missing consent', () => {
    const invalid = contactFormSchema.safeParse({
      name: 'Elena',
      email: 'elena@example.com',
      reason: 'General Enquiry',
      message: 'Too short',
      privacyConsent: false,
    });
    expect(invalid.success).toBe(false);
  });
});
