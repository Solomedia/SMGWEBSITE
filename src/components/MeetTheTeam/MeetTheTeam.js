import React from 'react';
import { css } from '@emotion/core';

import { H1, P } from '../../utils/type';
import { Container, Row, Col } from '../../utils/grid';
import SliderTeam from './sliderTeam/SliderTeam';
import { StaticQuery, graphql } from 'gatsby';

const MeetTheTeam = () => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPost {
					edges {
						node {
							categories {
								name
							}
							acf {
								name
								position
								bio
								email
								employee_picture {
									source_url
								}
							}
						}
					}
				}
			}
		`}
		render={data => (
			<section css={mainSection}>
				<Container>
					<Row>
						<Col>
							<header css={sectionHeader}>
								<H1>Meet the team</H1>
								<P size="29px">OVER 10 YEARS OF EXPERIENCE.</P>
							</header>
							<SliderTeam data={data.allWordpressPost.edges} />
						</Col>
					</Row>
				</Container>
			</section>
		)}
	/>
);

//STYLES BLOCK

const mainSection = props => css`
	padding: 10% 0 20%;

	${props.breakpoint['tablet']} {
		padding: 90px 0 0;
	}
`;
const sectionHeader = props => css`
	margin-bottom: 20px;

	${props.breakpoint['phone']} {
		margin-bottom: 5%;
	}

	${props.breakpoint['medium']} {
		margin-bottom: -70px;
	}
`;
//END STYLES BLOCK

export default MeetTheTeam;
