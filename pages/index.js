import React, {Component} from 'react'
import Navbar from '../components/Layouts/NavbarTwo'

import MainBanner from '../components/ItAgency/MainBanner'
import OurServices from '../components/ItAgency/OurServices'
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo'
import WhyChooseUs from '../components/ItAgency/WhyChooseUs'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import LatestProjects from '../components/Common/LatestNewsSliderTwo'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner'

import {client} from '../project.config'

class ItAgency extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />

				<MainBanner />
				<OurServices />
				<ServiceStyleTwo />
				{/* <WhyChooseUs /> */}
				{/* <FunFactsTwo /> */}

				<LatestProjects blog={this.props} />

				<Footer />
			</React.Fragment>
		)
	}
}

export default ItAgency

export const getStaticProps = async () => {
	const proj = await client.getEntries()

	return {
		props: {
			projects: proj.items,
		},
	}
}
