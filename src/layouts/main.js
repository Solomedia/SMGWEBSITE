import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import globalStyles from '../constants/global-styles'
import Header from '../components/global/header'
import Footer from '../components/global/footer'
import theme from '../constants/theme-styles'
import { ThemeProvider } from 'emotion-theming'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
			<Global styles={globalStyles}  />
			<Header siteTitle="solo" />
			<main className="some-class">{children}</main>
			<Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
