import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

export const NextArrow = props => {
	const { onClick } = props

	const Arrow = styled.div`
		right: 2%;

		${props => `${props.theme.breakpoint['phone']}`} {
			right: 45%;
		}
	`

	return (
		<Arrow onClick={onClick} css={arrowsStyles}>
			<FaCaretRight />
		</Arrow>
	)
}

export const PrevArrow = props => {
	const { onClick } = props

	const Arrow = styled.div`
		right: 5%;

		${props => `${props.theme.breakpoint['phone']}`} {
			right: 55%;
		}
	`
	return (
		<Arrow onClick={onClick} css={arrowsStyles}>
			<FaCaretLeft />
		</Arrow>
	)
}

//STYLES BLOCK
const arrowsStyles = ({ color, breakpoint }) => css`
	position: absolute;
	bottom: 10px;
	z-index: 9;

	${breakpoint['phone']} {
		bottom: -15%;
	}

	svg {
		fill: ${color.primary};
		height: 50px;
		cursor: pointer;
	}
`
//END STYLES

const arrowsProptypes = {
	onClick: PropTypes.func,
	theme: PropTypes.shape({
		color: PropTypes.string,
		breakpoint: PropTypes.string,
	}),
}

NextArrow.propTypes = arrowsProptypes
PrevArrow.propTypes = arrowsProptypes
