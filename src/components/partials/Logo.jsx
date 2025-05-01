import React from 'react'
import { assets } from '../../../constants'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to={"/"}>

            <div className='flex items-center gap-2'>
                <img className='w-16 h-16 object-cover object-center' src={assets.logo} alt="" />
                <h2 className='text-2xl font-clemente_regular font-[400] text-zinc-800'>Resourcify</h2>
            </div>
        </Link>
    )
}

export default Logo
