import styled from '@emotion/styled'

const Button = styled.button`
	label: button;
	background-color: ${props => props.theme.color.cerulean };
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
	color: ${props => props.theme.color.secondary };
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
	min-height: 52px;
	padding: 10px 45px;
	text-transform: uppercase;

	&:focus,
	&:active {
		outline: 0;
	}
`;

export default Button
