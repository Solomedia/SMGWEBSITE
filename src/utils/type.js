import styled from '@emotion/styled'
import { css } from '@emotion/core'

const pSize = props => css`
	font-size: ${props.sizeSmall ? props.sizeSmall : '5vw'};

	${props.theme.breakpoint['phoneSmallUp']} {
		font-size: ${props.large ? '21px' : props.size ? props.size : '18px'};
	}}
`

const aligment = props => css`
	text-align: ${props.left ? 'left' : props.right ? 'right' : 'center'};
`

const P = styled.p`
	${aligment};
	${pSize};
	${props =>
		props.weight
			? {
					fontWeight: props.weight,
			  }
			: null}
`

const H1 = styled.h1`
	${aligment};
	font-size: 10vw;
	font-weight: 700;

	${props => `${props.theme.breakpoint['phoneSmallUp']}`} {
		font-size: 54px;
	}
`

const h2Size = props => css`
	font-size: ${props.large ? '34px' : props.size ? props.size : '29px'};
`

const H2 = styled.h2`
	${aligment};
	${h2Size};
	font-weight: 500;
`

const h3size = props => css`
	font-size: ${props.large ? '25px' : props.size ? props.size : '20px'};
`

const H3 = styled.h3`
	${aligment};
	${h3size};
	font-weight: 500;
`

const Quote = styled.blockquote`
	font-size: 17px;
	font-weight: 600;
`

const Cite = styled.cite`
	font-size: 21px;
`

export { P, H1, H2, H3, Quote, Cite }
