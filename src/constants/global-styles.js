import { css } from '@emotion/core'
import normalize from './normalizer-styles'

const globalStyles = props => css`
	${normalize}
	body {
		color: ${props.color.primary};
	}
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
		margin: 0;
		padding: 0;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		text-transform: uppercase;
	}
	p {
		margin: 0;
		color: ${props.color.primary};
	}
	a {
		text-decoration: none;
		color: ${props.color.cerulean};

		&:hover {
			cursor: pointer;
		}
	}
`

export default globalStyles
