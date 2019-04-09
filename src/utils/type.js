import styled from '@emotion/styled'
import { css } from '@emotion/core'

const typeColor = props => css`
	color: ${props.theme.color.primary};
`

const pSize = props => css`
	font-size: ${props.large ? '21px' : '18px'};
	line-height: ${props.large ? '25px' : '22px'};
`

const P = styled.p`
	${pSize}
`

const H1 = styled.h1`
	${typeColor};
	font-size: 54px;
	font-weight: bold;
	line-height: 65px;
	text-align: center;

	${props => `${props.theme.breakpoint['phoneSmall']}`} {
		font-size: 10vw;
		line-height: 11vw;
	}
`

const h2Size = props => css`
	font-size: ${props.large ? '34px' : props.small ? '25px' : '29px'};
	line-height: ${props.large ? '41px' : props.small ? '30px' : '35px'};
`

const H2 = styled.h2`
	${typeColor};
	${h2Size};
	font-weight: 500;
`

const h3size = props => css`
	font-size: ${props.large ? '25px' : '20px'};
	line-height: ${props.large ? '30px' : '24px'};
`

const H3 = styled.h3`
	${typeColor};
	${h3size};
	font-weight: 500;
`

const Quote = styled.blockquote`
	font-size: 17px;
	font-weight: 600;
	line-height: 20px;
`

const Cite = styled.cite`
	font-size: 21px;
	line-height: 25px;
`

export { P, H1, H2, H3, Quote, Cite }
