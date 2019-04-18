import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

const ThankYouHeader = ({ title, copy }) => (
	<React.Fragment>
		<h1 css={header}>{title}</h1>
		<p css={paragraph} dangerouslySetInnerHTML={{ __html: copy }} />
	</React.Fragment>
)

//STYLES BLOCK
const header = props => css`
	font-size: 12vw;
	margin-bottom: 5%;

	${props.breakpoint['tablet']} {
		font-size: 77px;
		margin-bottom: 40px;
	}
`

const paragraph = props => css`
	font-size: 7vw;

	${props.breakpoint['phoneSmallUp']} {
		font-size: 35px;
	}

	${props.breakpoint['phone']} {
		br {
			display: none;
		}
	}
`
//END STYLES

ThankYouHeader.propTypes = {
	title: PropTypes.string.isRequired,
	copy: PropTypes.string.isRequired,
}

export default ThankYouHeader
