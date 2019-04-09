import React from 'react'
import { css } from '@emotion/core'

import { Quote, Cite } from '../../utils/type'
import QuoteThumbnail from '../../images/quote-thumbnail.png'
import theme from '../../constants/theme-styles'

const ClientQuote = () => (
	<Quote css={quote}>
		<p>
			SOLO MEDIA TOOK THE TIME WITH OUR TEAM TO DEVELOP, DESIGN, AND MIGRATE OUR
			SITE TO MAGENTO 2. WE FELT AT EASE THROUGH THE PROCESS AND WERE ABLE TO
			SET UP A STREAMLINED PROCESS FOR OUR GLOBAL DISTRIBUTORS.
		</p>
		<footer css={quoteFooter}>
			<img src={QuoteThumbnail} alt="" css={quoteImage} />
			<div css={citeBox}>
				<Cite>SU HWEI LIN</Cite>
				<address>MANHATTAN PORTAGE</address>
			</div>
		</footer>
	</Quote>
)

//STYLES BLOCK
const quote = ({ color, breakpoint, themeName }) => css`
	border-radius: 10px;
	border: 9px solid ${themeName === 'Light' ? color.alto : color.secondary};
	padding: 45px 38px 0 20px;
	margin-top: 10%;
	position: relative;
	quotes: '„' '“';

	${breakpoint['phoneSmall']} {
		margin-top: 20%;
		padding-bottom: 20px;
	}

	${breakpoint['tablet']} {
		margin-top: 65px;
		padding: 45px 38px 0 20px;
	}

	&:before,
	&:after {
		background: ${color.primary};
		color: ${color.secondary};
		content: '';
		display: inline-block;
		font-family: serif;
		font-size: 150px;
		height: 125px;
		position: absolute;
		text-align: center;
		width: 145px;
	}

	&:before {
		content: open-quote;
		left: 0;
		top: 0;
		transform: translate(-50%, -50%);
	}

	&:after {
		bottom: 0;
		content: close-quote;
		line-height: 150px;
		right: 0;
		transform: translate(50%, 50%);
	}
`

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

export default ClientQuote
