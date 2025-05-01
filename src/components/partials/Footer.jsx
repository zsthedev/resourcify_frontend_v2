import React from 'react'
import Logo from './Logo'
import { assets } from '../../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='h-[300px] bg-accent p-16 flex items-center gap-4 text-white'>
            <div className='w-full flex-2'>
                <div className='flex items-center gap-2'>
                    <img className='w-16 h-16 object-cover object-center' src={assets.logo} alt="" />
                    <h2 className='text-2xl font-clemente_regular font-[400] text-white'>Resourcify</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia consequatur sit ea! Placeat a at pariatur ipsam quod adipisci?</p>
            </div>
            <div className='w-full flex-1'>
                <ul className='flex flex-col gap-2'>
                    <b className='font-semibold'>Useful Links</b>
                    <Link>Home</Link>
                    <Link>Login As Academia</Link>
                    <Link>Join As Academia</Link>
                    <Link>Login As Coordinator</Link>
                    <Link>Join As Coordinator</Link>

                </ul>
            </div>
            <div className='w-full flex-2'>
                <form action="" className='!bg-accent flex flex-col !gap-2'>
                    <h2 className='text-2xl font-clemente_semibold'>Subscribe to Newsletter</h2>
                    <input className='!text-white !border-white' type="email" placeholder='Enter Your Email' required/>
                    <button className='primary_btn !w-fit !bg-white !text-accent'>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer
