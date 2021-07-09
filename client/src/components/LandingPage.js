import React from 'react';
import './landingpage.css'
import Three from '../Utils/Three'

function LandingPage() {

    return(
        <div id='container'>
            <div id='landingWrap'>
                <section id = 'info'>
                    <h2>
                        MyCoin
                    </h2> 

                    <h5>
                        Welcome to MyCoin
                    </h5>

                    <p>
                        MyCoin allows users to manage their assets and holdings all in one convenient location. Our goal is to allow new users to have a safe place to learn more about CryptoCurrencies and provide all users a location to project their profit-loss margins before buying/selling their holdings on the market. MyCoin strives to demonstrate the power of a user focused application to help indivduals increase their understanding of Crypto investments and create a productive workspace to see their projected and actual profit-loss margins. 
                    </p>

                </section>      
            </div>
            <div>
            <Three>
            
            </Three>
            </div>
        </div>

    )
}

export default LandingPage;