import { css } from '@emotion/core'
import normalize from './normalizer-styles';

const globalStyles = css`
	${normalize}
	button,
	input,
	optgroup,
	select,
	textarea,
	body {
		font-family: 'Barlow', sans-serif;
	}
	button {
		cursor: pointer;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		&:focus,
		&:active {
			outline: 0;
		}
	}
	p {
		margin: 0;
	}
	a {
		text-decoration: none;
		&:hover {
			cursor: pointer;
		}
	}
`;


export default globalStyles;
