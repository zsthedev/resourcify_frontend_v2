import React from 'react'
import { assets } from '../../../constants'

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img className='w-16 h-16 object-cover object-center' src={assets.logo} alt="" />
            <h2 className='text-2xl font-clemente_regular font-[400] text-zinc-800'>Resourcify</h2>
        </div>
    )
}

export default Logo
