import React from 'react'
import LogoImg from '../../images/logo-solo-media.png'
import { Link } from 'gatsby'
import theme from '../../constants/theme-styles'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const { breakpoint } = theme;

//STYLES BLOCK
const LogoContainer = styled.div`

	${breakpoint['phone']} {
		width: 100%;
	}
`

const fluidImage = css`
	width: 100%;
`

const LogoHeader = styled.h1`
	background-color: ${props => props.theme.color.primary};
	display: flex;
	align-items: center;
	transition: width 1s linear;

	${breakpoint['phone']}{
		width: 150px;
    margin: 0 auto;
	}

	${breakpoint['phoneSmall']}{
		width: 120px;
	}

	${breakpoint['tablet']} {
		margin: 0 20px;
		min-height: 145px;
	}
`
//END STYLES

const logo = () => (
	<LogoContainer>
		<LogoHeader>
			<Link to="/">
				<img src={LogoImg} css={fluidImage} alt="" />
			</Link>
		</LogoHeader>
	</LogoContainer>
)

export default logo;
