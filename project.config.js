import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: 'cr4pa0xuvlza',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '2UOrRJMYgHEmVpSO_l1ivxIb6rHhZYB_pJjntDkKEmo',
})
