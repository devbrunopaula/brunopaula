import React, {Component} from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import {LatestProjects} from '../Projects/latestProjects'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
	//items: 3,
	loop: true,
	nav: false,
	dots: true,
	autoplayHoverPause: true,
	autoplay: true,
	navText: [
		"<i className='pe-7s-angle-left'></i>",
		"<i className='icofont-thin-double-right'>next</i>",
	],
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		1200: {
			items: 3,
		},
	},
}

class LatestNewsSlider extends Component {
	_isMounted = false
	state = {
		display: false,
	}
	componentDidMount() {
		this._isMounted = true
		this.setState({display: true})
	}
	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		return (
			<section className='blog-area ptb-100'>
				<div className='container'>
					<div className='section-title'>
						<h2>Latest Projects</h2>
					</div>

					<div className='row'>
						{this.state.display ? (
							<OwlCarousel
								className='blog-slides owl-carousel owl-theme'
								{...options}
							>
								<LatestProjects data={this.props.blog} />
							</OwlCarousel>
						) : (
							''
						)}
					</div>
				</div>
			</section>
		)
	}
}

export default LatestNewsSlider
