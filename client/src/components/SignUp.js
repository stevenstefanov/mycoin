import React, {useState, useContext} from 'react';
import axios from 'axios'
import {  useLoginAction } from '../Utils/loginState';


function SignUp() {
    const { loginUser } = useLoginAction();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    
    const  signUp = async  (e) => {
        e.preventDefault()

        if (email && password) {
            const response = await axios.post('/api/users', {
                name,
                email,
                password,
            })

            if (response) {
                document.location.replace('/portfolio')
                console.log('logged in')
                loginUser(name)
            } else {
                console.log('login failed')
            }
        }
    }
    
    return(
    <section className = 'sign-up-form'>
    <form onSubmit={signUp}>
    <div className="mb-3">
    <label for="formGroupExampleInput" className="form-label">Email</label>
        <input className = 'form-input' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' id='email'/>
    </div>

    <div className="mb-3">
    <label for="formGroupExampleInput2" className="form-label">Password</label>
        <input className = 'form-input' type='password' placeholder='Password'  id='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
    </div>

    <div class="row">
    <div class="col">
        <input type="name" value={name} onChange={(e) => setName(e.target.value) } class="form-control" placeholder="name" aria-label=" name" id='name-signup'/>
    </div>
 
    </div>

    <button type='submit'>Submit</button>
    </form>

    </section>
    )

}

export default SignUp;