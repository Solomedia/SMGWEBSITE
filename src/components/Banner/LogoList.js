import React from 'react'
import { css } from '@emotion/core'

import LogoClutch from '../../images/banner-logos/logo-clutch.png'
import LogoUpwork from '../../images/banner-logos/Logo-upwork.png'
import { P } from '../../utils/type'

//STYLES BLOCK
const logoListContainer = props => css`
	align-items: center;
	display: inline-flex;
	margin: 90px 0 30px;

	${props.breakpoint['phoneSmall']} {
		flex-direction: column;
		margin: 10% 0 5%;
	}

	p {
		${props.breakpoint['phoneSmall']} {
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
		width: 160px;

		${props.breakpoint['phoneSmall']} {
			width: 40%;
		}

		img {
			width: 100%;
		}
	}
`
//END BLOCK

const LogoList = () => (
	<div css={logoListContainer}>
		<P>AS SEEN ON:</P>
		<ul css={logoList}>
			<li>
				<img src={LogoUpwork} alt="" />
			</li>
			<li
				css={css`
					margin-left: 20px;
				`}
			>
				<img src={LogoClutch} alt="" />
			</li>
		</ul>
	</div>
)

export default LogoList
