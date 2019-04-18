import React from 'react'
import { css } from '@emotion/core'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { P } from '../utils/type'

const socialList = [
	{
		Icon: FaFacebookF,
		name: 'facebook',
	},
	{
		Icon: FaInstagram,
		name: 'instagram',
	},
	{
		Icon: FaLinkedinIn,
		name: 'linkedin',
	},
]

const SocialNav = () => {
	return (
		<div css={socialNavContent}>
			<P css={title}>CONNECT WITH US.</P>
			<ul css={socialNav}>
				{socialList.map(({ Icon, name }) => (
					<li css={socialItem} key={name}>
						<Icon />
					</li>
				))}
			</ul>
		</div>
	)
}

//STYLES BLOCK

const socialNavContent = css`
	text-align: center;
`

const title = css`
	margin-bottom: 20px;
	font-weight: 600;
`

const socialNav = css`
	display: inline-flex;
`

const socialItem = props => css`
	align-items: center;
	border: 1px solid ${props.color.primary};
	display: flex;
	height: 52px;
	justify-content: center;
	margin: 0 20px;
	transform: rotate(50deg);
	width: 52px;

	&:last-of-type {
		margin-right: 0;
	}

	svg {
		height: 18px;
		transform: rotate(-50deg);
	}
`
//END STYLES

export default SocialNav
