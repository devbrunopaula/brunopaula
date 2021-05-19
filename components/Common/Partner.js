import React, {Component} from 'react'
import Link from 'next/link'

class Partner extends Component {
  render() {
    return (
      <section className='partner-area pt-100 pb-60'>
        <div className='container'>
          <div className='section-title'>
            <h2>My Skills</h2>
            <p>
              I've developed web applications using up-to-date technology stack,
              which includes:
            </p>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img
                  src='https://img.icons8.com/nolan/64/react-native.png'
                  alt='React Js'
                />
                <p>React</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/javascript.png' />
                <p>JavaScript</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/css3.png' />
                <p>Css</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/sass.png' />
                <p>Lass & Scss</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/vue-js.png' />
                <p>Vue Js</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/nodejs.png' />
                <p>Node JS</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/html-5--v1.png' />
                <p>HTML</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/fluent/48/000000/mysql-logo.png' />
                <p>MySQL</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/woocommerce.png' />
                <p>WooCommerce</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/wordpress.png' />
                <p>Wordpress</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/fluent/48/000000/laravel.png' />
                <p>Laravel</p>
              </div>
            </div>

            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/color/48/000000/heroku.png' />
                <p>Heroku</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/fluent/48/000000/google-logo.png' />
                <p>Adwords</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/fluent/48/000000/adobe-photoshop.png' />
                <p>Photoshop</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/fluent/48/000000/paid-search.png' />
                <p>SEO</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img src='https://img.icons8.com/doodle/48/000000/figma.png' />
                <p>Figma</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img
                  src='https://miro.medium.com/max/800/1*Dno6e7KS5HcdGybg9A0onQ.png'
                  height='48'
                />
                <p>Express JS</p>
              </div>
            </div>
            <div className='col-lg-2 col-6 col-sm-4'>
              <div className='single-partner'>
                <img
                  src='data:image/png;base64,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'
                  height='48'
                />
                <p>Adonis JS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Partner
