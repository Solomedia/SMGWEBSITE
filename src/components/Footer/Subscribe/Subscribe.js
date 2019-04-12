import React from 'react'
import { css } from '@emotion/core'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { P } from '../../../utils/type'
import Button from '../../../utils/buttons'

const Subscribe = () => {
	return (
		<div css={subscribe}>
			<P css={title}>STAY WOKE.</P>
			<P>
				SUBSCRIBE TO SEE WHAT’S GOING ON WITHIN SOLO MEDIA AND THE DESIGN &
				DEVELOPMENT WORLD.
			</P>

			<Formik
				initialValues={{ email: '' }}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email()
						.required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values.email, null, 2))
						setSubmitting(true)
					}, 500)
				}}
			>
				{({ touched, errors, isSubmitting }) => (
					<Form css={form}>
						<div css={formGroup}>
							<Field
								name="email"
								type="email"
								placeholder="E-MAIL ADDRESS"
								disabled={isSubmitting}
							/>
							{errors.email && touched.email ? (
								<div css={formError}>{errors.email}</div>
							) : null}
						</div>

						<Button
							css={submitButton}
							type="submit"
							disabled={isSubmitting}
							secondary
						>
							Let&#39;s Talk
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

//STYLES BLOCK
const subscribe = props => css`
	${props.breakpoint['tablet']} {
		text-align: left;
	}
`

const title = css`
	font-weight: 600;
`

const form = props => css`
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	${props.breakpoint['medium']} {
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
`

const formGroup = props => css`
	position: relative;

	${props.breakpoint['medium']} {
		width: 65%;
	}
`

const formError = css`
	color: red;
	padding-left: 10px;
	text-align: left;
`

const submitButton = props => css`
	margin-top: 20px;

	${props.breakpoint['medium']} {
		width: 30%;
		margin-top: 0;
	}
`
//END STYLES

export default Subscribe
