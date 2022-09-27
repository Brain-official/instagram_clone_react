import React from 'react'
import { BiSearch } from 'react-icons/bi';
import {BsHouseDoorFill} from 'react-icons/bs';
import { CgAddR } from 'react-icons/cg';
import {AiOutlineHeart} from 'react-icons/ai';
import { BsCircle } from "react-icons/bs"
import {Link} from "react-router-dom"



const Footer = () => {
    return (
        <nav id='footer' className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav me-aut0 mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"> <BsHouseDoorFill size={25}/> </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'> <BiSearch size={25}/> </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"> <CgAddR size={25}/> </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"> <AiOutlineHeart size={25} /> </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to="/"> <BsCircle size={25}/> </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Footer


