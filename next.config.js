const path = require('path')
const eviroment = process.env.NODE_ENV

if (eviroment !== 'production') {
	require('dotenv').config()
}
module.exports = {
	images: {
		domains: ['images.ctfassets.net', 'cdn.dribbble.com'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
	},
	api: {
		bodyParser: true,
	},
}
