const columns = 12

const gutterWidth = 30

const breakpoint = {
	phoneSmall: `@media (max-width: 576px)`,
	phoneSmallUp: `@media (min-width: 576px)`,
	phone: `@media (max-width: 767px)`,
	tablet: `@media (min-width: 768px)`,
	tabletOnly: `@media (min-width: 768px) and (max-width: 1023px)`,
	medium: `@media (min-width: 992px)`,
	desktop: `@media (min-width: 1024px)`,
	large: `@media (min-width: 1440px)`,
}

const maxWidth = {
	sm: '540px',
	md: '720px',
	lg: '1024px',
	xl: '1440px',
}

export const themeLight = {
	cerulean: '#0AB2D8',
	doveGray: '#656565',
	primary: '#000000',
	secondary: '#FFFFFF',
	tundora: '#4B4242',
	tundoraGray: '#4C4C4C',
	lilacBush: '#A07FDA',
	alto: '#D8D8D8',
	overlay06: 'rgba(0, 0, 0, 0.6)',
}

export const themeDark = {
	cerulean: themeLight.cerulean,
	doveGray: themeLight.doveGray,
	primary: themeLight.secondary,
	secondary: themeLight.primary,
	tundora: themeLight.tundora,
	tundoraGray: themeLight.tundoraGray,
	lilacBush: themeLight.lilacBush,
	alto: themeLight.alto,
	overlay06: themeLight.overlay06,
}

const theme = {
	breakpoint,
	columns,
	color: themeLight,
	gutterWidth,
	maxWidth,
}

export default theme
