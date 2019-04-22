import { css } from '@emotion/core'
import normalize from './normalizer-styles'

const globalStyles = props => css`
	${normalize}
	html,
	body {
		/*
		TODO: Check and fix what is generating extra space, probably grid containers
		*/
		overflow-x: hidden;
	}
	body {
		background-color: ${props.color.secondary};
		color: ${props.color.primary};
		line-height: 1.2;
	}
	button,
	input,
	select,
	textarea,
	body {
		font-family: 'Barlow', sans-serif;
	}
	input,
	select,
	textarea {
		border-radius: 10px;
		border: 3px solid ${props.color.primary};
		padding: 10px;
		width: 100%;

		&:focus,
		&:active {
			outline: 0;
		}

		&:disabled {
			opacity: 0.3;
		}
	}
	select {
		appearance: none;
		color: ${props.color.doveGray};
		text-transform: uppercase;
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
