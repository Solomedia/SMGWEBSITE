import React from 'react'
import SEO from '../components/seo'

import Layout from '../layouts/layout'
import ThankYou from '../components/ThankYou/ThankYou'

const data = {
	title: 'THANKS',
	copy1:
		'YOU WILL ONLY RECEIVE RELEVANT<br /> AND WORTHY INFORMATION. STAY<br /> WOKE MY FRIENDS',
	copy2: 'IF YOU WANT TO GET IN TOUCH, SEND US A MESSAGE.',
	button: "Let's TALK.",
}

const SubscribePage = () => (
	<Layout>
		<SEO
			title="Guarantee"
			keywords={['solo', 'media', 'web', 'app', 'design']}
		/>
		<ThankYou data={data} />
	</Layout>
)

export default SubscribePage
