import React from 'react'
import { css } from '@emotion/core'

import { Quote } from '../../utils/type'
import QuoteFooter from './QuoteFooter'

const ClientQuote = () => (
	<Quote css={quote}>
		<p>
			SOLO MEDIA TOOK THE TIME WITH OUR TEAM TO DEVELOP, DESIGN, AND MIGRATE OUR
			SITE TO MAGENTO 2. WE FELT AT EASE THROUGH THE PROCESS AND WERE ABLE TO
			SET UP A STREAMLINED PROCESS FOR OUR GLOBAL DISTRIBUTORS.
		</p>
		<QuoteFooter />
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
		line-height: 27px;
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
//END STYLES BLOCK

export default ClientQuote
