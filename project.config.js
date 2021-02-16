import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getProjects = async () => {
  const projects = await client.getEntries()

  return projects
}

export const getPreojectById = async (id) => {
  const project = await client.getEntry(id)
  return project
}
