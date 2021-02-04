const info = {
  name: 'Nielson Bruno Paula',
  phone: '‪(772) 208-9486‬',
  email: 'devbrunopaula@gmail.com',
  address: {
    city: 'Port Saint Lucie',
    state: 'Florida',
    state_initals: 'FL',
    zipcode: '34987',
  },
  website: 'https://www.devbrunopaula.com',
  social_media: {
    twitter: 'https://twitter.com/devbrunopaula',
    github: 'https://github.com/devbrunopaula',
    facebook: '',
    instagram: 'https://www.instagram.com/devbrunopaula/',
    instagram_username: '@devbrunopaula',
  },
}

export default async (req, res) => {
  return await res.status(200).json(info)
}
