import React, {Component} from 'react'
import Link from 'next/link'

class ServiceStyleTwo extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='service-style-two ptb-100 bg-fcfbfb'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='service-info pr-50'>
									<div className='info-head'>
										<h2 className='title'>
											Frontend Development
										</h2>
									</div>

									<div className='row'>
										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												HTML / CSS
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Sass
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												React / Next Js
											</div>
										</div>

										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Redux
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Wordpress
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Material UI / Bootstrap
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='col-lg-6'>
								<div className='service-right-img'>
									<img
										src='/images/services/front.svg'
										alt='frontend bruno'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='service-style-two ptb-100'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='service-left-img'>
									<img
										src='/images/services/back.gif'
										alt='Service Image'
									/>
								</div>
							</div>

							<div className='col-lg-6'>
								<div className='service-info pl-50'>
									<div className='info-head'>
										<h2 className='title'>
											Backend Development
										</h2>
									</div>

									<div className='row'>
										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Node Js
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Express / Adonis
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Laravel
											</div>
										</div>

										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												SQL Databases
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Authentication & Authorization
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Testing
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='service-style-two ptb-100 bg-fcfbfb'>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-lg-6'>
								<div className='service-info pr-50'>
									<div className='info-head'>
										<h2 className='title'>
											Cloud Hosting Services
										</h2>
									</div>

									<div className='row'>
										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Heroku
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Share Hosting
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Vercel
											</div>
										</div>

										<div className='col-sm-6'>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Netlify
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Static Website Hosting
											</div>
											<div className='feature-list'>
												<i className='icofont-check-circled'></i>
												Backup Systems
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='col-lg-6'>
								<div className='service-right-img'>
									<img
										src='/images/services/cloud.gif'
										alt='Service Image'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default ServiceStyleTwo
