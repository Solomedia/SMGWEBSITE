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
				allWordpressPage {
					edges {
						node {
							id
							title
							excerpt
							slug
							date(formatString: "MMMM DD, YYYY")
						}
					}
				}
			}
		`}
		render={data => (
			<section css={bannerContent}>
				<img src={HandImage} alt="" css={handImageBox} />
				<H1 css={bannerTitle}>
					ALL PROJECTS DELIVERED ON TIME, ON BUDGET, & ON SCOPE.
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
