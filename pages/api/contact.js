const sgMail = require('@sendgrid/mail')

export default async (req, res) => {
	const {name, email, phone_number, msg_subject, message} = await req.body

	sgMail.setApiKey(process.env.SENDGRID_API_KEY)
	const htmlMessage = `
	Hi ${name},<br>

<p>Thanks so much for reaching out…

I have received your email and will get back to you as soon as possible.<br>


<p>I look forward to chatting soon!<br><br>

<p>Thanks,</p><br>
<p><strong>Bruno Paula<strong></p><br>
<p>Phone: (772) 208-9486‬</p>
	`
	const msg = [
		{
			to: email,
			from: 'devbrunopaula@gmail.com', // Change to your verified sender
			subject: msg_subject,
			html: htmlMessage,
		},
		{
			to: 'devbrunopaula@gmail.com',
			from: 'devbrunopaula@gmail.com', // Change to your verified sender
			subject: 'Message from your Portifolio Page',
			text: `
			Name: ${name}.
			Subject: ${msg_subject}
			Phone: ${phone_number}
			message: ${message}
			`,
		},
	]

	try {
		const test = await sgMail.send(msg)

		res.status(202).json({
			data: msg,
			message: 'Message sent successfully.',
			email: email,
		})
	} catch (error) {
		console.log('ERROR', 'There is an error')
	}
}
