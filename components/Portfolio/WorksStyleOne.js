import React, {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import ProjectCard from '../Projects/projectCard'
const OwlCarousel = dynamic(import('react-owl-carousel3'))

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 20,
  navText: [
    "<i class='pe-7s-angle-left'></i>",
    "<i class='pe-7s-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1800: {
      items: 5,
    },
  },
}

const WorksStyleOne = ({data}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setDisplay(true)

    return () => {
      setIsMounted(false)
    }
  })

  return (
    <section className='case-studies-area ptb-100'>
      <div className='container-fluid'>
        <div className='section-title'>
          <h2>Top Projects</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {display ? (
          <OwlCarousel
            className='work-slides owl-carousel owl-theme'
            {...options}
          >
            {data &&
              data.map((data) => (
                <ProjectCard
                  data={data.fields}
                  id={data.sys.id}
                  key={data.sys.id}
                />
              ))}
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </section>
  )
}

export default WorksStyleOne

// OLD Component
