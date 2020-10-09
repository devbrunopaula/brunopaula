import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Navigation from '../components/Nav/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Paula | Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='banner'>
        <Navigation />
        <Banner />
      </div>
    </>
  )
}
