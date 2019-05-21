import React from 'react';
import { css } from '@emotion/core';

import { H1, H2 } from '../../utils/type';
import { Container, Row, Col } from '../../utils/grid';
import Technologies from './Technologies';
import Services from './Services/Services';
import { StaticQuery, graphql } from 'gatsby';

const WhatWeDo = () => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPost(
					filter: {
						categories: {
							elemMatch: { id: { eq: "8c80d100-313b-5a99-be2a-5d3a565b0343" } }
						}
					}
				) {
					edges {
						node {
							categories {
								name
								id
							}
							acf {
								services_title
								services_subtitle
								service_1_title
								service_1_space_1
								service_1_space_2
								service_1_space_3
								service_2
								service_2_space_1
								service_2_space_2
								service_2_space_3
								service_option_1
								service_option_2
								service_option_3
								service_option_4
							}
						}
					}
				}
			}
		`}
		render={data => (
			<section css={section}>
				{/* {console.log(data.allWordpressPost.edges[0].node.acf)} */}
				<Container>
					<Row>
						<Col>
							<H1 css={title}>
								{data.allWordpressPost.edges[0].node.acf.services_title}
							</H1>
							<H2 large css={subtitle} className="large">
								{data.allWordpressPost.edges[0].node.acf.services_subtitle}
							</H2>
						</Col>
						<Col>
							<Services
								data={[
									{
										title:
											data.allWordpressPost.edges[0].node.acf.service_1_title,
										list: [
											data.allWordpressPost.edges[0].node.acf.service_1_space_1,
											data.allWordpressPost.edges[0].node.acf.service_1_space_2,
											data.allWordpressPost.edges[0].node.acf.service_1_space_3
										]
									},
									{
										title: data.allWordpressPost.edges[0].node.acf.service_2,
										list: [
											data.allWordpressPost.edges[0].node.acf.service_2_space_1,
											data.allWordpressPost.edges[0].node.acf.service_2_space_2,
											data.allWordpressPost.edges[0].node.acf.service_2_space_3
										]
									}
								]}
							/>
							<Technologies
								data={[
									data.allWordpressPost.edges[0].node.acf.service_option_1,
									data.allWordpressPost.edges[0].node.acf.service_option_2,
									data.allWordpressPost.edges[0].node.acf.service_option_3,
									data.allWordpressPost.edges[0].node.acf.service_option_4
								]}
							/>
						</Col>
					</Row>
				</Container>
			</section>
		)}
	/>
);

//STYLES BLOCK
const section = props => css`
	background-color: ${props.color.primary};
	padding: 75px 0 53px;
`;

const subtitle = props => css`
	color: ${props.color.secondary};

	&.large {
		${props.breakpoint['phoneSmall']} {
			font-size: 6vw;
		}
	}
`;

const title = props => css`
	color: ${props.color.secondary};

	${props.breakpoint['phoneSmall']} {
		font-size: 9vw;
	}
`;
//END STYLES BLOCK

export default WhatWeDo;
