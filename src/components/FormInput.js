import React from 'react';
import './Login.css';


const FormInput = () => {     
    return ( 
        <div className='container'>
            <div className='form-container'>
                <form id='input-text'>
                <h3>Enter User Data</h3>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'/>
                    </div>
                <div className='button-container'>
                    <button className='submit'>Login</button>
                    <button className='signUp'>Sign Up</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default FormInput
