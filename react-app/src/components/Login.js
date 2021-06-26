import React from 'react';
import axios from 'axios';
function Login() {

    return(
        <section className = 'login'>
            <div class="card" style={{width: '18 rem'}}>
            <div class="card-body">
                <h5 class="card-title">Login</h5>
                <form className='login-form'>
                    <div>
                    <input className = 'form-input' type='text' placeholder='Email' id='email'/>
                    </div>
                    <div>
                    <input className = 'form-input' type='password' placeholder='Password'  id='password'/>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
            </div>
        </section>
    )
}

export default Login;