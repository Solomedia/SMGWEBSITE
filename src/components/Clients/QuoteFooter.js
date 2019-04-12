import React from 'react'
import { css } from '@emotion/core'

import { Cite } from '../../utils/type'
import QuoteThumbnail from '../../images/quote-thumbnail.png'

const QuoteFooter = () => (
	<footer css={quoteFooter}>
		<img src={QuoteThumbnail} alt="" css={quoteImage} />
		<div css={citeBox}>
			<Cite>SU HWEI LIN</Cite>
			<address>MANHATTAN PORTAGE</address>
		</div>
	</footer>
)

//STYLES BLOCK
const quoteFooter = props => css`
	align-items: center;
	display: flex;
	margin: 20px -20px 0;
	position: relative;
	z-index: 1;

	${props.breakpoint['phoneSmall']} {
		align-items: flex-start;
		flex-direction: column;
	}

	cite,
	address {
		font-size: 3vw;
		line-height: 3.5vw;
		position: relative;
		z-index: 1;

		${props.breakpoint['phoneSmall']} {
			font-size: 4.2vw;
			line-height: 5vw;
		}

		${props.breakpoint['tablet']} {
			font-size: 21px;
			line-height: 25px;
		}
	}

	cite {
		font-weight: 700;
	}

	address {
		font-weight: 300;
	}
`

const quoteImage = props => css`
	height: 125px;
	width: 112px;

	${props.breakpoint['phoneSmall']} {
		margin-bottom: 10px;
	}
`

const citeBox = props => css`
	${props.breakpoint['phoneSmallUp']} {
		margin-left: 20px;
	}
`
//END STYLES BLOCK

export default QuoteFooter
