import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import LogoImg from '../../images/logo-solo-media.png'
import { H1 } from '../../utils/type'

//STYLES BLOCK
const logoContainer = props => css`

	${props.breakpoint['phone']} {
		width: 100%;
	}
`

const logoHeader = props => css`
	background-color: ${props.color.primary};
	display: flex;
	align-items: center;
	transition: width 1s linear;

	${props.breakpoint['phone']}{
		width: 150px;
    margin: 0 auto;
	}

	${props.breakpoint['phoneSmall']}{
		width: 120px;
	}

	${props.breakpoint['tablet']} {
		margin: 0 20px;
		min-height: 145px;
	}
`
//END STYLES

const Logo = () => (
	<div css={logoContainer}>
		<H1 css={logoHeader}>
			<Link to="/">
				<img src={LogoImg} css={css`width: 100%;`} alt="" />
			</Link>
		</H1>
	</div>
)

export default Logo;
