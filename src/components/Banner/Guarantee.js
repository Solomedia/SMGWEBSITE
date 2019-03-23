import React from 'react'
import { css } from '@emotion/core'
import { H2 } from '../../utils/type'
import { Link } from 'gatsby'
import Button from '../../utils/buttons'

const quarantee = props => css`
	margin-bottom: 50px;

	${props.breakpoint['phone']} {
		margin-bottom: 10%;

		h2 {
			font-size: 23px;
		}
	}
`

const Guarantee = () => (
	<React.Fragment>
		<div css={quarantee}>
			<H2>WE GUARANTEE IT.</H2>
			<Link to="#">OUR GUARANTEE</Link>
		</div>

		<div>
			<Button>Let's Talk</Button>
		</div>
	</React.Fragment>
)

export default Guarantee;
