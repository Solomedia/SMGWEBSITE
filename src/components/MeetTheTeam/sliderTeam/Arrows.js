import React from 'react'
import PropTypes from 'prop-types'

import { css } from '@emotion/core'
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import theme from '../../../constants/theme-styles'

const { breakpoint, color } = theme

const arrowsStyles = css`
	position: absolute;
	bottom: -15%;
	z-index: 9;

	svg {
		fill: ${color.primary};
		height: 50px;
		cursor: pointer;
	}
`

export const NextArrow = props => {
	const { onClick } = props

	const styles = css`
		${arrowsStyles};
		right: 2%;

		${breakpoint['phone']} {
			right: 45%;
		}
	`
	return (
		<div css={styles} onClick={onClick}>
			<FaCaretRight />
		</div>
	)
}

export const PrevArrow = props => {
	const { onClick } = props

	const styles = css`
		${arrowsStyles};
		right: 5%;

		${breakpoint['phone']} {
			right: 55%;
		}
	`
	return (
		<div css={styles} onClick={onClick}>
			<FaCaretLeft />
		</div>
	)
}

const arrowsProptypes = {
	onClick: PropTypes.func,
}

NextArrow.propTypes = arrowsProptypes
PrevArrow.propTypes = arrowsProptypes
