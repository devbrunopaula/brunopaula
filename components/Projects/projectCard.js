import React, {useState} from 'react'
import Link from 'next/link'

const ProjectCard = ({data, id}) => {
  return (
    <div className='work-card'>
      <img src={`${data.image.fields.file.url}`} alt='image' height='280' />
      <div className='content text-center'>
        <h3>
          <Link
            href={{
              pathname: `/projects/${id}`,
            }}
          >
            <a>{data.title}</a>
          </Link>
        </h3>

        {/* <Link href={{pathname: '/projects-details', query: {id}}}>
          <a className='custom-btn'>Read More</a>
        </Link> */}
        <Link href={{pathname: `/projects/${id}`}}>
          <a className='custom-btn'>More Info</a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
