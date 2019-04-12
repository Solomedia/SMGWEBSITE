import React from 'react'
import { css } from '@emotion/core'

import { H1, P } from '../../utils/type'
import ContactForm from './ContactForm'

const Contact = () => (
	<section css={contactSection}>
		<H1 css={header}>CONTACT US.</H1>
		<P large subTitle css={paragraph}>
			IF YOUR’E INTERESTED IN WORKING TOGETHER OR HAVE QUESTIONS…FILL OUT THE
			Contact BELOW.
		</P>

		<ContactForm />
	</section>
)

//STYLES BLOCK
const contactSection = css`
	padding: 50px 20px 25px;
	max-width: 505px;
	margin: 0 auto;
`

const header = props => css`
	margin-bottom: 30px;
	text-align: center;

	${props.breakpoint['phoneSmall']} {
		margin-bottom: 5%;
	}
`

const paragraph = css`
	text-align: center;
`
//END STYLES

export default Contact
