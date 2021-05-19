import React, {Component} from 'react'
import NavbarTwo from '../../components/Layouts/NavbarTwo'
import PageBanner from '../../components/Common/PageBanner'
import PortfolioDetailsContent from '../../components/Portfolio/PortfolioDetailsContent'
import CtaAreaTwo from '../../components/Common/CtaAreaTwo'
import Footer from '../../components/Layouts/Footer'
import {useRouter} from 'next/router'

const newid = 'lGoZ5r72Y9wGhvP57TFgN'

const Details = () => {
  const router = useRouter()
  const {id} = router.query
  return (
    <>
      <NavbarTwo />
      <PageBanner pageTitle='Projects' />
      <PortfolioDetailsContent id={id} />
      <CtaAreaTwo />
      <Footer />
    </>
  )
}

export default Details
