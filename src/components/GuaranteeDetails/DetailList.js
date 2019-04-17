import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

const DetailList = ({ list }) => (
	<ul>
		{list.map((item, index) => (
			<li
				key={index}
				css={listItem}
				dangerouslySetInnerHTML={{ __html: item }}
			/>
		))}
	</ul>
)

//STYLES BLOCK
const listItem = props => css`
	color: ${props.color.secondary};
	font-size: 5vw;
	line-height: 1.2;
	margin-bottom: 3%;

	&:last-of-type {
		margin-bottom: 0;
	}

	span {
		font-style: italic;
		font-size: 5.2vw;
	}

	${props.breakpoint['phoneSmallUp']} {
		font-size: 34px;
		margin-bottom: 50px;

		span {
			font-size: 36px;
		}
	}
`
//END STYLES

DetailList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string),
}

export default DetailList
