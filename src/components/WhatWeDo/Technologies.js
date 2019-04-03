import React from 'react'
import { css } from '@emotion/core'

import { P } from '../../utils/type'
import Button from '../../utils/buttons'

const technologies = [
	'PROGRESSIVE <br> WEB APPS',
	'PROGRAMS',
	'WEBSITES',
	'APPLICATIONS',
]

//STYLES BLOCK
const technologiesSection = props => css`
	margin-top: 5%;
	text-align: center;

	${props.breakpoint['desktop']} {
		margin-top: 50px;
	}
`

const technologiesList = props => css`
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: center;

	${props.breakpoint['tablet']} {
		justify-content: space-between;
	}
`

const technologiesItem = props => css`
	color: ${props.color.secondary};
	font-size: 3.5vw;
	line-height: 4.4vw;
	margin-bottom: 3%;
	padding: 0 10px;
	text-align: center;

	&:last-of-type {
		border-right: none;
	}

	${props.breakpoint['phoneSmall']} {
		font-size: 5vw;
		line-height: 7vw;
	}

	${props.breakpoint['tablet']} {
		border-right: 1px solid ${props.color.alto};
		padding: 10px 30px 0;
	}

	${props.breakpoint['tabletOnly']} {
		font-size: 24px;
		line-height: 33px;

		&:first-of-type {
			padding-left: 0;
		}

		&:last-of-type {
			padding-right: 0;
		}
	}

	${props.breakpoint['desktop']} {
		font-size: 30px;
		line-height: 42px;
	}
`

const paragraph = props => css`
	color: ${props.color.secondary};
	margin-bottom: 20px;
`
//END STYLES BLOCK

const Technologies = () => (
	<section css={technologiesSection}>
		<ul css={technologiesList}>
			{technologies.map(item => (
				<li
					css={technologiesItem}
					key={item.toLowerCase().trim()}
					dangerouslySetInnerHTML={{ __html: item }}
				/>
			))}
		</ul>
		<footer
			css={css`
				margin-top: 50px;
			`}
		>
			<P large css={paragraph}>
				READY TO GET STARTED?
			</P>
			<Button>LET’S TALK.</Button>
		</footer>
	</section>
)

export default Technologies
