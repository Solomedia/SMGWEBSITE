import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { FaCaretRight, FaCaretLeft } from 'react-icons/fa'

export const NextArrow = props => {
	const { onClick } = props

	const Arrow = styled.div`
		right: 2%;
		/*
		TODO: set media with props
		*/
		@media (max-width: 768px) {
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

		/*
		TODO: set media with props
		*/
		@media (max-width: 768px) {
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
const arrowsStyles = ({ color }) => css`
	position: absolute;
	bottom: -15%;
	z-index: 9;

	svg {
		fill: ${color.primary};
		height: 50px;
		cursor: pointer;
	}
`
//END STYLES

const arrowsProptypes = {
	onClick: PropTypes.func,
}

NextArrow.propTypes = arrowsProptypes
PrevArrow.propTypes = arrowsProptypes
