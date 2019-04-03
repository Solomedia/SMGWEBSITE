import React from 'react'
import Layout from '../layouts/main'
import SEO from '../components/seo'
import {Container, Row, Col} from '../utils/grid'
import Banner from '../components/Banner/Banner'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'

const IndexPage = () => (
	<Layout>
    <SEO title="Home" keywords={['solo', 'media', 'web', 'app', 'design']} />
		<Container>
			<Row>
				<Col>
					<Banner />
				</Col>
			</Row>
		</Container>
		<WhatWeDo />
  </Layout>
)

export default IndexPage
