import React from 'react'
import { css } from '@emotion/core'

import { H2 } from '../../../utils/type'

//STYLES BLOCK
const customBreakpoint = `@media (min-width: 992px)`;

const titleStyles = props => css`
	color: ${props.color.secondary};
	display: flex;
	font-size: 49px;
	line-height: 51px;
  align-items: center;

	${props.breakpoint['phoneSmall']} {
		font-size: 8.5vw;
    line-height: 9vh;
	}

	span {
		color: ${props.color.cerulean};
		font-size: 123px;
		line-height: 148px;
		opacity: .3;
    min-width: 120px;

		${props.breakpoint['phoneSmall']} {
			font-size: 21.3vw;
    	line-height: 25.8vw;
			margin-right: 10px;
			min-width: 90px;
		}

		${customBreakpoint} {
			margin-right: -17px;
		}
	}
`
//END STYLES BLOCK

const ServiceHeader = ({title, number}) => {
	return (
	<H2 css={titleStyles}>
		<span>{number}</span>
		{title}
	</H2>

	)
}

export default ServiceHeader;
