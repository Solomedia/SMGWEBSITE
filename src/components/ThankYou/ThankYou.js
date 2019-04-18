import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import { Container, Row, Col } from '../../utils/grid'
import SocialNav from '../SocialNav'
import ThankYouHeader from './ThankYouHeader'
import ThankYouFooter from './ThankYouFooter'

const ThankYou = ({ data }) => (
	<section css={section}>
		<Container>
			<Row>
				<Col>
					<div css={mainContent}>
						<ThankYouHeader title={data.title} copy={data.copy1} />
						<ThankYouFooter
							copy={data.copy2}
							number={data.number}
							button={data.button}
						/>
						<SocialNavigation />
					</div>
				</Col>
			</Row>
		</Container>
	</section>
)

//STYLES BLOCK
const section = ({ breakpoint, color }) => css`
	background-color: ${color.primary};
	padding: 10% 5% 40%;

	${breakpoint['phoneSmallUp']} {
		padding-bottom: 15%;
	}

	${breakpoint['tablet']} {
		padding: 100px 50px;
	}
`

const mainContent = ({ breakpoint, color }) => css`
	border-radius: 50px;
	border: 7px solid ${color.secondary};
	color: ${color.secondary};
	padding: 10% 5% 25%;
	position: relative;
	text-align: center;

	${breakpoint['phoneSmallUp']} {
		padding-bottom: 15%;
	}

	${breakpoint['tablet']} {
		padding: 80px 50px 125px;
	}
`

const socialPosition = props => css`
	padding: 0;
	transform: translate(-50%, 200%);
	transition: all 0.5s;

	${props.theme.breakpoint['phoneSmallUp']} {
		padding: 30px;
		transform: translate(-50%, 50%);
	}
`
const SocialNavigation = styled(SocialNav)`
	${socialPosition};
	background-color: ${props => props.theme.color.primary};
	bottom: 0;
	left: 50%;
	position: absolute;

	li {
		border-color: ${props => props.theme.color.secondary};
	}

	svg {
		fill: ${props => props.theme.color.secondary};
	}
`
//END STYLES

ThankYou.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		copy1: PropTypes.string,
		copy2: PropTypes.string,
		button: PropTypes.string,
		number: PropTypes.string,
	}),
}

export default ThankYou
