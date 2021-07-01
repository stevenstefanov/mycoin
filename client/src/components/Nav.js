import React, {useContext} from 'react'
import {useLoginState} from '../Utils/loginState'

export default function Nav() {

   const state = useLoginState()
    
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="/home">MyCoin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/portfolio">My Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Coin Rankings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My Transactions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className='nav-item'>
                <a href='/signup'><button className='nav-link' href='/signup'> Sign Up</button></a>
                </li>
                <li className="nav-item">
                    <a href ='/login'><button className="nav-link">Log In</button></a>
                </li>
                {console.log(state)}
            </ul>
        </div>
    )
}
