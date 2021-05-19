import React, {Component} from 'react'
import Link from 'next/link'
import ModalVideo from 'react-modal-video'

class About extends Component {
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
            <div className='col-lg-5 col-md-12'>
              <div className='about-image'>
                {/* <img
                  src='/images/family.jpg'
                  alt='image'
                  className='rounded-10'
                /> */}

                <div className='video-box'>
                  <img src='/images/family.jpg' alt='' />
                  <Link href='#play-video'>
                    <a
                      onClick={(e) => {
                        e.preventDefault()
                        this.openModal()
                      }}
                      className='video-btn'
                    >
                      <i className='pe-7s-play'></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-12'>
              <div className='about-content about-content-two'>
                <div className='section-title'>
                  <h2>About Me</h2>
                  <p>I am Bruno Paula, the guy behind this beautiful family.</p>
                </div>

                <div className='about-text'>
                  <h4>Education</h4>

                  <p>Self-taught Web Developer</p>
                  <p>Lambda Coding School</p>
                  <p>Passion and Love for coding</p>
                </div>

                <div className='about-text'>
                  <h4>My History</h4>

                  <p>
                    I enjoy building websites and applications from the ground
                    up, which lead me to study web development 24/7. I am
                    married to my gorgeus wife Priscila, and together we have
                    two beautiful childrens.
                  </p>
                </div>

                <div className='about-text'>
                  <h4>My Mission</h4>
                  <ul>
                    <li>
                      <i className='pe-7s-check'></i>
                      Strive to bring my best on every project
                    </li>
                    <li>
                      <i className='pe-7s-check'></i>
                      Reach the goal of our clients
                    </li>
                    <li>
                      <i className='pe-7s-check'></i>
                      Give 100 percent to everything you do and never give up.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='3CQusoJSh0E'
          onClose={() => this.setState({isOpen: false})}
        />
      </section>
    )
  }
}

export default About
