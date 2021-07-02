import React from 'react'
import {useLoginState} from '../Utils/loginState'
import {Link} from 'react-router-dom'

export default function Nav() {

   const state = useLoginState()
    
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to='/home' className="nav-link">My Coin</Link>
                </li>
                <li className="nav-item">
                    <Link to='/portfolio' className="nav-link"> My Portfolio </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/rankings' className="nav-link"> Coin Rankings </Link>
                </li>
                <li className="nav-item">
                    <Link to='/transaction' className="nav-link">My Transactions</Link>
                </li>
                <li className="nav-item">
                    <Link to ='/news' className="nav-link">News</Link>
                </li>
                <li className='nav-item'>
                <Link to = '/signup'><button className='nav-link' href='/signup'> Sign Up</button></Link>
                </li>
                {!state.loggedIn ? 
                <li className="nav-item">
                    <Link to = '/login'><button className="nav-link">Log In</button></Link>
                </li>
                :
                <li className="nav-item">
                    <a href='/'><button className='nav-link'>logout</button></a>
                </li>
                }
            </ul>
        </div>
    )
}
