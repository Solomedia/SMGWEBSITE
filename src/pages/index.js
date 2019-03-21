import React from "react"
import Layout from "../layouts/main"
import SEO from "../components/seo";
import { P, H1, H3 } from '../utils/type';
import {Container, Row, Col} from '../utils/grid';

const IndexPage = () => (
	<Layout>
    <SEO title="Home" keywords={['solo', 'media', 'web', 'app', 'design']} />
		<Container>
			<Row>
				<Col padding="30" col={12} colMd={2} colLg={4}>
					<H1>SOLO MEDIA</H1>
					<H3 className="big">Subtitle Big</H3>
					<P>Welcome to Solo Media group Home Page</P>
				</Col>
			</Row>
		</Container>
  </Layout>
)

export default IndexPage
