import React, { useEffect, useState } from 'react';

import './landingpage.css'

function LandingPage() {
    const data = window.sessionStorage.getItem('isLoggedIn')
    console.log(data)
    const [login, setLogin] = useState(false)

    useEffect(() => {

        if(data) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    },[]) 


    return(
 
                <section id = 'info'>
                    {console.log(login)}
                    <h2>
                        MyCoin
                    </h2> 
                    <br/>

                    <h5>
                        Welcome to MyCoin
                    </h5>
                    <br/>

                    <p>
                        MyCoin allows users to manage their assets and holdings all in one convenient location. Our goal is to allow new users to have a safe place to learn more about CryptoCurrencies and provide all users a location to project their profit-loss margins before buying/selling their holdings on the market. MyCoin strives to demonstrate the power of a user focused application to help indivduals increase their understanding of Crypto investments and create a productive workspace to see their projected and actual profit-loss margins. 
                    </p>
                    <br/>

                    {!login ?  
                    <div>
                    <a href = '/signup'>
                    <button id='sign-up'> Sign Up</button>
                </a>
                   
                <a href = '/login'>
                    <button id='login'> Log In</button>
                </a> 
                </div>: <div><a href = '/news'>
                    <button id='news'> News </button>
                </a>
                   
                <a href = '/rankings'>
                    <button id='rankings'> Coin Rankings</button>
                </a> </div> }
                
                </section> 

 

    )
}

export default LandingPage;