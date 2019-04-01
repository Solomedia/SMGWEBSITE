import React from 'react'
import Layout from '../layouts/main'
import SEO from '../components/seo'
import { P, H1, H2, H3 } from '../utils/type'
import Button from '../utils/buttons'

const StyleGuide = () => (
	<Layout>
		<SEO
			title="Style Guide"
			keywords={['solo', 'media', 'web', 'app', 'design']}
		/>
		<P>Welcome to Solo Media Style Guide</P>
		<section>
			<H1>Heading 1</H1>
			<H2>Heading 2</H2>
			<H3>Heading 3</H3>
			<H3 large>Heading 3 Large</H3>
		</section>
		<Button>Button Primary</Button>
	</Layout>
)

export default StyleGuide
