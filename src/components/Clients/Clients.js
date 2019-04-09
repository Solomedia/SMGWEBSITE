import React from 'react'
import { css } from '@emotion/core'

import ClientQuote from './ClientQuote'
import { H1, P } from '../../utils/type'

const Clients = () => (
	<section css={clientSection}>
		<div css={clientContent}>
			<H1 css={header}>CLIENTS LOVE US.</H1>
			<P large subTitle>
				WE’VE WORKED WITH ALL DIFFERENT KINDS OF BUSINESSES WHO ALL AGREE….WE
				ROCK.
			</P>
			<ClientQuote />
		</div>
	</section>
)

//STYLES BLOCK
const clientSection = props => css`
	background-color: ${props.color.primary};
	display: flex;
	height: 100%;
	justify-content: flex-end;
`

const clientContent = props => css`
	padding: 50px 25px;

	${props.breakpoint['tablet']} {
		max-width: 720px;
		padding: 175px 25px 135px;
	}

	h1,
	p,
	blockquote,
	cite {
		color: ${props.color.secondary};
		position: relative;
	}

	& > p {
		text-align: center;
	}
`

const header = props => css`
	margin-bottom: 5%;

	${props.breakpoint['tablet']} {
		font-size: 41px;
		line-height: 50px;
		margin-bottom: 30px;
	}

	${props.breakpoint['medium']} {
		font-size: 43px;
		line-height: 52px;
	}
`
//END STYLES BLOCK

export default Clients
