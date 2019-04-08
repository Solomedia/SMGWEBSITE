import React from 'react'
import SEO from '../components/seo'

import Layout from '../layouts/layout'
import { Container, Row, Col } from '../utils/grid'
import Banner from '../components/Banner/Banner'
import WhatWeDo from '../components/WhatWeDo/WhatWeDo'
import MeetTheTeam from '../components/MeetTheTeam/MeetTheTeam'
import Clients from '../components/Clients/Clients'
import Form from '../components/Form/Form'

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
		<Container fluid>
			<Row noGutters>
				<Col col="12" colMdUp="6">
					<Clients />
				</Col>
				<Col col="12" colMdUp="6">
					<Form />
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
