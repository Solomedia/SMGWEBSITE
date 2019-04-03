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
	${typeColor};
	${pSize}
`

const H1 = styled.h1`
  ${typeColor};
  font-size: 54px;
	font-weight: bold;
	line-height: 65px;
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
	line-height: 20px;
	font-weight: 600;
`

const Cite = styled.cite`
	font-size: 21px;
	font-style: italic;
	font-weight: 500;
	line-height: 25px;
`

export { P, H1, H2, H3, Quote, Cite };
