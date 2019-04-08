import styled from '@emotion/styled'
import theme from '../constants/theme-styles'
import { css } from '@emotion/core'

const { gutterWidth, maxWidth, breakpoint } = theme

const Container = styled.div`
	margin: 0 auto;
	max-width: ${maxWidth['xl']};
	padding: 0 ${gutterWidth / 2}px;
	width: 100%;

	${props =>
		props['fluid'] &&
		css`
			max-width: 100%;
			padding: 0;
		`}
`

const Row = styled.div`
	label: row;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 -${gutterWidth / 2}px;

	${props =>
		props['noGutters'] &&
		css`
			margin: 0;

			& > div {
				padding: 0;
			}
		`};

	${props =>
		props['reverse'] &&
		css`
			flex-direction: column-reverse;
		`};

	${breakpoint['tablet']} {
		flex-direction: row;

		${props =>
			props['reverse'] &&
			css`
				flex-direction: row-reverse;
			`}
	}
`

const getWidth = val => {
	return `${(val || 12) / 0.12}%`
}

const colWidth = props => css`
	width: ${getWidth(props.col)};
`

const Col = styled.div`
	padding: 0 ${gutterWidth / 2}px;
	${colWidth};

	${props =>
		props['colMd'] &&
		css`
			${breakpoint['tabletOnly']} {
				width: ${getWidth(props['colMd'])};
			}
		`}

	${props =>
		props['colMdUp'] &&
		css`
			${breakpoint['tablet']} {
				width: ${getWidth(props['colMdUp'])};
			}
		`}

	${props =>
		props['colLg'] &&
		css`
			${breakpoint['desktop']} {
				width: ${getWidth(props['colLg'])};
			}
		`}
`

/*
TODO: add margin with props
	.col-xs-offset-0
	.col-xs-offset-1
*/

export { Container, Row, Col }
