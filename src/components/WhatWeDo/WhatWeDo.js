import React from 'react'
import { css } from '@emotion/core'

import { H1, H2 } from '../../utils/type'
import { Container, Row, Col } from '../../utils/grid'
import Technologies from './Technologies'
import Services from './Services/Services'

//STYLES BLOCK
const section = props => css`
	background-color: ${props.color.primary};
	padding: 75px 0 53px;
`

const subtitle = props => css`
	color: ${props.color.secondary};
	text-align: center;

	&.large {
		${props.breakpoint['phoneSmall']} {
			font-size: 6vw;
			line-height: 8vw;
		}
	}
`

const title = props => css`
	color: ${props.color.secondary};
	text-align: center;

	${props.breakpoint['phoneSmall']} {
		font-size: 9vw;
		line-height: 11vw;
	}
`
//END STYLES BLOCK

const WhatWeDo = () => (
	<section css={section}>
		<Container>
			<Row>
				<Col>
					<H1 css={title}>WE DO DESIGN & DEVELOPMENT.</H1>
					<H2 large css={subtitle} className="large">
						AND WE DO IT WELL.
					</H2>
				</Col>
				<Col>
					<Services />
					<Technologies />
				</Col>
			</Row>
		</Container>
	</section>
)

export default WhatWeDo
