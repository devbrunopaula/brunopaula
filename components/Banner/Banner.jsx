import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Banner() {
  return (
    <>
      <div className='welcome'>
        <h1>Hi, my name is Bruno</h1>
        <div className='welcome-tagline'>
          <p>
            A RESPONSIVE SITE TEMPLATE DESIGNED BY HTML5 UP <br></br>AND
            RELEASED UNDER THE CREATIVE COMMONS.
          </p>
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
