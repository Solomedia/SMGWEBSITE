import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const GuranteeList = ({ list }) => (
	<ul css={listStyles}>
		{list.map(item => (
			<li key={item.name} css={listItem}>
				<img src={item.img} alt="" />
				<h2>{item.name}</h2>
			</li>
		))}
	</ul>
)

//STYLES BLOCK
const listStyles = props => css`
	display: flex;
	flex-direction: column;
	margin: 0 auto 10%;
	max-width: 925px;

	${props.breakpoint['phoneSmallUp']} {
		flex-direction: row;
		margin: 0 auto 100px;
	}
`

const listItem = ({ breakpoint, color }) => css`
	position: relative;

	${breakpoint['phoneSmall']} {
		margin-bottom: 3%;
	}

	${breakpoint['phoneSmallUp']} {
		margin-right: 3px;

		&:last-of-type {
			margin-right: 0;
		}
	}

	&:before {
		background-color: ${color.overlay06};
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	h2 {
		color: #ffffff; // always white
		font-size: 20vw;
		left: 50%;
		line-height: 1;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);

		${breakpoint['phoneSmallUp']} {
			font-size: 8vw;
		}

		${breakpoint['tablet']} {
			font-size: 64px;
		}
	}

	img {
		width: 100%;
	}
`

//END STYLES

GuranteeList.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			img: PropTypes.string,
		})
	),
}

export default GuranteeList
