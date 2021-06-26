import React from 'react';
import axios from 'axios'

function SignUp() {
    // const userPost = () => {
    //     axios.post('/api/user') {

    //     }
    // }
    
    return(
    <section className = 'sign-up-form'>
    <form>
    <div className="mb-3">
    <label for="formGroupExampleInput" className="form-label">Email</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
    </div>

    <div className="mb-3">
    <label for="formGroupExampleInput2" className="form-label">Password</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
    </div>

    <div class="row">
    <div class="col">
        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
    </div>

    <button type='submit'>Submit</button>
    </form>

    </section>
    )

}

export default SignUp;