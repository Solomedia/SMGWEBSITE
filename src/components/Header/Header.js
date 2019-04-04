import React from 'react'
import { css } from '@emotion/core'

import { H3 } from '../../utils/type'
import { Container, Row, Col } from '../../utils/grid'
import Logo from './Logo'

const Header = () => (
	<header>
		<Container>
			<Row>
				<Col>
					<section css={HeaderContent}>
						<div css={lefCol}>
							<H3 css={subTitle}>SOLO MEDIA GROUP</H3>
							<H3 css={customTitles}>DESIGN & DEVELOPMENT AGENCY</H3>
						</div>
						<Logo />
						<div css={rightCol}>
							<H3 css={subTitle}>CALL: +1 917 310 1803</H3>
							<H3 css={customTitles}>E-MAIL: INFO@SOLOMEDIAGROUP.CO</H3>
						</div>
					</section>
				</Col>
			</Row>
		</Container>
	</header>
)

//STYLES BLOCK
const HeaderContent = props => css`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto;
	max-width: 940px;

	${props.breakpoint['tablet']} {
		flex-wrap: nowrap;
		justify-content: center;
	}
`

const headerCol = css`
	margin-bottom: 10px;
`

const rightCol = props => css`
	${props.breakpoint['phone']} {
		${headerCol};
		order: 2;
		padding-left: 10px;
	}
`

const lefCol = props => css`
	text-align: right;

	${props.breakpoint['phone']} {
		${headerCol};
		order: 1;
	}
`

const subTitle = props => css`
	${props.breakpoint['phoneSmall']} {
		text-align: center;
	}
`

const customTitles = props => css`
	font-size: 18px;
	font-style: italic;
	font-weight: 300;
	margin-top: 10px;
	text-align: center;

	${props.breakpoint['phone']} {
		font-size: 17px;
		margin-top: 5px;
	}
`
//END STYLES

export default Header
