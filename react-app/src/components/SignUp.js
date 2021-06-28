import React from 'react';
import axios from 'axios'

function SignUp() {
    const  signUp = async  (e) => {
        e.preventDefault()

        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
        const firstname = document.querySelector('#firstname-signup').value.trim();
        const sirname = document.querySelector('#sirname-signup').value.trim();

        if (email && password) {
            const response = await axios.post('/api/user', {
                firstname,
                sirname,
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
    <section className = 'sign-up-form'>
    <form onSubmit={signUp}>
    <div className="mb-3">
    <label for="formGroupExampleInput" className="form-label">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput email-signup" placeholder="Example input placeholder"/>
    </div>

    <div className="mb-3">
    <label for="formGroupExampleInput2" className="form-label">Password</label>
    <input type="password" className="form-control" id="formGroupExampleInput2 password-signup" placeholder="Another input placeholder" />
    </div>

    <div class="row">
    <div class="col">
        <input type="text" class="form-control" placeholder="First name" aria-label="First name" id='firstname-signup'/>
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id='sirname-signup'/>
    </div>
    </div>

    <button type='submit'>Submit</button>
    </form>

    </section>
    )

}

export default SignUp;