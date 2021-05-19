import React, {Component} from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo'
import PageBanner from '../components/Common/PageBanner'
import PortfolioDetailsContent from '../components/Portfolio/PortfolioDetailsContent'
import CtaAreaTwo from '../components/Common/CtaAreaTwo'
import Footer from '../components/Layouts/Footer'
import {useRouter} from 'next/router'

const newid = 'lGoZ5r72Y9wGhvP57TFgN'

const PortfolioDetails = () => {
  const route = useRouter()

  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle='UX for Mobile Apps' />
      <PortfolioDetailsContent id={route.query.id} />
      <CtaAreaTwo />
      <Footer />
    </>
  )
}

export default PortfolioDetails
