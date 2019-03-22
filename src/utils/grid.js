import styled from "@emotion/styled"
import { breakpoint, maxWidth, gutterWidth } from '../constants/theme-styles';
import { css } from '@emotion/core'

const Container = styled.div`
  margin: 0 auto;
	padding: 0 ${gutterWidth};
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

	@media (min-width: ${breakpoint['md']}) {
		flex-direction: row;

		&.reverse {
			flex-direction: row-reverse;
		}
	}
`

const getWidth = val => {
	return `${val / .12}%`;
}

const colWidth = props => css`
  width: ${getWidth(props.col)};
`

const checkCol = (props, col) => {
	return `${props[col] ? getWidth(props[col]) : colWidth}`;
}

const colWidthMd = props => css`
  width: ${checkCol(props, 'colMd')};
`

const colWidthLg = props => css`
  width: ${checkCol(props, 'colLg')};
`

const Col = styled.div`
	padding: 0 ${gutterWidth}px;
	${colWidth};

	@media (min-width: ${breakpoint['md'] + 'px'}) {
    ${colWidthMd};
	}

	@media (min-width: ${breakpoint['lg'] + 1 + 'px'}) {
		${colWidthLg};
	}
`
// .col-xs-offset-0 need implementation
// .col-xs-offset-1

export { Container, Row, Col };
