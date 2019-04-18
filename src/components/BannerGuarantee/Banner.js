import React from 'react'
import { css } from '@emotion/core'

import GuranteeList from './GuranteeList'
import Clock from '../../images/gurantee-list/clock.jpg'
import Money from '../../images/gurantee-list/money.jpg'
import Sanity from '../../images/gurantee-list/sanity.jpg'

const data = [
	{
		name: 'TIME',
		img: Clock,
	},
	{
		name: 'MONEY',
		img: Money,
	},
	{
		name: 'SANITY',
		img: Sanity,
	},
]

const Banner = () => (
	<React.Fragment>
		<h1 css={bannerTitle}>
			DON’T LET YOUR WEB PROJECT BECOME A HEADACHE.
			<strong>USE OUR GUARANTEE & SAVE:</strong>
		</h1>
		<GuranteeList list={data} />
	</React.Fragment>
)

//STYLES BLOCK
const bannerTitle = props => css`
	font-size: 5.5vw;
	font-weight: 400;
	line-height: 1.2;
	margin: 10% 0 5%;
	text-align: center;

	${props.breakpoint['tablet']} {
		font-size: 41px;
		margin: 100px 0 60px;
	}

	strong {
		display: block;
		font-weight: 700;
	}
`
//END STYLES

export default Banner
