import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { css } from '@emotion/core';

import { H2, H3, P } from '../../../utils/type';
import SliderSettings from './SliderSettings';

const SliderTeam = ({ data }) => (
	<Slider {...SliderSettings}>
		{data.map(
			employee =>
				employee.node.categories[0].name === 'Team' && (
					<article css={sliderItem} key={employee.node.acf.name}>
						<div css={employeeThumbnail}>
							<img
								src={employee.node.acf.employee_picture.source_url}
								alt={employee.node.acf.name}
							/>
						</div>
						<div css={infoBox}>
							<h2>{employee.node.acf.name}</h2>
							<h3>{employee.node.acf.position}</h3>
							<i className="icon-arrow-right" />
							<P large left sizeSmall="4vw">
								<strong>BIO:</strong> {employee.node.acf.bio}
							</P>
						</div>
					</article>
				)
		)}
	</Slider>
);

//STYLES BLOCK
const sliderItem = props => css`
	display: flex !important;
	flex-direction: column;
	justify-content: space-around;
	outline: none;

	${props.breakpoint['phone']} {
		align-items: center;
	}

	${props.breakpoint['tablet']} {
		flex-direction: row;
		justify-content: space-between;
	}

	h2,
	h3 {
		font-size: 8vw;

		${props.breakpoint['phone']} {
			text-align: center;
		}

		${props.breakpoint['tablet']} {
			font-size: 44px;
			text-align: left;
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
`;

const employeeThumbnail = props => css`
	width: 45%;

	${props.breakpoint['phone']} {
		margin-bottom: 2%;
		width: 50%;
	}

	${props.breakpoint['tablet']} {
		align-self: flex-end;
	}

	${props.breakpoint['medium']} {
		width: 35%;
	}

	img {
		width: 100%;
	}
`;

const infoBox = props => css`
	width: 50%;

	${props.breakpoint['phone']} {
		width: 90%;
	}

	${props.breakpoint['tablet']} {
		align-self: center;
		padding-bottom: 50px;
	}

	${props.breakpoint['medium']} {
		margin-top: 50px;
	}
`;
//END STYLES BLOCK

SliderTeam.propTypes = {
	data: PropTypes.array
};

export default SliderTeam;
