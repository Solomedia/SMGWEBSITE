import { css } from '@emotion/core'
import normalize from './normalizer-styles'

const globalStyles = props => css`
	${normalize}
	button,
	input,
	optgroup,
	select,
	textarea,
	body {
		font-family: 'Barlow', sans-serif;
	}
	input,
	optgroup,
	select,
	textarea {
		&:focus,
		&:active {
			outline: 0;
		}
	}
	ul {
		list-style: none;
	}
	p {
		margin: 0;
	}
	a {
		text-decoration: none;
		color: ${props.color.cerulean};

		&:hover {
			cursor: pointer;
		}
	}
`;


export default globalStyles;
