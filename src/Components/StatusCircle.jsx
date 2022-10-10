import React from 'react'
import { Link } from 'react-router-dom'
import { BsCircle } from "react-icons/bs"

const StatusCircle = () => {
    return (
        <>
            
            {[...new Array(50).fill(null)].map((circleItem, index) => {
                return (
                    <li key={`circle-${index}`} className='nav-item'>
                        <Link className='nav-link me-3' to='/'> <BsCircle size={45}/> </Link>
                    </li>
                )
            }) }
        </>
    
    )
}

export default StatusCircle

