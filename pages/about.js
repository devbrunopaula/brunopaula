import React, {Component} from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import AboutContent from '../components/About/AboutContent'
import FunFactsTwo from '../components/Common/FunFactsTwo'
import TeamStyleThree from '../components/Common/TeamStyleThree'
import Feedback from '../components/Common/Feedback'
import Partner from '../components/Common/Partner'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'
import Footer from '../components/Layouts/Footer'

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBanner pageTitle='About Me' />
        <AboutContent />
        <Partner />
        {/* <FunFactsTwo /> */}
        {/* <TeamStyleThree /> */}
        <Feedback />
        <CtaAreaTwo />
        <Footer />
      </React.Fragment>
    )
  }
}

export default About
