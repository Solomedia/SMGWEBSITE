import React from 'react'
import SEO from '../components/seo'

import Layout from '../layouts/layout'
import ThankYou from '../components/ThankYou/ThankYou'

const data = {
	title: 'THANK YOU.',
	copy1: 'WE RECEIVED YOUR MESSAGE AND <br /> WILL GET BACK TO YOU SHORTLY.',
	copy2: 'IF YOU WANT TO GET IN TOUCH ASAP, GIVE US A CALL AT',
	number: '+1 917 310 1803',
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
