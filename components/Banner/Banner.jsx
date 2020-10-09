import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Banner() {
  return (
    <>
      <div className='welcome'>
        <h1>Hi, my name is Bruno</h1>
        <div className='welcome-tagline'>
          <p>A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP.</p>
          <span>RELEASED UNDER THE CREATIVE COMMONS.</span>
          <div className='meet'>
            <button className='meet-button'>LET'S MEET</button>
            <BsArrowRight className='meet-arrowIcon' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
