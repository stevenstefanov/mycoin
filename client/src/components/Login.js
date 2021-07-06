import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = async (e) => {
        e.preventDefault()

        if (email && password) {
            const response = await axios.post('/api/users/login' ,{
                email,
                password,
            })

            if (response) {
                console.log(response)
                console.log('logged in')
                sessionStorage.setItem('isLoggedIn', true)
                document.location.replace('/home')
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
                    <input className = 'form-input' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' id='email'/>
                    </div>
                    <div>
                    <input className = 'form-input' type='password' placeholder='Password'  id='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
            </div> 
            
            
        </section>


    
        
    )
}

export default Login;