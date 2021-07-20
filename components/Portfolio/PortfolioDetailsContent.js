import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Lightbox from 'react-image-lightbox'
import moment from 'moment'
import {getPreojectById} from '../../project.config'
import DisqusComments from '../Common/Disqus'

const images = [
	'/images/portfolio/portfolio1.jpg',
	'/images/portfolio/portfolio2.jpg',
	'/images/portfolio/portfolio3.jpg',
	'/images/portfolio/portfolio4.jpg',
	'/images/portfolio/portfolio5.jpg',
	'last',
]

const PortfolioDetailsContent = ({id}) => {
	const [photoIndex, setPhotoIndex] = useState(0)
	const [isOpenImage, setIsOpenImage] = useState(false)
	const [projects, setProjects] = useState('')
	const [title, setTitle] = useState('')
	const [projectId, setProjectId] = useState('')

	const getASingleProject = async id => {
		const data = await getPreojectById(id)

		setProjects(data)
		setProjectId(data.sys.id)
		setTitle(data.fields.title)
	}

	const showTags = projects => {
		for (let name in projects['fields']) {
			if (name === 'tags') {
				return projects.fields.tags.map((tag, i) => (
					<span className='badge badge-secondary mr-2' key={i}>
						{tag}{' '}
					</span>
				))
			}
		}
	}

	useEffect(() => {
		getASingleProject(id)
	}, [])

	return (
		<>
			{isOpenImage && (
				<Lightbox
					mainSrc={projects && projects.fields.image.fields.file.url}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={
						images[(photoIndex + images.length - 1) % images.length]
					}
					onCloseRequest={() => setIsOpenImage(false)}
				/>
			)}

			<section className='portfolio-details ptb-100'>
				<div className='container'>
					<div className='row m-0'>
						<div className='col-lg-4 col-md-6 p-0'>
							<div className='portfolio-details-image'>
								<img
									src={
										projects &&
										projects.fields.image.fields.file.url
									}
									alt='image'
								/>

								<Link href='#'>
									<a
										className='popup-btn'
										onClick={e => {
											e.preventDefault()
											setIsOpenImage(true)
											setPhotoIndex(0)
										}}
									></a>
								</Link>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-lg-12'>
							<div className='portfolio-desc'>
								<h2>{projects && projects.fields.title}</h2>
								<p>{projects && projects.fields.body}</p>
							</div>

							<div className='service-details-info'>
								<div className='single-info-box'>
									<h4>Team</h4>
									<span>Bruno Paula</span>
								</div>

								<div className='single-info-box'>
									<h4>Technology</h4>
									<span>
										{projects && projects.fields.technology}
									</span>
								</div>

								<div className='single-info-box'>
									<h4>Date</h4>
									<span>
										{moment(
											`${
												projects && projects.fields.date
											}`
										).format('MMMM Do YYYY')}
									</span>
								</div>
								<div className='single-info-box'></div>

								<div className='single-info-box'>
									<div className='p-1'>
										<a
											className='default-btn'
											target='_blank'
											href={`//${
												projects &&
												projects.fields.projectLink
											}`}
										>
											Live Preview
										</a>
									</div>
									<div className='pt-2'>
										<a
											href={`//${
												projects &&
												projects.fields.github
											}`}
											className='btn btn-secondary'
											target='_blank'
										>
											Github
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<p>Tags</p>
						{showTags(projects)}
					</div>
					{projects && (
						<DisqusComments title={title} id={projectId} />
					)}
				</div>
			</section>
		</>
	)
}

export default PortfolioDetailsContent
