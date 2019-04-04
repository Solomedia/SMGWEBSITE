import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import globalStyles from '../constants/global-styles'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ThemeContext from '../context/ThemeContext'

const MainLayout = ({ children }) => {
	const currentTheme = useContext(ThemeContext)

	return (
		<ThemeProvider theme={currentTheme.theme}>
			<Global styles={globalStyles} />
			<Header siteTitle="solo" />
			<main>{children}</main>
			<Footer />
		</ThemeProvider>
	)
}

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MainLayout
