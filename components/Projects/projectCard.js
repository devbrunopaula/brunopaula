import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = ({data, id}) => {
	return (
		<div className='work-card'>
			<Image
				className='work-card-thunb'
				src={
					data.thumbnail.fields.file.url
						? `https:${data.thumbnail.fields.file.url}`
						: 'https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif'
				}
				alt='Picture of the author'
				width='550'
				height='340px'
			/>
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

				<Link href={{pathname: `/projects/${id}`}}>
					<a className='custom-btn'>More Info</a>
				</Link>
			</div>
		</div>
	)
}

export default ProjectCard
