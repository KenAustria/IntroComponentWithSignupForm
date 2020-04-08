import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../utils/SignupFormValidation';
import './Signup.css';

const Signup = () => {
	const {
    values,
    errors,
    inputChangeHandler,
    submitHandler,
	} = useForm(signup, validate);
	
	function signup() {
    console.log('No errors, submit callback called!');
  }

	return (
		<div className='signup'>
			<div className='header-button'>
				<p className='header-button-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
			</div>
			<div className='form'>
				<form onClick={submitHandler}>
					<div className='field-item'>
						<input 
							type='text'
							name='firstname'
							placeholder='First Name'
							value={values.firstname || ''}
							className={`input ${errors.firstname && 'is-danger'}` || 'field-input' }
							// className='field-input'
							onChange={inputChangeHandler}
							autoComplete='off'
							required
						/>
						<p className='error'>First Name cannot be empty.</p>
					</div>
					<div className='field-item'>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							value={values.lastName || ''}
							className='field-input'
							onChange={inputChangeHandler}
							autoComplete='off'
							required
						/>
						<p className='error'>Last Name cannot be empty.</p>
					</div>
					<div className='field-item'>
						<input 
							type='email'
							name='email'
							placeholder='Email'
							value={values.email || ''}
							className='field-input'
							onChange={inputChangeHandler}
							autoComplete='off'
							required
						/>
						<p className='error'>Looks like this is not an email.</p>
					</div>
					<div className='field-item'>
						<input 
							type='password'
							name='password'
							placeholder='Password'
							value={values.password || ''}
							className='field-input'
							onChange={inputChangeHandler}
							autoComplete='off'
							required
						/>
						<p className='error'>Password cannot be empty.</p>
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










import React, {Component} from 'react';
import './Signup.css';

class Signup extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		errors: {}
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	signupFormValidator = (state) => {
		let errors = {};
		if (!this.state.firstname) {
			errors.firstname = 'First Name is required';
		} else if (this.state.firstname.length < 8) {
			errors.firstname = 'First Name must be 8 or more characters';
		}
		if (!this.state.lastname) {
			errors.lastname = 'Last Name is required';
		} else if (this.state.lastname.length < 8) {
			errors.lastname = 'Last Name must be 8 or more characters';
		}
		if (!this.state.email) {
			errors.email = 'Email address is required';
		} else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
			errors.email = 'Email address is invalid';
		}
		if (!this.state.password) {
			errors.password = 'Password is required';
		} else if (this.state.password.length < 8) {
			errors.password = 'Password must be 8 or more characters';
		}
		return errors;
	}

	formSubmitHandler = (event) => {
		event.preventDefault();
		this.signupFormValidator();
	}

	render() {
		const { firstname, lastname, email, password, errors } = this.state;

		return (
			<div className='signup'>
				<div className='header-button'>
					<p className='header-button-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
				</div>
				<div className='form'>
					<form onClick={this.formSubmitHandler}>
						<div className='field-item'>
							<input 
								type='text'
								name='firstname'
								placeholder='First Name'
								value={firstname}
								className='field-input'
								onChange={this.onInputChange}
								autoComplete='off'
								required
							/>
							{errors.firstname && (
                <p className='error'>{errors.firstname}</p>
              )}
						</div>
						<div className='field-item'>
							<input
								type='text'
								name='lastname'
								placeholder='Last Name'
								value={lastname}
								className='field-input'
								onChange={this.onInputChange}
								autoComplete='off'
								required
							/>
							{errors.lastname && (
                <p className='error'>{errors.lastname}</p>
              )}
						</div>
						<div className='field-item'>
							<input 
								type='text'
								name='email'
								placeholder='Email'
								value={email}
								className='field-input'
								onChange={this.onInputChange}
								required
							/>
							{errors.email && (
                <p className='error'>{errors.email}</p>
              )}
						</div>
						<div className='field-item'>
							<input 
								type='text'
								name='password'
								placeholder='Password'
								value={password}
								className='field-input'
								onChange={this.onInputChange}
								required
							/>
							{errors.password && (
                <p className='password'>{errors.password}</p>
              )}
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
}

export default Signup;