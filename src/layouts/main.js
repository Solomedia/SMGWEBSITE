import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import globalStyles from '../constants/global-styles'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import theme from '../constants/theme-styles'
import { ThemeProvider } from 'emotion-theming'

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={globalStyles} />
			<Header siteTitle="solo" />
			<main>{children}</main>
			<Footer />
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
