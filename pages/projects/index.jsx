import React, {Component} from 'react'
import NavbarTwo from '../../components/Layouts/NavbarTwo'

import PageBanner from '../../components/Common/PageBanner'
import WorksStyleOne from '../../components/Portfolio/WorksStyleOne'
import WorksStyleTwo from '../../components/Portfolio/WorksStyleTwo'
import CtaAreaTwo from '../../components/Common/CtaAreaTwo'
import Footer from '../../components/Layouts/Footer'
import {useRouter} from 'next/router'
import {getProjects} from '../../project.config'
import {createClient} from 'contentful'

const Projects = ({data}) => {
	const route = useRouter()

	return (
		<>
			<NavbarTwo />
			<PageBanner pageTitle='Projects' />
			<WorksStyleOne data={data} />
			<WorksStyleTwo data={data} />
			<CtaAreaTwo />
			<Footer />
		</>
	)
}

export default Projects

export async function getStaticProps(contex) {
	const client = await createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	})

	const result = await client.getEntries({
		content_type: 'projects',
	})

	return {
		props: {
			data: result.items,
		},
		revalidate: 2,
	}
}
