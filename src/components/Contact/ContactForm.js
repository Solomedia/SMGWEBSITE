import React from 'react';
import { Formik, Form, Field } from 'formik';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FaCaretDown } from 'react-icons/fa';

import { contactSchema, initialValues } from './ContactValidation';
import Button from '../../utils/buttons';
import { StaticQuery, graphql } from 'gatsby';

const ContactForm = () => (
	<StaticQuery
		query={graphql`
			query {
				allWordpressPost(
					filter: { categories: { elemMatch: { name: { eq: "Services" } } } }
				) {
					edges {
						node {
							categories {
								name
							}
							acf {
								service
							}
						}
					}
				}
			}
		`}
		render={data => (
			<Formik
				initialValues={initialValues}
				validationSchema={contactSchema}
				onSubmit={values => {
					// same shape as initial values
					// curl -s --user 'api:2ec2550ec77ca51ae0e79752033d2889-39bc661a-598ce6c6' \
					// https://api.mailgun.net/v3/sandbox7ee040b8258d4b9495243909c7af9509.mailgun.org/messages \
					// -F from='Excited User <mailgun@sandbox7ee040b8258d4b9495243909c7af9509.mailgun.org>' \
					// -F to=YOU@sandbox7ee040b8258d4b9495243909c7af9509.mailgun.org \
					// -F to=antoniogm14@gmail.com \
					// -F subject='Hello' \
					// -F text='Testing some Mailgun awesomeness!'
				}}
			>
				{({ errors, touched }) => (
					<Form css={formContainer}>
						<div css={formGroup}>
							<Field name="name" placeholder="NAME" />
							{errors.name && touched.name ? (
								<div css={formError}>{errors.name}</div>
							) : null}
						</div>
						<div css={formGroup}>
							<Field name="email" type="email" placeholder="E-MAIL" />
							{errors.email && touched.email ? (
								<div css={formError}>{errors.email}</div>
							) : null}
						</div>
						<div css={formGroup}>
							<Field component="select" name="services">
								<option value="">SERVICES</option>
								{data.allWordpressPost.edges.map(key => {
									return (
										<option
											key={key.node.acf.service}
											value={key.node.acf.service}
										>
											{key.node.acf.service}
										</option>
									);
								})}
							</Field>
							<FaCaretDown css={selectArrow} />
							{errors.services && touched.services ? (
								<div css={formError}>{errors.services}</div>
							) : null}
						</div>
						<div css={formGroup}>
							<Field
								component={() => <textarea placeholder="PROJECT SUMMARY" />}
							/>
							{errors.projectSummary && touched.projectSummary ? (
								<div css={formError}>{errors.projectSummary}</div>
							) : null}
						</div>
						<SubmitButton type="submit">Let&#39;s Talk</SubmitButton>
					</Form>
				)}
			</Formik>
		)}
	/>
);

//STYLES BLOCK

const formContainer = css`
	margin-top: 45px;
	text-align: center;

	input,
	select,
	textarea {
		margin-bottom: 3px;
		padding: 25px 15px;
	}

	textarea {
		min-height: 210px;
	}
`;

const selectArrow = ({ themeName, color }) => css`
	fill: ${themeName === 'Light' ? color.primary : color.secondary};
	height: 2.5em;
	pointer-events: none;
	position: absolute;
	right: 4%;
	top: 16%;
	width: 1.9em;
`;

const formGroup = css`
	margin-bottom: 20px;
	position: relative;
`;

const formError = css`
	color: red;
	padding-left: 10px;
	text-align: left;
`;

const SubmitButton = styled(Button)`
	margin-top: 65px;

	${props => `${props.theme.breakpoint['phone']}`} {
		margin-top: 20px;
	}
`;
//END STYLES

export default ContactForm;
