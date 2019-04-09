import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	services: Yup.string().required('Service is required.'),
	projectSummary: Yup.string()
		.min(2, 'Too Short!')
		.max(500, 'Too Long!'),
})

export const initialValues = {
	name: '',
	email: '',
	services: '',
	projectSummary: '',
}
