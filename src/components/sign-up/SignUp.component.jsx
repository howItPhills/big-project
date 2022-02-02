import React, { useState } from 'react';
import './sign-up.styles.scss';

import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';


import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';


const SignUp = ({ signUpStart }) => {
   const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
   })

   const handleChange = event => {
      const { name, value } = event.target;

      setUserCredentials({
         ...userCredentials, [name]: value
      })
   }

   const { displayName, email, password, confirmPassword } = userCredentials;
   const handleSubmit = async event => {
      event.preventDefault();

      if (password !== confirmPassword) {
         alert('Passwords dont match');
         return;
      }
      signUpStart(displayName, email, password)
   }

   return (
      <div className='sign-up'>
         <h2 className='title'>Dont have an account?</h2>
         <span className='subtitle'>Sign up with Email and Password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               name='displayName'
               type='text'
               value={displayName}
               label='Your name'
               required
               handleChange={handleChange}
            />
            <FormInput
               name='email'
               type='email'
               value={email}
               label='Your email'
               required
               handleChange={handleChange}
            />
            <FormInput
               name='password'
               type='password'
               value={password}
               label='Your Password'
               required
               handleChange={handleChange}
            />
            <FormInput
               name='confirmPassword'
               type='password'
               value={confirmPassword}
               label='Confirm password'
               required
               handleChange={handleChange}
            />
            <CustomButton type='submit'>Sign Up</CustomButton>
         </form>
      </div>
   )
}

const mapDispatchToProps = dispatch => ({
   signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})

export default connect(null, mapDispatchToProps)(SignUp)