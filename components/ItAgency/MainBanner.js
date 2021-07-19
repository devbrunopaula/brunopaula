import React, {Component} from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'
import Typist from 'react-typist'
import Image from 'next/image'

class MainBanner extends Component {
	state = {
		isOpen: false,
	}
	openModal = () => {
		this.setState({isOpen: true})
	}

	render() {
		return (
			<React.Fragment>
				<div className='hero-banner it-banner overly hero-bg4'>
					<div className='d-table'>
						<div className='d-table-cell'>
							<div className='container'>
								<div className='row align-items-center'>
									<div className='col-lg-6'>
										<div className='main-banner-content'>
											<Typist>
												<h1>Hi, I am Bruno</h1>

												<p>
													I am a Full-Stack Web
													Developer
												</p>
											</Typist>
											<Link href='/contact'>
												<a className='btn btn-primary'>
													Let's Meet
												</a>
											</Link>

											<Link href='/projects'>
												{/* <a
                          // onClick={(e) => {
                          //   e.preventDefault()
                          //   this.openModal()
                          // }}
                          className='btn btn-secondary'
                        ></a> */}
												<a className='btn btn-secondary'>
													<i className='icofont-ui-play'></i>{' '}
													View my work
												</a>
											</Link>
										</div>
									</div>

									<div className='col-lg-6'>
										<div className='animate-banner-image'>
											<img
												src='/images/brunopaula.jpg'
												alt='Animate Bruno Paula Image'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default MainBanner
