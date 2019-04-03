import styled from '@emotion/styled'
import { css } from '@emotion/core'

const typeColor = props => css`
	color: ${props.theme.color.primary};
`

const P = styled.p`
	${typeColor};
	font-size: 18px;
	line-height: 22px;

	&.big {
		font-size: 21px;
		line-height: 25px;
	}
`

const H1 = styled.h1`
  ${typeColor};
  font-size: 54px;
	font-weight: bold;
	line-height: 65px;
`

const H2 = styled.h2`
  ${typeColor};
  font-size: 29px;
	font-weight: 500;
	line-height: 35px;

	&.big {
		font-size: 34px;
		line-height: 41px;
	}

	&.small {
		font-size: 25px;
		line-height: 30px;
	}
`

const H3 = styled.h3`
  ${typeColor};
  font-size: 20px;
	line-height: 24px;
	font-weight: 500;

	&.big {
		font-size: 25px;
		line-height: 30px;
	}
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
