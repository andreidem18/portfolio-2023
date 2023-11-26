import sendEmail from './sendEmail'

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    await sendEmail({
      to: 'andres.david.mm@hotmail.com',
      subject: 'Mensaje desde el portafolio',
      html: `
        <ul>
          <li><b>De:</b> ${name}</li>
          <li><b>Email:</b> ${email}</li>
        </ul>
        <strong>${subject}</strong>
        <p>${message}</p>
  
      `
    })
    return Response.json({ message: "Api working" })
  } catch(error) {
    return new Response('Error sending email', {
      status: 500
    })
  }
}

