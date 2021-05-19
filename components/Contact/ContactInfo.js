import React from 'react'
import {info} from '../../utils/info'

const ContactInfo = () => {
  return (
    <div className='contact-info-area pt-100 pb-70'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='contact-info-box'>
              <div className='icon'>
                <i className='pe-7s-mail'></i>
              </div>
              <h3>Email</h3>
              <p>{info.email}</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='contact-info-box'>
              <div className='icon'>
                <i className='pe-7s-map-2'></i>
              </div>
              <h3>Location</h3>
              <p>{`${info.address.city}, ${info.address.state_initals} ${info.address.zipcode}`}</p>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
            <div className='contact-info-box'>
              <div className='icon'>
                <i className='pe-7s-call'></i>
              </div>
              <h3>Call Me</h3>
              <p>‪(772) 208-9486‬</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
