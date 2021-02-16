import React, {Component} from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import WorksStyleOne from '../components/Portfolio/WorksStyleOne'
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'
import Footer from '../components/Layouts/Footer'
import axios from 'axios'
import client from '../project.config'
import {getProjects} from '../project.config'

const Portfolio = (props) => {
  console.log(props)
  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle='Our Portfolio' />
      <WorksStyleOne data={props.items} />
      <WorksStyleTwo />
      <CtaAreaTwo />
      <Footer />
    </>
  )
}

Portfolio.getInitialProps = async () => {
  const data = await getProjects()

  return data
}
export default Portfolio
