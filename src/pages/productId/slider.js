import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../../img/00.jpg'
import logo1 from '../../img/1.png'
import logo2 from '../../img/slide1.jpg'
import Image from 'next/image'

const Slider = () => {
  return (
    <Carousel fade>
        <Carousel.Item interval={ 3000 }>
            <Image src={logo} alt='' className='w-100 b-block' height={555} loading='lazy' placeholder='blur' />
        </Carousel.Item>
        <Carousel.Item interval={ 3000 }>
            <Image src={logo1} alt='' className='w-100 b-block' height={555} loading='lazy' placeholder='blur' />
        </Carousel.Item>
        <Carousel.Item interval={ 3000 }>
            <Image src={logo2} alt='' className='w-100 b-block' height={555} loading='lazy' placeholder='blur' />
        </Carousel.Item>
    </Carousel>
  )
}

export default Slider