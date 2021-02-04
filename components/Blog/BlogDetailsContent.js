import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import BlogSidebar from './BlogSidebar'
import BlogComments from './BlogComments'

const BlogRightSidebar = ({data, image}) => {
  return (
    <div className='blog-area ptb-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-md-12'>
            <div className='blog-details'>
              <div className='article-img'>
                <img src={image} alt='image' />
              </div>

              <div className='article-content'>
                <ul className='entry-meta'>
                  <li>
                    <i className='icofont-user'></i>
                    <Link href='#'>
                      <a>Admin</a>
                    </Link>
                  </li>
                  <li>
                    <i className='icofont-calendar'></i> March 08, 2020
                  </li>
                </ul>

                <p>{data.fields.body}</p>

                <blockquote className='wp-block-quote'>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <cite>Tom Cruise</cite>
                </blockquote>

                {/* Category */}
                <ul className='category'>
                  <li>
                    <span>Tags:</span>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Business</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>IT</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Tips</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='#'>
                      <a>Design</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Post controls */}
            <div className='post-controls-buttons'>
              <div>
                <Link href='#'>
                  <a>Prev Post</a>
                </Link>
              </div>

              <div>
                <Link href='#'>
                  <a>Next Post</a>
                </Link>
              </div>
            </div>

            <BlogComments />
          </div>

          <div className='col-lg-4 col-md-12'>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogRightSidebar
