import React from 'react'
import { css } from '@emotion/core'

import LogoClutch from '../../images/banner-logos/logo-clutch.png'
import LogoUpwork from '../../images/banner-logos/Logo-upwork.png'
import { P } from '../../utils/type'

const LogoList = () => (
	<div css={logoListContainer}>
		<P>AS SEEN ON:</P>
		<ul css={logoList}>
			<li>
				<img src={LogoUpwork} alt="" />
			</li>
			<li>
				<img src={LogoClutch} alt="" />
			</li>
		</ul>
	</div>
)

//STYLES BLOCK
const logoListContainer = props => css`
	align-items: center;
	display: inline-flex;
	margin: 90px 0 30px;

	${props.breakpoint['phoneSmall']} {
		flex-direction: column;
		margin: 10% 0 5%;

		p {
			margin-bottom: 10px;
		}
	}
`

const logoList = props => css`
	align-items: center;
	display: flex;
	margin: 0 0 0 20px;
	padding: 0;

	${props.breakpoint['phoneSmall']} {
		justify-content: space-evenly;
		margin: 0;
	}

	li {
		width: 40%;
		margin-left: 20px;

		&:first-of-type {
			margin-left: 0;
		}

		${props.breakpoint['phoneSmallUp']} {
			width: 160px;
		}

		img {
			width: 100%;
		}
	}
`
//END BLOCK

export default LogoList
