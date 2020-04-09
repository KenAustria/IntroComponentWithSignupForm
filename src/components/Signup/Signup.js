import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

const Signup = () => {
	const formik = useFormik({
    initialValues: {
      firstame: '',
      lastname: '',
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
      firstname: Yup.string()
        .required('First Name cannot be empty'),
      lastname: Yup.string()
        .required('Last Name cannot be empty'),
      email: Yup.string()
        .email('Looks like this is not an email')
				.required('Required'),
			password: Yup.string()
        .required('Password cannot be empty'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
	});

	return (
		<div className='signup'>
			<div className='header-button'>
				<p className='header-button-text'><b>Try it free 7 days</b> then $20/mo. thereafter</p>
			</div>
			<div className='form'>
				<form onSubmit={formik.handleSubmit} title='form'>
					<div className='field-item'>
						<input 
							id='firstname'
							type='text'
							title='firstname'
							{...formik.getFieldProps('firstname')}
							placeholder='First Name'
							className='field-input'
							autoComplete='off'
							required
						/>
						{formik.touched.firstname && formik.errors.firstname ? (
							<span className='error'>{formik.errors.firstname}</span>
						) : null}
					</div>
					<div className='field-item'>
						<input
							id='lastname'
							type='text'
							title='lastname'
							{...formik.getFieldProps('lastname')}
							placeholder='Last Name'
							className='field-input'
							autoComplete='off'
							required
						/>
						{formik.touched.lastname && formik.errors.lastname ? (
							<span className='error'>{formik.errors.lastname}</span>
						) : null}
					</div>
					<div className='field-item'>
						<input 
							id='email'
							type='email'
							title='email'
							{...formik.getFieldProps('email')}
							placeholder='Email'
							className='field-input'
							autoComplete='off'
							required
						/>
						{formik.touched.email && formik.errors.email ? (
							<span className='error'>{formik.errors.email}</span>
						) : null}
					</div>
					<div className='field-item'>
						<input 
							id='password'
							type='password'
							title='password'
							{...formik.getFieldProps('password')}
							placeholder='Password'
							className='field-input'
							autoComplete='off'
							required
						/>
						{formik.touched.password && formik.errors.password ? (
							<span className='error'>{formik.errors.password}</span>
						) : null}
					</div>
					<div className='footer'>
						<button className='trial-button' type='submit'>Claim Your Free Trial</button>
						<p className='agree'>By clicking the button, you are agreeing to our <span className='legal'>Terms and Services</span></p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Signup;