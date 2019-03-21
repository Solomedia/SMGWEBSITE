import styled from '@emotion/styled';

const Button = styled.button`
	label: button;
	background-color: ${props => props.theme.color.cerulean };
	border-radius: 10px;
	color: ${props => props.theme.color.secondary };
	font-size: 18px;
	font-weight: bold;
	line-height: 22px;
	min-height: 52px;
	padding: 10px 45px;
	text-transform: uppercase;
`;

export default Button
