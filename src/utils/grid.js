import styled from "@emotion/styled"
import theme from '../constants/theme-styles'
import { css } from '@emotion/core'

const { gutterWidth, maxWidth, breakpoint } = theme;

const Container = styled.div`
  margin: 0 auto;
	padding: 0 ${gutterWidth}px;
	max-width: ${maxWidth['xl']};
	width: 100%;

	&.container-fluid {
		max-width: 100%;
	}
`

const Row = styled.div`
	label: row;
	display: flex;
	margin: 0 -${gutterWidth / 2}px;
	box-sizing: border-box;
	flex-direction: column;
	flex-wrap: wrap;

	&.reverse {
		flex-direction: column-reverse;
	}

	${breakpoint['tablet']} {
		flex-direction: row;

		&.reverse {
			flex-direction: row-reverse;
		}
	}
`

const getWidth = val => {
	return `${(val || 12) / .12}%`;
}

const colWidth = props => css`
  width: ${getWidth(props.col)};
`

const Col = styled.div`
	padding: 0 ${gutterWidth}px;
	${colWidth};

	${props => (
		props['colMd'] && css`
			${breakpoint['tabletOnly']} {
				width: ${getWidth(props['colMd'])};
			}
		`
	)}

	${props => (
		props['colLg'] && css`
			${breakpoint['desktop']} {
				width: ${getWidth(props['colLg'])};
			}
		`
	)}
`
// .col-xs-offset-0 need implementation
// .col-xs-offset-1

export { Container, Row, Col };
