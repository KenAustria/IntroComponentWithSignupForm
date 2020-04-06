import React from 'react';
import './Signup.css';

export const Signup = () => {
	return (
		<div className='signup'>
			<div className='header-button'>
				<p className='header-button-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
			</div>
			<div className='form'>
				<div className='field-list'>
					<div className='field-item'>
						<div className='field'>
							<input className='field-input' type='text' name='first-name' placeholder='First Name' required />
							<p className='error'>First Name cannot be empty.</p>
						</div>
					</div>
					<div className='field-item'>
						<div className='field'>
							<input className='field-input' type='text' name='last-name' placeholder='Last Name' required />
							<p className='error'>Last Name cannot be empty.</p>
						</div>
					</div>
					<div className='field-item'>
						<div className='field'>
							<input className='field-input' type='text' name='email' placeholder='Email' required />
							<p className='error'>Looks like this is not an email.</p>
						</div>
					</div>
					<div className='field-item'>
						<div className='field'>
							<input className='field-input' type='text' name='password' placeholder='Password' required />
							<p className='error'>Password cannot be empty.</p>
						</div>
					</div>
					<button>Claim Your Free Trial</button>
					<p>By clicking the button, you are agreeing to our <span className='legal'>Terms and Services</span></p>
				</div>
			</div>
		</div>
	)
}

export default Signup;