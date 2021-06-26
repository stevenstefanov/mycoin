import React from 'react';
import axios from 'axios';
function Login() {

    const login = async (e) => {
        e.preventDefault()

        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();

        if (email && password) {
            const response = await axios.post('/api/users' ,{
                email,
                password,
            })

            if (response.ok) {
                document.location.replace('/portfolio')
                console.log('logged in')
            } else {
                console.log('login failed')
            }
        }
    }
    return(
        <section className = 'login'>
            <div class="card" style={{width: '18 rem'}}>
            <div class="card-body">
                <h5 class="card-title">Login</h5>
                <form className='login-form' onSubmit={login}>
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