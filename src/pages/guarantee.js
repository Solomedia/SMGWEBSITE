import React from 'react'
import SEO from '../components/seo'
import { css } from '@emotion/core'

import Layout from '../layouts/layout'
import { Container, Row, Col } from '../utils/grid'
import Banner from '../components/BannerGuarantee/Banner'
import Clients from '../components/Clients/Clients'
import Contact from '../components/Contact/Contact'
import GuarenteeDetails from '../components/GuaranteeDetails/GuaranteeDetails'

const IndexPage = () => (
	<Layout>
		<SEO
			title="Guarantee"
			keywords={['solo', 'media', 'web', 'app', 'design']}
		/>
		<Container>
			<Row>
				<Col>
					<Banner />
				</Col>
			</Row>
		</Container>

		<GuarenteeDetails />

		<section css={splitSection}>
			<Container>
				<Row noGutters>
					<Col col="12" colMdUp="6">
						<Clients />
					</Col>
					<Col col="12" colMdUp="6">
						<Contact />
					</Col>
				</Row>
			</Container>
		</section>
	</Layout>
)

const splitSection = props => css`
	${props.breakpoint['tablet']} {
		background: linear-gradient(
			to right,
			${props.color.primary} 0,
			${props.color.primary} 50%,
			${props.color.secondary} 50%,
			${props.color.secondary} 100%
		);
	}
`

export default IndexPage
