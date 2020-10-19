import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import ReactWOW from 'react-wow';

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
                <div className="main-banner item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <span>A Digital Agency</span>
                                            <h1>We're a full-range digital agency.</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <Link href="/contact">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>
 
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                    <i className="icofont-ui-play"></i> How it works
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="banner-animation-image">
                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape1.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape2.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInDown' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape3.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInDown' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape4.png" alt="image" />
                                            </ReactWOW>
                                            
                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape5.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='rollIn' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape6.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape7.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInLeft' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape8.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape9.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInDown' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape10.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape11.png" alt="image" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.5s'>
                                                <img src="/images/banner-shapes/bn-shape12.png" alt="image" />
                                            </ReactWOW>
                                            
                                            {/* Main Image */}
                                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                                <img src="/images/banner-img1.png" className="main-pic" alt="image" />
                                            </ReactWOW>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default MainBanner;