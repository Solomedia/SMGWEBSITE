import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import LogoImg from '../../images/logo-solo-media.png'
import ThemeContext from '../../context/ThemeContext'

const Logo = () => {
	const theme = useContext(ThemeContext)

	return (
		<div css={logoContainer}>
			<LogoHeader theme={theme}>
				<Link to="/">
					<img
						src={LogoImg}
						css={css`
							width: 100%;
						`}
						alt=""
					/>
				</Link>
			</LogoHeader>
		</div>
	)
}

//STYLED COMPONENTS
const LogoHeader = styled.h1(
	{
		display: 'flex',
		alignItems: 'center',
		transition: 'width 1s linear',
	},
	({
		theme: {
			themeName,
			theme: { color, breakpoint },
		},
	}) => ({
		backgroundColor: themeName === 'Light' ? color.primary : color.secondary,
		[breakpoint['phone']]: {
			width: '150px',
			margin: '0 auto',
		},
		[breakpoint['tablet']]: {
			minHeight: '145px',
		},
	})
)
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
