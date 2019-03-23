import React from 'react'
import { css } from '@emotion/core'
import { H1 } from '../../utils/type'
import HandImage from '../../images/banner-logos/hand-image.png'
import Guarantee from './Guarantee'
import LogoList from './LogoList'

//STYLES BLOCK
const bannerContent = props => css`
	text-align: center;
	max-width: 940px;
	margin: 120px auto 0;
	position: relative;

	${props.breakpoint['phone']} {
		margin-top: 10%;
	}
`

const bannerTitle = props => css`
	margin-bottom: 80px;

	${props.breakpoint['phone']} {
	  font-size: 5.3vw;
    line-height: 6.5vw;
    margin-bottom: 10%;
	}
`

const handImageBox = props => css`
		display: none;
	  position: absolute;
    width: 265px;
    right: 0;
    transform: translateX(100%);

		${props.breakpoint['large']} {
			display: block;
		}
`
//END STYLES

const Banner = () => (
	<section css={bannerContent}>
		<img src={HandImage} alt="" css={handImageBox} />
		<H1 css={bannerTitle}>
			ALL PROJECTS DELIVERED
			ON TIME, ON BUDGET, & ON SCOPE.
		</H1>
		<Guarantee />
		<LogoList />
	</section>
)

export default Banner;
