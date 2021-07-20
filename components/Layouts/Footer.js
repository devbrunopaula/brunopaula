import React, {Component} from 'react'
import Link from 'next/link'
import {info} from '../../utils/info'

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
											<img
												src='/images/logo.png'
												alt='bruno logo'
											/>
										</a>
									</Link>
								</div>

								<p>
									Whether you have a question or just want to
									say hi, let's chat.
								</p>

								<ul className='social-links'>
									<li>
										<Link href={info.social_media.github}>
											<a
												target='_blank'
												data-toggle='tooltip'
												title='Github'
											>
												<i className='icofont-github'></i>
											</a>
										</Link>
									</li>
									<li>
										<Link href={info.social_media.twitter}>
											<a
												target='_blank'
												data-toggle='tooltip'
												title='Twitter'
											>
												<i
													className='icofont-twitter'
													linkedin
												></i>
											</a>
										</Link>
									</li>
									<li>
										<Link href={info.social_media.linkedin}>
											<a
												target='_blank'
												data-toggle='tooltip'
												title='Linkedin'
											>
												<i className='icofont-linkedin'></i>
											</a>
										</Link>
									</li>
									<li>
										<Link
											href={info.social_media.instagram}
										>
											<a
												target='_blank'
												data-toggle='tooltip'
												title='Instagram'
											>
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
										<Link href='/projects'>
											<a>Portfolio</a>
										</Link>
									</li>
									<li>
										<a href='/resume.pdf' target='_blank'>
											My Resume
										</a>
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
										<i className='icofont-home'></i>
										{`${info.address.city},
                    ${info.address.state} USA.`}
									</li>
									<li></li>
									<li>
										<i className='icofont-live-support'></i>{' '}
										{`${info.phone}`}
									</li>
									<li>
										<i className='icofont-envelope'></i>{' '}
										{`${info.email}`}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='copyright-area'>
					<div className='container'>
						<p>
							&copy; Copyright {currentYear} WebBrunoPaula. All
							Rights Reserved By{' '}
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
