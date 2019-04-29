import React from 'react'
import { css } from '@emotion/core'

import { H1, P } from '../../utils/type'
import JhonThumbnail from '../../images/meet-the-team/jhon.png'
import HannahThumbnail from '../../images/meet-the-team/hannah.png'
import { Container, Row, Col } from '../../utils/grid'
import SliderTeam from './sliderTeam/SliderTeam'

const data = [
	{
		slug: 'jhon',
		name: 'Jhon',
		position: 'CEO',
		bio: `JOHN LEFT HIS CORPORATE JOB TO START SOLO MEDIA
	IN 2017. HIS KNOWLEDGE OF DESIGN, DEVELOPMENT, DIGITAL MARKETING, AND
	SALES ALLOWED HIM TO PROVIDE ONE-OF-A-KIND DIGITAL BUSINESS SOLUTIONS
	FOR HIS CLIENTS.`,
		thumbnail: JhonThumbnail,
	},
	{
		slug: 'hannah',
		name: 'Hannah',
		position: 'UX/UI DESIGNER',
		bio: `HANNAH HAS OVER 5 YEARS OF DESIGN AND COPYWRITING .  HER EXPERTISE IN BRANDING AND ATTENTION TO DETAIL RESULT IN BEAUTIFUL AND FUNCTIONAL DESIGN. `,
		thumbnail: HannahThumbnail,
	},
]

const MeetTheTeam = () => (
	<section css={mainSection}>
		<Container>
			<Row>
				<Col>
					<header css={sectionHeader}>
						<H1>Meet the team</H1>
						<P size="29px">OVER 10 YEARS OF EXPERIENCE.</P>
					</header>
					<SliderTeam employeeList={data} />
				</Col>
			</Row>
		</Container>
	</section>
)

//STYLES BLOCK

const mainSection = props => css`
	padding: 10% 0 20%;

	${props.breakpoint['tablet']} {
		padding: 90px 0 0;
	}
`
const sectionHeader = props => css`
	margin-bottom: 20px;

	${props.breakpoint['phone']} {
		margin-bottom: 5%;
	}

	${props.breakpoint['medium']} {
		margin-bottom: -70px;
	}
`
//END STYLES BLOCK

export default MeetTheTeam
