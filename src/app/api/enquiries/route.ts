import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Server-side Zod validation
    const validationResult = enquirySchema.safeParse(body);

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || 'Invalid form input';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, phone, email, interest, message } = validationResult.data;

    // Log received submission safely in server console
    console.log(`[S.B. Enterprise Enquiry Received]`, {
      name,
      phone,
      email,
      interest,
      message,
      timestamp: new Date().toISOString(),
    });

    // Integration point: Resend / Nodemailer / CRM / DB connection can be configured here.

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received. The S.B. Enterprise team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
