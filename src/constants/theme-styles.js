const columns = 12;

const gutterWidth = 30;

const breakpoint = {
	phoneSmall: `@media (max-width: 576px)`,
	phone: `@media (max-width: 768px)`,
	tablet: `@media (min-width: 768px)`,
	tabletOnly: `@media (min-width: 768px) and (max-width: 1023px)`,
	desktop: `@media (min-width: 1024px)`,
	large: `@media (min-width: 1440px)`
};

const maxWidth = {
	sm: '540px',
	md: '720px',
	lg: '1024px',
	xl: '1440px'
 };

 const color = {
	cerulean: '#0AB2D8',
	doveGray: '#656565',
	primary: '#000000',
	secondary: '#FFFFFF',
	tundora: '#4B4242',
	tundoraGray: '#4C4C4C',
	lilacBush: '#A07FDA'
};

const theme = {
	breakpoint,
	columns,
	color,
	gutterWidth,
	maxWidth
}

export default theme;
