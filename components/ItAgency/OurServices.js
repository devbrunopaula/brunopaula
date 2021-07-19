import React, {Component} from 'react'
import Link from 'next/link'

class OurServices extends Component {
	render() {
		return (
			<div className='ptb-100 pb-60'>
				<div className='container'>
					<div className='section-title'>
						<h2>My Skills</h2>
						<p>
							I am passionate about building excellent software
							that improves the lives of those around me..
						</p>
					</div>

					<div className='row'>
						<div className='col-lg-4 col-sm-6'>
							<div className='service-card-one bg-fcfbfb'>
								<i className='pe-7s-comment bg-13c4a1'></i>
								<h3>
									<Link href='/service-details'>
										<a>Content Management</a>
									</Link>
								</h3>
								<p>Wordpress- Drupal - Ecommerce</p>
							</div>
						</div>

						<div className='col-lg-4 col-sm-6'>
							<div className='service-card-one bg-fcfbfb'>
								<i className='pe-7s-display2 bg-6610f2'></i>
								<h3>
									<Link href='/service-details'>
										<a>Web Development</a>
									</Link>
								</h3>
								<p>Static - Dynamic web debevopment.</p>
							</div>
						</div>

						<div className='col-lg-4 col-sm-6'>
							<div className='service-card-one bg-fcfbfb'>
								<i className='pe-7s-light bg-ffb700'></i>
								<h3>
									<Link href='/service-details'>
										<a>Digital Marketing</a>
									</Link>
								</h3>
								<p>
									Pay-Per-Click - SEO - Facebook - Instagram.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default OurServices
