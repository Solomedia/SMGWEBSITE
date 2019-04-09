import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import LogoImg from '../../images/logo-solo-media.png'

const Logo = () => {
	return (
		<div css={logoContainer}>
			<h1 css={LogoHeader}>
				<Link to="/">
					<img
						src={LogoImg}
						css={css`
							width: 100%;
						`}
						alt=""
					/>
				</Link>
			</h1>
		</div>
	)
}

//STYLED COMPONENTS
const LogoHeader = ({ color, breakpoint, themeName }) => css`
	display: flex;
	align-items: center;
	transition: width 1s linear;
	background-color: ${themeName === 'Light' ? color.primary : color.secondary};

	${breakpoint['phone']} {
		width: 150px;
		margin: 0 auto;
	}

	${breakpoint['tablet']} {
		min-height: 145px;
	}
`
// END STYLED COMPONENTS

//STYLES BLOCK
const logoContainer = props => css`
	margin: 0 5px;

	${props.breakpoint['phone']} {
		width: 100%;
		margin: 0 0 15px;
	}

	${props.breakpoint['tablet']} {
		margin: 0 15px;
	}
`
//END STYLES

export default Logo
