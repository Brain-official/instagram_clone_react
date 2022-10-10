import React from 'react'
import { BsCircle } from "react-icons/bs"
import { Link } from 'react-router-dom'


const StatusCircles = () => {
    return (
        <nav className='status'>
            <ul className='d-flex flex-row w-100 justify-content-around list-unstyled'>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/ > </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
                <li className='nav-item'>
                        <Link className='nav-link' to="/"> <BsCircle size={32}/> </Link>
                </li>
            </ul>
        </nav>
    )
}

export default StatusCircles



