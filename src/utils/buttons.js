import styled from '@emotion/styled'

const Button = styled.button`
	label: button;
	background-color: ${props => props.theme.color.cerulean };
	border-color: transparent;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
	color: ${props => props.theme.color.secondary };
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
	min-height: 52px;
	overflow: hidden;
	padding: 10px 45px;
	position: relative;
	transition: all 0.5s;
	text-transform: uppercase;

	&:focus,
	&:active {
		outline: 0;
	}

	&:before {
		content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    opacity: 1;
    transform: translate(-105%,0);
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: rgba(255,255,255,1);
    background-color: rgba(255,255,255,0.25);
	}

	&:hover {

		&:before {
			opacity: 0;
    	transform: translate(0,0);
		}
	}
`;

export default Button
