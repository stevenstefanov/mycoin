import React, {useState} from 'react';
import axios from 'axios'
import { useLoginAction, useLoginState } from '../Utils/loginState';
import {Redirect} from 'react-router-dom';

function SignUp() {
    const { loginUser } = useLoginAction();
    const context = useLoginState()
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
               console.log('okay')
               loginUser(name)
           }
        }
    }

    
    return(
        
    <section className = 'sign-up-form'>
        {!context.loggedIn ? <form>

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

        <button type='submit' onClick={signUp}>Submit</button>
        </form> :
        <Redirect to={{ 
            pathname: '/',
            state: context.loggedIn
        }}></Redirect> }
    
    </section>

    )

}

export default SignUp;