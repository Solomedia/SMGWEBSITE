import React from 'react';
import { css } from '@emotion/core';

import { H3 } from '../../utils/type';
import { Container, Row, Col } from '../../utils/grid';
import Logo from './Logo';
import { StaticQuery, graphql } from 'gatsby';

const Header = () => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPost(
					filter: {
						categories: {
							elemMatch: { id: { eq: "aaba96cf-8f3a-5610-856f-b9844d1fe641" } }
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
								title
								description
								phone
								email_address
								image_logo {
									source_url
								}
							}
						}
					}
				}
			}
		`}
		render={data => (
			<header>
				<Container>
					<Row>
						<Col>
							<section css={HeaderContent}>
								<div css={lefCol}>
									<H3 css={subTitle}>
										{data.allWordpressPost.edges[0].node.acf.title}
									</H3>
									<H3 css={customTitles}>
										{data.allWordpressPost.edges[0].node.acf.description}
									</H3>
								</div>
								<img
									css={image}
									src={
										data.allWordpressPost.edges[0].node.acf.image_logo
											.source_url
									}
									alt="Logo"
								/>
								<div css={rightCol}>
									<a
										css={anchor}
										href={`tel:${
											data.allWordpressPost.edges[0].node.acf.phone
										}`}
									>
										<H3 css={subTitle}>
											CALL: {data.allWordpressPost.edges[0].node.acf.phone}
										</H3>
									</a>
									<a
										css={anchor}
										href={`mailto:${
											data.allWordpressPost.edges[0].node.acf.email_address
										}`}
									>
										<H3 css={customTitles}>
											E-MAIL:{' '}
											{data.allWordpressPost.edges[0].node.acf.email_address}
										</H3>
									</a>
								</div>
							</section>
						</Col>
					</Row>
				</Container>
			</header>
		)}
	/>
);

//STYLES BLOCK
const HeaderContent = props => css`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin: 0 auto;
	max-width: 940px;

	${props.breakpoint['tablet']} {
		flex-wrap: nowrap;
		justify-content: center;
	}
`;

const headerCol = css`
	margin-bottom: 10px;
`;

const image = css`
	margin-left: 10px;
	margin-right: 10px;
`;

const rightCol = props => css`
	${props.breakpoint['phone']} {
		${headerCol};
		order: 2;
		padding-left: 10px;
	}
`;

const lefCol = props => css`
	text-align: right;

	${props.breakpoint['phone']} {
		${headerCol};
		order: 1;
	}
`;

const subTitle = props => css`
	${props.breakpoint['phoneSmall']} {
		text-align: center;
	}
`;

const customTitles = props => css`
	font-size: 18px;
	font-style: italic;
	font-weight: 300;
	margin-top: 10px;
	text-align: center;

	${props.breakpoint['phone']} {
		font-size: 17px;
		margin-top: 5px;
	}
`;

const anchor = props => css`
	text-decoration: none;
	color: inherit;

	:hover {
		text-decoration: none;
		color: inherit;
	}
`;
//END STYLES

export default Header;
