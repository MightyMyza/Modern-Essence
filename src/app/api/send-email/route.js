import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the form data from the request body
    const formData = await request.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'modernessence@gmail.com', 
        pass: 'password', 
      },
    });

    // Configure the email options
    const mailOptions = {
      from: formData.email,
      to: 'modernessence@gmail.com', 
      subject: `New Application from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Service Request: ${formData.service}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
