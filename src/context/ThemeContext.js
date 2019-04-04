import React, { useState } from 'react'
import Proptypes from 'prop-types'

import theme, { themeDark, themeLight } from '../constants/theme-styles'

export const ThemeContext = React.createContext({
	theme,
})

export const CustomThemeProvider = ({ children }) => {
	const [themeColor, setThemeColor] = useState(theme.color)
	const [themeName, setThemeName] = useState('Light')

	const changeThemeColor = () => {
		if (themeColor === themeLight) {
			setThemeColor(themeDark)
			setThemeName('Dark')
		}
		if (themeColor === themeDark) {
			setThemeColor(themeLight)
			setThemeName('Light')
		}
	}

	return (
		<ThemeContext.Provider
			value={{
				theme: {
					...theme,
					color: themeColor,
				},
				themeName,
				changeTheme: changeThemeColor,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

CustomThemeProvider.propTypes = {
	children: Proptypes.node.isRequired,
}

export default ThemeContext
