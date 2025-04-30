import React from 'react'
import { assets } from '../../../constants'
import Logo from './Logo'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isAuthenticated }) => {
    const location = useLocation()
    const isActive = (path) => {
        return location.pathname === path ? true : false
    }
    return (
        <nav className={isAuthenticated ? "hidden" : "w-full px-8 py-3 border-b border-zinc-200 flex gap-4 items-center bg-white shadow-xs"}>
            <div className='flex-1'>
                <Logo />
            </div>

            <div className='flex-1 flex justify-center items-center gap-4'>
                {[
                    { value: "/", title: "Home" },
                    { value: "/about", title: "About" },
                    { value: "/features", title: "Features" },
                    { value: "/contact", title: "Contact" },
                ].map((route, index) => <Link className={`ease-in duration-150 hover:text-accent ${isActive(route.value) ? "text-accent" : "text-zinc-500 "}`} key={index} to={route.value}>
                    {route.title}
                </Link>)}

            </div>
            <div className='flex-1 flex items-center justify-end gap-4'>
                <Link to={"/academia_login"} className='primary_btn'>Academia Login</Link>
                <Link to={"/coordinators_login"} className='sec_btn'>Coordinators Login</Link>
            </div>

        </nav>
    )
}

export default Navbar
