import React from "react"
import Layout from "../layouts/main"
import SEO from "../components/seo";
import { P, H1, H2, H3 } from '../utils/type';
import Button from '../utils/buttons';
import { css } from '@emotion/core';

const heading = css`
	font-weight: 300;
	font-size: 30px;
`
const IndexPage = () => (
	<Layout>
    <SEO title="Style Guide" keywords={['solo', 'media', 'web', 'app', 'design']} />
		<P>Welcome to Solo Media Style Guide</P>
		<section>
			<H2 css={heading}>Typography</H2>
			<H1>Heading 1</H1>
			<H2>Heading 2</H2>
			<H3>Heading 3</H3>
			<H3 className="big">Heading 3 Big</H3>
		</section>
		<Button>Button Primary</Button>
  </Layout>
)

export default IndexPage
