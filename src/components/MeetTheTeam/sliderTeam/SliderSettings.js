import React from 'react'
import { NextArrow, PrevArrow } from './Arrows'

const SliderSettings = {
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
}

export default SliderSettings
