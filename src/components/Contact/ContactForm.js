import React from 'react'
import { Formik, Form, Field } from 'formik'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { contactSchema, initialValues } from './ContactValidation'
import Button from '../../utils/buttons'

const ContactForm = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={contactSchema}
		onSubmit={values => {
			// same shape as initial values
			console.log(values)
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
						<option value="service-1">Service 1</option>
						<option value="service-2">Service 2</option>
						<option value="service-3">Service 3</option>
					</Field>
					{errors.services && touched.services ? (
						<div css={formError}>{errors.services}</div>
					) : null}
				</div>
				<div css={formGroup}>
					<Field component={() => <textarea placeholder="PROJECT SUMMARY" />} />
					{errors.projectSummary && touched.projectSummary ? (
						<div css={formError}>{errors.projectSummary}</div>
					) : null}
				</div>
				<SubmitButton type="submit">Let&#39;s Talk</SubmitButton>
			</Form>
		)}
	</Formik>
)

//STYLES BLOCK

const formContainer = props => css`
	margin-top: 45px;
	text-align: center;

	input,
	select,
	textarea {
		border-radius: 10px;
		border: 3px solid ${props.color.primary};
		margin-bottom: 3px;
		padding: 25px 15px;
		width: 100%;
	}

	select {
		appearance: none;
	}

	textarea {
		min-height: 210px;
	}
`

const formGroup = css`
	margin-bottom: 20px;
	position: relative;
`

const formError = css`
	color: red;
	padding-left: 10px;
	text-align: left;
`

const SubmitButton = styled(Button)`
	margin-top: 65px;

	${props => `${props.theme.breakpoint['phone']}`} {
		margin-top: 20px;
	}
`
//END STYLES

export default ContactForm
