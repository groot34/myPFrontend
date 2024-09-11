import nodemailer from 'nodemailer';

export async function sendMail({ name, email, message }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    },
  });

  try {
    const testResult = await transport.verify();
    console.log('Transport Verified:', testResult);
  } catch (error) {
    console.error('Transport Verification Failed:', error);
    return;
  }

  const emailBody = `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: 'justchilloo86@gmail.com',
      subject: 'New Message from Contact Form',
      html: emailBody,
    });
    console.log('Email Sent:', sendResult);

    return sendResult;
  } catch (error) {
    console.error('Error Sending Email:', error);
    return;
  }
}
