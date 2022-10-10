import React from 'react'
import { Link } from 'react-router-dom'
import { BsCircle } from "react-icons/bs"
import postImage from "../landscape.jpg"
import {AiOutlineHeart} from 'react-icons/ai';
import {BiMessageRounded} from "react-icons/bi"
import {FiSend} from "react-icons/fi"


const Post = () => {
    return (
        <>
            {[...new Array(50).fill(null)].map((post, index) => {
                return (
                    <div className='mt-5'>
                        <div className='top-post d-flex mb-2'>
                            <Link className='nav-link me-3' to='/'> <BsCircle size={25} /> </Link>
                            <Link className='nav-link' to='/'>Ronaldo_12 </Link>
                        </div>
                        <img src={postImage} alt="postImage" className="post-img"></img>

                        <div className='post-icons d-flex mt-2'>
                            <AiOutlineHeart size={25}  className="post-icon"/>
                            <BiMessageRounded size={25} className="post-icon" />
                            <FiSend size={25} className="post-icon"/>
                        </div>
                        <span className='likes'>1092 likes</span>
                        {/* <div className='comments'>
                        </div> */}
                    </div>
                )
            }) }
        </>
    )
}

export default Post


