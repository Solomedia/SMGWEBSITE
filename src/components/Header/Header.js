import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { H3 } from '../../utils/type'
import { Container, Row, Col } from '../../utils/grid'
import theme from '../../constants/theme-styles'
import Logo from './Logo'

const { breakpoint } = theme;

//STYLES BLOCK
const HeaderContent = css`
	align-items: center;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	max-width: 940px;
	margin: 0 auto;

	${breakpoint['tablet']} {
		justify-content: center;
		flex-wrap: nowrap;
	}
`

const headerCol = css`
	${breakpoint['phone']} {
		margin-top: 15px;
		min-width: 230px;
	}
`

const rightCol = css`
	${headerCol}

	${breakpoint['phone']} {
		order: 2;
	}
`

const lefCol = css`
	${headerCol}
	text-align: right;

	${breakpoint['phone']} {
		order: 1;
	}
`

const subTitle = css`

	${breakpoint['phoneSmall']} {
		text-align: center;
	}

	${breakpoint['phone']} {
		font-size: 14px;
		line-height: 14px;
	}
`

const customTitles = css`
	margin-top: 15px;
	font-style: italic;
	font-weight: 300;
	${subTitle};

	${breakpoint['phone']} {
	  margin-top: 7px
	}
`
//END STYLES

const Header = () => (
  <header>
		<Container>
			<Row>
				<Col>
					<section css={HeaderContent}>
						<div css={lefCol} align="left">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Solo`,
}

export default Header
