import React from 'react'
import { css } from '@emotion/core'

import { Container, Row, Col } from '../../utils/grid'
import { H1 } from '../../utils/type'
import DetailList from './DetailList'

const data = [
	'WE AGREE ON THE TIMEFRAME, THE COST, AND THE TASKS OF YOUR PROJECT.',
	'WE COMPLETE THE PROJECT <span>EXACTLY</span> AS DESCRIBED.',
	'<span>NO SURPRISES. NO CURVEBALLS. NO BULLSH*T.</span>',
	'OR YOUR <span>MONEY BACK.</span>',
]

const GuaranteeDetails = () => (
	<section css={section}>
		<Container>
			<Row>
				<Col>
					<H1 css={title}>Details</H1>
					<DetailList list={data} />
					<h2 css={subTitle}>GUARANTEED.</h2>
				</Col>
			</Row>
		</Container>
	</section>
)

//STYLES BLOCK
const section = props => css`
	background-color: ${props.color.primary};
	color: ${props.color.secondary};
	padding: 10% 5%;
	text-align: center;

	${props.breakpoint['tablet']} {
		padding: 100px 50px;
	}
`

const title = props => css`
	color: ${props.color.secondary};
	margin-bottom: 5%;

	${props.breakpoint['tablet']} {
		margin-bottom: 50px;
	}
`

const subTitle = props => css`
	font-size: 7vw;
	line-height: 1.2;

	${props.breakpoint['phoneSmallUp']} {
		font-size: 50px;
		line-height: 41px;
	}
`
//END STYLES

export default GuaranteeDetails
