import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import globalStyles from '../constants/global-styles'
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import theme from '../constants/theme-styles'
import { ThemeProvider } from 'emotion-theming'
import { css } from '@emotion/core'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
			<Global styles={globalStyles}  />
			<Header siteTitle="solo" />
			<main css={css`min-height: calc(100vh - 200px);`}>{children}</main>
			<Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
