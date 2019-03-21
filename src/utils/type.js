import styled from '@emotion/styled';

const P = styled.p`
	color: ${props => props.theme.color.primary};
	font-size: 18px;
	line-height: 22px;
`

const H1 = styled.h1`
  color: ${props => props.theme.color.primary};
  font-size: 54px;
	font-weight: bold;
	line-height: 65px;
`

const H2 = styled.h2`
  color: ${props => props.theme.color.primary};
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
  color: ${props => props.theme.color.primary};
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
