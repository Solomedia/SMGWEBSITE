import React from 'react'
import SEO from '../components/seo'

import Layout from '../layouts/layout'
import { Container, Row, Col } from '../utils/grid'
import Banner from '../components/Banner/Banner'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import MeetTheTeam from '../components/MeetTheTeam/MeetTheTeam'

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
		<MeetTheTeam />
	</Layout>
)

export default IndexPage
