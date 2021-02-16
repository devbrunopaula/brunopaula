import React, {Component} from 'react'
import Navbar from '../components/Layouts/NavbarTwo'

import MainBanner from '../components/ItAgency/MainBanner'
import OurServices from '../components/ItAgency/OurServices'
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo'
import WhyChooseUs from '../components/ItAgency/WhyChooseUs'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import Feedback from '../components/Common/Feedback'
import PricingStyleThree from '../components/Pricing/PricingStyleThree'
//import TeamStyleTwo from '../components/Common/TeamStyleTwo'
import Teams from '../components/Common/Teams'
//import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo'
import LatestProjects from '../components/Common/LatestNewsSliderTwo'
import Newsletter from '../components/Common/Newsletter'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner'
// import * as contentful from 'contentful'
import {client} from '../project.config'

class ItAgency extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <MainBanner />
        <OurServices />
        <ServiceStyleTwo />
        <WhyChooseUs />
        <FunFactsTwo />
        {/* <Partner /> */}
        {/* <Feedback /> */}
        {/* <Teams /> */}
        {/* <PricingStyleThree /> */}

        <LatestProjects blog={this.props} />
        <div className='pb-100'>
          <Newsletter />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default ItAgency

export const getStaticProps = async () => {
  // const client = require('contentful').createClient({
  //   space: 'cr4pa0xuvlza',
  //   accessToken: '2UOrRJMYgHEmVpSO_l1ivxIb6rHhZYB_pJjntDkKEmo',
  // })

  const proj = await client.getEntries()

  return {
    props: {
      projects: proj.items,
    },
  }
}
