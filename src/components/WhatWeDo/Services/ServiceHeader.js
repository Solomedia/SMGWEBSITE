import React, { useContext } from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { H2 } from '../../../utils/type'
import ThemeContext from '../../../context/ThemeContext'

const ServiceHeader = ({ title, number }) => {
	const theme = useContext(ThemeContext)

	return (
		<H2 css={titleStyles}>
			<ServiceNumber theme={theme.themeName}>{number}</ServiceNumber>
			{title}
		</H2>
	)
}

//STYLED COMPONENTS

const ServiceNumber = styled.span(({ theme }) => ({
	opacity: theme === 'Light' ? '0.3' : '1',
}))

//END STYLED COMPONENTS

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

ServiceHeader.propTypes = {
	title: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
}

export default ServiceHeader
