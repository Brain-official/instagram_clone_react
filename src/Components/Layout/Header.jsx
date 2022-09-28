import React from 'react'
import Logo from "../../logoImg/logo.png"
import { FiCamera } from 'react-icons/fi';
import {Link} from "react-router-dom"
import { RiMessengerLine } from 'react-icons/ri';



const Header = () => {
    return (
        <nav id='header' className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
                <ul className='navbar-nav me-aut0 mb-2 mb-lg-0 w-100 d-flex flex-row justify-content-around '>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/"> <FiCamera size={27}/> </Link>
                    </li>
                    <img className='logo' src={Logo} alt='logo' width={'100'}/>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'> <RiMessengerLine size={27}/> </Link>
                    </li>
                </ul>
        </nav>
    )
}


export default Header


