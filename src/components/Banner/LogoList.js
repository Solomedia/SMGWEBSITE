import React from 'react'
import { css } from '@emotion/core'

import LogoClutch from '../../images/banner-logos/logo-clutch.png'
import LogoUpwork from '../../images/banner-logos/Logo-upwork.png'
import { P } from '../../utils/type'

//STYLES BLOCK
const logoListContainer = props => css`
	margin: 90px 0 30px;
	display: inline-flex;
	align-items: center;

	${props.breakpoint['phoneSmall']} {
		margin: 10% 0 5%;
		flex-direction: column;
	}

	p {
		${props.breakpoint['phoneSmall']} {
			 margin-bottom: 10px;
		}
	}
`

const logoList = props => css`
	margin: 0 0 0 20px;
	padding: 0;
	display: flex;
	align-items: center;

	${props.breakpoint['phoneSmall']} {
		margin: 0;
    justify-content: space-evenly;
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
			<li css={css`margin-left: 20px;`}>
				<img src={LogoClutch} alt="" />
			</li>
		</ul>
	</div>
)

export default LogoList;
