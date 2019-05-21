import React from 'react';
import { css } from '@emotion/core';

import { H1 } from '../../utils/type';
import HandImage from '../../images/banner-logos/hand-image.png';
import Guarantee from './Guarantee';
import LogoList from './LogoList';
import { StaticQuery, graphql } from 'gatsby';

const Banner = () => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPost(
					filter: {
						categories: {
							elemMatch: { id: { eq: "19464e72-7733-57a6-816f-a20c31fd7ceb" } }
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
								banner_text
								image_banner {
									source_url
								}
							}
						}
					}
				}
			}
		`}
		render={data => (
			<section css={bannerContent}>
				<img
					src={data.allWordpressPost.edges[0].node.acf.image_banner.source_url}
					alt="Banner"
					css={handImageBox}
				/>
				<H1 css={bannerTitle}>
					{data.allWordpressPost.edges[0].node.acf.banner_text}
				</H1>
				<Guarantee />
				<LogoList />
			</section>
		)}
	/>
);

//STYLES BLOCK
const bannerContent = props => css`
	margin: 120px auto 0;
	max-width: 940px;
	position: relative;
	text-align: center;

	${props.breakpoint['phone']} {
		margin-top: 10%;
	}
`;

const bannerTitle = props => css`
	margin-bottom: 80px;

	${props.breakpoint['phone']} {
		margin-bottom: 10%;
	}
`;

const handImageBox = props => css`
	opacity: 0;
	position: absolute;
	right: 0;
	transform: translateX(100%);
	transition: opacity 0.8s;
	width: 265px;

	${props.breakpoint['large']} {
		opacity: 1;
	}
`;
//END STYLES

export default Banner;
