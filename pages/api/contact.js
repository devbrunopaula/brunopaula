const sgMail = require('@sendgrid/mail')

export default async (req, res) => {
  const {email, phone_number, msg_subject, message} = await req.body

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: email,
    from: 'devbrunopaula@gmail.com', // Change to your verified sender
    cc: 'devbrunopaula@gmail.com',
    subject: msg_subject,
    text: message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  try {
    await sgMail.send(msg)

    res.status(200).json({
      data: msg,
      message: 'Message sent successfully.',
      email: email,
    })
  } catch (error) {
    console.log('ERROR', error)
  }
}
