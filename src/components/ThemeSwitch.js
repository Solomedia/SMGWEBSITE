import React, { useContext } from 'react'
import { css } from '@emotion/core'

import ThemeContext from '../context/ThemeContext'

const ThemeSwitch = () => {
	const currentTheme = useContext(ThemeContext)

	return (
		<div css={themeSwitch}>
			<p css={themeName}>Theme {currentTheme.themeName}</p>
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
	align-items: center;
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;
	text-align: right;
`

const themeName = css`
	font-size: 14px;
	margin-right: 10px;
`

const switchContent = css`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 30px;
	margin-top: 5px;

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
		height: 20px;
		left: 4px;
		position: absolute;
		transition: 0.4s;
		width: 20px;
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
		transform: translateX(29px);
	}
`
//END STYLES

export default ThemeSwitch
