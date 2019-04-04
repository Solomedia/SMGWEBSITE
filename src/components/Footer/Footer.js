import React from 'react'
import { css } from '@emotion/core'

import { Container, Row, Col } from '../../utils/grid'
import { P } from '../../utils/type'
import ThemeSwitch from './ThemeSwitch'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col>
						<section css={footerContent}>
							<P>OUR GUARANTEE</P>
							<div>
								<P>CONNECT WITH US.</P>
							</div>
							<div>
								<P>STAY WOKE.</P>
								<P>
									SUBSCRIBE TO SEE WHAT’S GOING ON WITHIN SOLO MEDIA AND THE
									DESIGN & DEVELOPMENT WORLD.
								</P>
							</div>
							<ThemeSwitch />
						</section>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

//STYLES BLOCK
const footerContent = css`
	margin: 200px 0;
	text-align: center;
	display: flex;
	justify-content: space-between;
`
//END STYLES

export default Footer
