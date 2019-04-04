import React, { useContext } from 'react'
import { P } from '../../utils/type'
import { css } from '@emotion/core'
import ThemeContext from '../../context/ThemeContext'

const ThemeSwitch = () => {
	const currentTheme = useContext(ThemeContext)

	return (
		<div css={themeSwitch}>
			<P>Theme {currentTheme.themeName}</P>
			<label css={switchContent}>
				<input
					css={inputField}
					type="checkbox"
					onChange={currentTheme.changeTheme}
				/>
				<span css={slider} className="slider" />
			</label>
		</div>
	)
}

//STYLES BLOCK

const themeSwitch = css`
	padding-right: 20px;
`

const switchContent = css`
	position: relative;
	display: inline-block;
	width: 90px;
	height: 40px;
	margin-top: 10px;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}
`

const slider = props => css`
	background-color: ${props.color.secondary};
	border-radius: 34px;
	border: 1px solid ${props.color.primary};
	bottom: 0;
	cursor: pointer;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: 0.4s;

	&:before {
		background-color: ${props.color.primary};
		border-radius: 50%;
		bottom: 4px;
		content: '';
		height: 30px;
		left: 4px;
		position: absolute;
		transition: 0.4s;
		width: 30px;
	}
`

const inputField = props => css`
	&:checked {
		color: red;
	}

	&:checked + .slider {
		background-color: ${props.color.secondary};
	}

	&:checked + .slider:before {
		transform: translateX(51px);
	}
`
//END STYLES

export default ThemeSwitch
