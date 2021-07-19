import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import ProjectCard from '../Projects/projectCard'

const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
	loop: true,
	nav: true,
	dots: true,
	autoplayHoverPause: true,
	autoplay: true,
	margin: 20,
	navText: [
		"<i class='pe-7s-angle-left'></i>",
		"<i class='pe-7s-angle-right'></i>",
	],
	responsive: {
		0: {
			items: 1,
		},
		576: {
			items: 2,
		},
		1000: {
			items: 3,
		},
		1200: {
			items: 4,
		},
		1800: {
			items: 5,
		},
	},
}

const WorksStyleOne = ({data}) => {
	const [isMounted, setIsMounted] = useState(false)
	const [display, setDisplay] = useState(false)
	const [topProjects, setTopProjects] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		setDisplay(true)
		getTopProjects()

		return () => {
			setIsMounted(false)
		}
	}, [])

	const getTopProjects = async () => {
		const result = await data.filter(
			project => project.fields.topProjects == true
		)

		setTopProjects(result)
	}

	return (
		<section className='case-studies-area ptb-100'>
			<div className='container-fluid'>
				<div className='section-title'>
					<h2>Top Projects</h2>
				</div>

				{display ? (
					<OwlCarousel
						className='work-slides owl-carousel owl-theme'
						{...options}
					>
						{topProjects &&
							topProjects.map(data => (
								<ProjectCard
									data={data.fields}
									id={data.sys.id}
									key={data.sys.id}
								/>
							))}
					</OwlCarousel>
				) : (
					''
				)}
			</div>
		</section>
	)
}

export default WorksStyleOne
