import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import axios from 'axios'

export const LatestProjects = ({data}) => {
  return (
    <>
      {data.projects
        ? data.projects.map((project) => {
            return (
              <div className='col-lg-12' key={project.sys.id}>
                <div className='single-blog-item'>
                  <div className='blog-image'>
                    <Link
                      href={{
                        pathname: '/blog-details',
                        query: {id: project.sys.id},
                      }}
                    >
                      <a>
                        <img
                          src={project.fields.image.fields.file.url}
                          alt='image'
                        />
                      </a>
                    </Link>

                    <div className='post-tag'>
                      <Link href='#'>
                        <a>Technology</a>
                      </Link>
                    </div>
                  </div>

                  <div className='blog-post-content'>
                    <span className='date'>Feb 15, 2020</span>
                    <h3>
                      <Link
                        href={{
                          pathname: '/blog-details',
                          query: {id: project.id},
                        }}
                      >
                        <a>{project.fields.title}</a>
                      </Link>
                    </h3>

                    <p>{project.fields.body}</p>

                    <Link href='/blog-details'>
                      <a className='read-more-btn'>
                        Read More
                        <i className='icofont-thin-double-right'></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        : ''}
    </>
  )
}
