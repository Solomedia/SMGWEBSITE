import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import { H2 } from '../../../utils/type'

//STYLES BLOCK
const titleStyles = props => css`
	align-items: center;
	color: ${props.color.secondary};
	display: flex;
	font-size: 49px;
	line-height: 51px;

	${props.breakpoint['phoneSmall']} {
		font-size: 8vw;
		line-height: 9vh;
	}

	span {
		color: ${props.color.cerulean};
		font-size: 123px;
		line-height: 148px;
		min-width: 120px;
		opacity: 0.3;

		${props.breakpoint['phoneSmall']} {
			font-size: 21.3vw;
			line-height: 25.8vw;
			margin-right: 10px;
			min-width: 75px;
		}

		${props.breakpoint['medium']} {
			margin-right: -17px;
		}
	}
`
//END STYLES BLOCK

const ServiceHeader = ({ title }) => {
	return (
		<H2 css={titleStyles}>
			{/* <span>{number}</span> */}
			{title}
		</H2>
	)
}

ServiceHeader.propTypes = {
	title: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
}

export default ServiceHeader
