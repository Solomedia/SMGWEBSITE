import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import Button from '../../utils/buttons'

const ThankYouFooter = ({ copy, number, button }) => (
	<React.Fragment>
		<div css={footer}>
			<p dangerouslySetInnerHTML={{ __html: copy }} />
			{number && (
				<span css={numberStyles} itemProp="telephone">
					<a href={`tel:${number}`}>{number}</a>
				</span>
			)}
			{button && <Button>{button}</Button>}
		</div>
	</React.Fragment>
)

//STYLES BLOCK

const footer = props => css`
	margin-top: 10%;

	p {
		font-size: 6vw;
		margin-bottom: 5%;
	}

	${props.breakpoint['phoneSmallUp']} {
		margin-top: 90px;

		p {
			font-size: 31px;
			margin-bottom: 30px;
		}
	}
`

const numberStyles = ({ breakpoint, color }) => css`
	color: ${color.cerulean};
	font-size: 9vw;
	font-weight: 700;
	display: block;

	${breakpoint['phoneSmallUp']} {
		font-size: 47px;
	}
`

//END STYLES

ThankYouFooter.propTypes = {
	copy: PropTypes.string.isRequired,
	number: PropTypes.string,
	button: PropTypes.string,
}

export default ThankYouFooter
