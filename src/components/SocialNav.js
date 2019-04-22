import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

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

const SocialNav = ({ className }) => {
	return (
		<ul className={className} css={socialNavigation}>
			{socialList.map(({ Icon, name }) => (
				<li key={name} css={socialItem}>
					<Icon css={icon} />
				</li>
			))}
		</ul>
	)
}

//STYLES BLOCK
const socialNavigation = css`
	display: inline-flex;
	padding: 30px;
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
`
const icon = props => css`
	fill: ${props.color.primary};
	height: 18px;
	transform: rotate(-50deg);
`
//END STYLES

SocialNav.propTypes = {
	className: PropTypes.any,
}

export default SocialNav
