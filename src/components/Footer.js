import React from 'react'
import { Container, Row, Col } from '../utils/grid'
import { P } from '../utils/type'
import { css } from '@emotion/core'

//STYLES BLOCK
const footerContent = css`
	text-align: center;
`
//END STYLES

const Footer = () => (
  <footer>
		<Container>
			<Row>
				<Col>
					<section css={footerContent}>
						<P css={css`font-weight: bold;`}>STAY WOKE.</P>
						<P>SUBSCRIBE TO SEE WHAT’S GOING ON WITHIN SOLO MEDIA AND THE DESIGN & DEVELOPMENT WORLD.</P>
					</section>
				</Col>
			</Row>
		</Container>
  </footer>
)

export default Footer
