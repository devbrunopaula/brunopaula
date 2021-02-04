import React, {useEffect, useState} from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import BlogDetailsContent from '../components/Blog/BlogDetailsContent'
import Footer from '../components/Layouts/Footer'
import {useRouter} from 'next/router'
import {client} from '../project.config'

const BlogDetails = (props) => {
  const [project, setProject] = useState({})
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()

  const getSingleProject = async () => {
    const projectData = await client.getEntry(router.query.id)
    setProject(projectData)
    setTitle(projectData.fields.title)
    setImage(projectData.fields.image.fields.file.url)
  }

  useEffect(() => {
    getSingleProject()
  }, [])

  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner pageTitle={title} />
      <BlogDetailsContent data={project} image={image} />
      <Footer />
    </React.Fragment>
  )
}

export default BlogDetails
