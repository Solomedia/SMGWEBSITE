import React from 'react'
import { css } from '@emotion/core'

const technologies = [
	'PROGRESSIVE <br> WEB APPS',
	'PROGRAMS',
	'WEBSITES',
	'APPLICATIONS'
];

const sectionText = props => css`
	color: ${props.color.secondary};
	text-align: center;
`

const Technologies = () => (
	<ul>
		{
			technologies.map(item =>
				<li css={sectionText} key={item.toLowerCase().trim()} dangerouslySetInnerHTML={{__html: item}} />
			)
		}
	</ul>
)

export default Technologies;
