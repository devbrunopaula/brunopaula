import React, {Component} from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'

class WhyChooseUs extends Component {
	state = {
		isOpen: false,
	}
	openModal = () => {
		this.setState({isOpen: true})
	}

	render() {
		return (
			<section className='about-area ptb-100'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-7 col-md-12'>
							<div className='about-content about-content-two pl-0 mt-0'>
								<div className='section-title'>
									<h2>Why Choose Me</h2>
									<p>
										I'm a Fullstack Developer & Student in
										Boston, MA. I have serious passion for
										web technology such as, effects,
										animations and static & dynamic user
										experiences.
									</p>
								</div>

								<div className='about-text'>
									<h4>Who We Are</h4>
									<p>
										Sed ut perspiciatis unde omnis iste
										natus error sit voluptatem accusantium
										doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo
										inventore veritatis et quasi architecto
										beatae vitae dicta sunt explicabo. A
										Family person, a great husband and
										father of two.
									</p>
								</div>

								<div className='about-text'>
									<h4>My History</h4>
									<p>
										I’ve always sought out opportunities and
										challenges that are meaningful to me.
										Although my professional path has taken
										many twists and turns — from touring and
										recording artist, to employee of the
										year at a large franchise, to owner and
										entrepreneur — I've never stopped
										engaging my passion around comptuters
										and programming.
									</p>
								</div>

								<div className='about-text'>
									<h4>My Mission</h4>
									<p>
										As a web developer, I enjoy using my
										obsessive attention to detail, my
										unequivocal love for making things, and
										my mission-driven work ethic to
										literally change the world around me.
										That's why I’m excited to make a big
										impact at at your company.
									</p>
								</div>
							</div>
						</div>

						<div className='col-lg-5 col-md-12'>
							<div className='about-image right-image'>
								<img
									src='https://icaninfosoft.com/wp-content/uploads/2021/03/tenor.gif'
									alt='image'
									className='rounded-10'
									height='480'
									width='100'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default WhyChooseUs
