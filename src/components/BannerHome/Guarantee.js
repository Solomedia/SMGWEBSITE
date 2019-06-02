import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { H2 } from '../../utils/type';
import Button from '../../utils/buttons';

const Guarantee = () => (
	<React.Fragment>
		<div css={quarantee}>
			<H2>WE GUARANTEE IT.</H2>
			<Link to="/guarantee">OUR GUARANTEE</Link>
		</div>

		<div>
			<a href="/#contactUs">
				<Button>Let&#39;s Talk</Button>
			</a>
		</div>
	</React.Fragment>
);

//STYLES BLOCK
const quarantee = props => css`
	margin-bottom: 50px;

	${props.breakpoint['phone']} {
		margin-bottom: 10%;

		h2 {
			font-size: 23px;
		}
	}
`;
//END STYLES BLOCK

export default Guarantee;
