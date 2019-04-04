import React from 'react'
import PropTypes from 'prop-types'

import MainLayout from './main'
import { CustomThemeProvider } from '../context/ThemeContext'

const Layout = ({ children }) => {
	return (
		<CustomThemeProvider>
			<MainLayout>{children}</MainLayout>
		</CustomThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
