import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { css } from '@emotion/core'

import { P } from '../../../utils/type'
import SliderSettings from './SliderSettings'

const SliderTeam = ({ employeeList }) => (
	<Slider {...SliderSettings}>
		{employeeList.map(employee => (
			<article css={sliderItem} key={employee.slug}>
				<div css={employeeThumbnail}>
					<img src={employee.thumbnail} alt={employee.name} />
				</div>
				<div css={infoBox}>
					<h2>{employee.name}</h2>
					<h3>{employee.position}</h3>
					<i className="icon-arrow-right" />
					<P large>
						<strong>BIO:</strong> {employee.bio}
					</P>
				</div>
			</article>
		))}
	</Slider>
)

//STYLES BLOCK
const sliderItem = props => css`
	align-items: center;
	display: flex !important;
	flex-direction: column;
	justify-content: space-around;
	outline: none;

	${props.breakpoint['tablet']} {
		flex-direction: row;
		justify-content: space-between;
	}

	h2,
	h3 {
		font-size: 44px;
		line-height: 53px;

		${props.breakpoint['phone']} {
			text-align: center;
		}

		${props.breakpoint['phoneSmall']} {
			font-size: 8vw;
			line-height: 9.2vw;
		}
	}

	h3 {
		font-style: italic;
		font-weight: 400;
		margin-bottom: 30px;

		${props.breakpoint['phone']} {
			margin-bottom: 4%;
		}
	}

	p {
		${props.breakpoint['phone']} {
			text-align: center;
		}

		${props.breakpoint['phoneSmall']} {
			font-size: 4vw;
			line-height: 5vw;
		}
	}
`

const employeeThumbnail = props => css`
	width: 35%;

	${props.breakpoint['phone']} {
		width: 50%;
		margin-bottom: 2%;
	}

	img {
		width: 100%;
	}
`

const infoBox = props => css`
	width: 50%;

	${props.breakpoint['phone']} {
		width: 90%;
	}
`
//END STYLES BLOCK

SliderTeam.propTypes = {
	employeeList: PropTypes.arrayOf(
		PropTypes.shape({
			thumbnail: PropTypes.string,
			name: PropTypes.string.isRequired,
			position: PropTypes.string,
		})
	).isRequired,
}

export default SliderTeam
