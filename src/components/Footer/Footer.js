import React from 'react'
import { css } from '@emotion/core'

import { Container, Row, Col } from '../../utils/grid'
import { P } from '../../utils/type'

import SocialNav from '../SocialNav'
import Subscribe from './Subscribe/Subscribe'
import ThemeSwitch from '../ThemeSwitch'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row noGutters>
					<Col>
						<section css={footerContent}>
							<Container>
								<Row>
									<Col colMdUp="6" css={footerCol}>
										<div css={guarantee}>
											<P css={title}>OUR GUARANTEE</P>
										</div>
										<SocialNav />
									</Col>
									<Col
										colMdUp="6"
										css={css`
											${footerCol};
											margin-bottom: 0;
										`}
									>
										<Subscribe />
									</Col>
									<Col>
										<ThemeSwitch />
									</Col>
								</Row>
							</Container>
						</section>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

//STYLES BLOCK
const footerContent = props => css`
	margin: 50px auto 0;
	text-align: center;
	display: flex;
	justify-content: space-between;
	max-width: 465px;

	${props.breakpoint['tablet']} {
		max-width: 100%;
	}
`

const footerCol = props => css`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: 50px;

	${props.breakpoint['tablet']} {
		flex-direction: row;
		margin-bottom: 0;
	}
`

const guarantee = css`
	margin-bottom: 50px;
`

const title = css`
	font-weight: 600;
`
//END STYLES

export default Footer
