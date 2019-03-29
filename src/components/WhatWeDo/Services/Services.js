import React from 'react'
import { css } from '@emotion/core'

import ServiceHeader from './ServiceHeader'
import ServiceList from './ServiceList'

/*
TODO: remove with graphQl integration
*/
const data = [
	{
		title: 'DESIGN',
		list : [
			'USER INTERFACE',
			'USER EXPERIENCE',
			'RESPONSIVE DESIGN'
		]
	},
	{
		title: 'DEVELOPMENT',
		list : [
			'USER INTERFACE',
			'USER EXPERIENCE',
			'RESPONSIVE DESIGN'
		]
	}
];

//STYLES BLOCK
const customBreakpoint = `@media (min-width: 992px)`;

const serviceContent = props => css`
	margin: 50px auto 0;

	${props.breakpoint['phoneSmall']} {
		margin-top: 10%;
	}

	${customBreakpoint} {
		margin-top: 80px;
		max-width: 850px;
	}
`

const serviceBlock = css`
	alig-items: center;
	display: flex;
	flex-direction: column;
  margin-bottom: 10%;

	${customBreakpoint} {
		align-items: center;
		flex-direction: row;
		margin-bottom: 0;
		margin-bottom: 50px;
  	justify-content: space-between;
	}
`
//END STYLES BLOCK

const Services = () => (
	<React.Fragment>
		<section css={serviceContent}>
			{
				data.map( (service, index) => (
					<article css={serviceBlock} key={service.title.toLowerCase()}>
						<ServiceHeader title={service.title} number={`0${index+1}`} />
						<ServiceList list={service.list} />
					</article>
				))
			}
		</section>
	</React.Fragment>
)

export default Services;
