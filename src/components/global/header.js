import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import LogoImg from '../../images/logo-solo-media.png'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { H3 } from '../../utils/type'
import { Container, Row, Col } from '../../utils/grid'

//STYLES BLOCK
const HeaderContent = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
`

const LogoContainer = styled.h1`
	background-color: ${props => props.theme.color.primary};
	border-radius: 100%;
	display: flex;
	min-height: 145px;
	align-items: center;
	margin: 0 20px;
`

const customHeader = css`
	margin-top: 15px;
	font-style: italic;
	font-weight: 300;
`
//END STYLES

const Header = () => (
  <header>
		<Container>
			<Row>
				<Col>
					<HeaderContent>
						<div css={{textAlign: "right"}}>
							<H3>SOLO MEDIA GROUP</H3>
							<H3 css={customHeader}>DESIGN & DEVELOPMENT AGENCY</H3>
						</div>
						<LogoContainer>
							<Link to="/">
								<img src={LogoImg} alt="" />
							</Link>
						</LogoContainer>
						<div>
							<H3>CALL: +1 917 310 1803</H3>
							<H3 css={customHeader}>E-MAIL: INFO@SOLOMEDIAGROUP.CO</H3>
						</div>
					</HeaderContent>
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
