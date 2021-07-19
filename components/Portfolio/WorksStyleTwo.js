import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WorksStyleTwo = ({data}) => {
	const [visible, setVisible] = useState(3)
	const [projects, setProjects] = useState(data)

	useEffect(() => {
		setProjects(data)
	}, [])

	const showMoreProjects = () => {
		setVisible(e => (e += 3))
	}

	const handleAllProjects = () => {
		setProjects(data)
	}

	const handleFrontEndProjects = () => {
		const result = data.filter(item => {
			if (item.fields.technology == 'Front-End') {
				return item
			}
		})

		setProjects(result)
	}

	const handleBackEndProjects = () => {
		const result = data.filter(item => {
			if (item.fields.technology == 'Back-End') {
				return item
			}
		})

		setProjects(result)
	}

	const handlefullStackProjects = () => {
		const result = data.filter(item => {
			if (item.fields.technology == 'Full Stack') {
				return item
			}
		})

		setProjects(result)
	}

	return (
		<section className='case-studies-area ptb-100 bg-fcfbfb'>
			<div className='container'>
				<div className='section-title'>
					<h2>My Projects</h2>
					<div className='p10'>
						<button
							className={`btn btn-${'secondary'} ml-2`}
							onClick={handleAllProjects}
						>
							All
						</button>
						<button
							className='btn btn-secondary m-2'
							onClick={handleFrontEndProjects}
						>
							Front-End
						</button>
						<button
							className='btn btn-secondary'
							onClick={handleBackEndProjects}
						>
							Back-End
						</button>
						<button
							onClick={handlefullStackProjects}
							className='btn btn-secondary m-2'
						>
							Full Stack
						</button>
					</div>
				</div>

				{/* allprojects cards */}

				<div className='row'>
					{projects &&
						projects.slice(0, visible).map(project => (
							<div
								className='col-lg-4 col-sm-6'
								key={project.sys.id}
							>
								<div className='work-card'>
									<Image
										src={
											project.fields.projectImage.fields
												.file.url
												? `https:${project.fields.projectImage.fields.file.url}`
												: 'https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif'
										}
										alt='image'
										height='700'
										width='510'
									/>

									<div className='content'>
										<span>
											<a>{project.fields.technology}</a>
										</span>

										<h3>
											<Link
												href={`/projects/${project.sys.id}`}
											>
												<a>{project.fields.title}</a>
											</Link>
										</h3>

										<Link
											href={`/projects/${project.sys.id}`}
										>
											<a className='custom-btn'>
												View Details
											</a>
										</Link>
									</div>
								</div>
							</div>
						))}
				</div>

				<div className='view-more-work'>
					<button
						onClick={showMoreProjects}
						className='btn btn-primary'
					>
						<i className='icofont-tasks'></i> View More
					</button>
				</div>
			</div>
		</section>
	)
}

export default WorksStyleTwo
