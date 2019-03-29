import React from 'react'
import { css } from '@emotion/core'

const customBreakpoint = `@media (min-width: 992px)`;

const serviceList = props => css`
	display: flex;
	margin: 0;
	overflow: hidden;
	padding: 0;
  flex-wrap: wrap;
  justify-content: space-between;

	${customBreakpoint} {
		display: block;
	}

	li {
		margin-bottom: 10px;

		&:first-of-type {
			margin-left: 0;
		}

		${props.breakpoint['phoneSmall']} {
			font-size: 5vw;
    	line-height: 6vw;
		}

		${customBreakpoint} {

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`

const serviceListItem = props => css`
	color: ${props.color.secondary};
	font-size: 28px;
	font-weight: 300;
	line-height: 34px;
	padding: 0 5px;
`

const ServiceList = ({list}) => (
	<ul css={serviceList}>
		{list.map(item => (
			<li key={item.toLowerCase().trim()} css={serviceListItem}>{item}</li>
		))}
	</ul>
)

export default ServiceList;
