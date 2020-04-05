import React from 'react';
import './Signup.css';

export const Signup = () => {
	return (
		<div className='signup'>
			<div className='header-button'>
				<p className='header-button-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
			</div>
			<div className='form'>
				<div className='field'>
					<input type='text' className='input' />
					<p className='error'>First Name cannot be empty.</p>
				</div>
				<button>Claim Your Free Trial</button>
				<p>By clicking the button, you are agreeing to our <span className='legal'>Terms and Services</span></p>
			</div>
		</div>
	)
}

export default Signup;