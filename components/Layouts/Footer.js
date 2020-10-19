import React, {Component} from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear()

    return (
      <footer className='footer-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='single-footer-widget'>
                <div className='logo'>
                  <Link href='/'>
                    <a>
                      <img src='/images/logo.png' alt='bruno logo' />
                    </a>
                  </Link>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className='social-links'>
                  <li>
                    <Link href='//www.facebook.com/brunopaulausa'>
                      <a target='_blank'>
                        <i className='icofont-facebook'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='//twitter.com/devbrunopaula'>
                      <a target='_blank'>
                        <i className='icofont-twitter'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='//www.linkedin.com/in/bruno-paula/'>
                      <a target='_blank'>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='//www.instagram.com/devbrunopaula/'>
                      <a target='_blank'>
                        <i className='icofont-instagram'></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-footer-widget ml-4 pl-5'>
                <h3>Explore</h3>

                <ul className='list'>
                  <li>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>About Me</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href='/services'>
                      <a>Services</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href='/portfolio'>
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>My Resume</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className='col-lg-3 col-sm-6'>
              <div className='single-footer-widget ml-4'>
                <h3>Quick Links</h3>

                <ul className='list'>
                  <li>
                    <Link href='/contact'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/pricing'>
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>Faq</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/privacy-policy'>
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/terms-conditions'>
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className='col-lg-3 col-sm-6'>
              <div className='single-footer-widget'>
                <h3>Get in Touch</h3>

                <ul className='get-in-touch'>
                  <li>
                    <i className='icofont-home'></i> Boston Massachusetts, USA.
                  </li>
                  <li>
                    <i className='icofont-live-support'></i> 774-268-1024
                  </li>
                  <li>
                    <i className='icofont-envelope'></i> hello@pungent.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright-area'>
          <div className='container'>
            <p>
              &copy; Copyright {currentYear} WebBrunoPaula. All Rights Reserved
              By{' '}
              <a href='https://brunopaula.com' target='_blank'>
                Bruno Paula
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
