import React from 'react'
import StatusCircle from './StatusCircle'


const StatusCircles = () => {
        return (
                <nav className='status'>
                        <ul className='d-flex flex-row w-100 justify-content-around list-unstyled'> 
                                <StatusCircle />
                        </ul>
                </nav>
        )
}


export default StatusCircles



