'use server';

import { Resend } from 'resend';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'info@blingersempire.com',
      subject: `New Contact from ${formData.name}`,
      html: `
        <h2>New Message from ${formData.name}</h2>
        <p><strong>Sender Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    });

    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
