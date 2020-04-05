import React from 'react';
import './Signup.css';

export const Signup = () => {
	return (
		<div className='signup'>
			<div className='header-button'>
				<p className='header-button-text'><span>Try it free 7 days</span> then $20/mo. thereafter</p>
			</div>
			<div className='form'>
				<input type='text' className='input' />
				<input type='text' className='input' />
				<input type='text' className='input' />
				<input type='text' className='input' />
				<button>Claim Your Free Trial</button>
				<p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
			</div>
		</div>
	)
}

export default Signup;