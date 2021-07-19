import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import axios from 'axios'
import moment from 'moment'
import DisqusComments from '../Common/Disqus'

export const LatestProjects = ({data}) => {
	return (
		<>
			{data.projects
				? data.projects.map(project => {
						return (
							<div className='col-lg-12' key={project.sys.id}>
								<div className='single-blog-item'>
									<div className='blog-image'>
										<Link
											href={{
												pathname: `/projects/${project.sys.id}`,
											}}
										>
											<a>
												<img
													src={
														project.fields.image
															.fields.file.url
													}
													alt='image'
													height='280'
												/>
											</a>
										</Link>

										<div className='post-tag'>
											<Link href='#'>
												<a>Technology </a>
											</Link>
										</div>
									</div>

									<div className='blog-post-content'>
										<span className='date'>
											{moment(
												`${
													project &&
													project.fields.date
												}`
											).format('MMM Do YYYY')}
										</span>
										<h3>
											<Link
												href={{
													pathname: `/projects/${project.sys.id}`,
												}}
											>
												<a>{project.fields.title}</a>
											</Link>
										</h3>

										<p>{project.fields.body}</p>

										<Link
											href={{
												pathname: `/projects/${project.sys.id}`,
											}}
										>
											<a className=''>
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
			{/* <DisqusComments /> */}
		</>
	)
}
