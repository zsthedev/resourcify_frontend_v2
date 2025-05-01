import React from 'react'
import { assets } from '../../../constants'
import Logo from './Logo'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
const Navbar = ({ isAuthenticated }) => {
    const location = useLocation()
    const isActive = (path) => {
        return location.pathname === path ? true : false
    }
    return (
        <nav className={isAuthenticated ? "hidden" : "fixed top-0 left-0 w-full px-8 py-3 border-b border-zinc-200 flex gap-4 items-center bg-white shadow-xs"}>
            <div className='flex-1'>
                <Logo />
            </div>

            <div className="flex-1 flex justify-center items-center gap-6">
                {[
                    { value: "/", title: "Home" },
                    { value: "features", title: "Features" },
                    { value: "about", title: "About" },

                    // { value: "contact", title: "Contact" },
                ].map((route, index) => (
                    <ScrollLink
                        key={index}
                        to={route.value}
                        smooth={true}
                        duration={500}
                        offset={-60} // adjust if you have a fixed header
                        spy={true}
                        className="cursor-pointer relative text-base font-medium transition-all duration-200 ease-in-out text-zinc-500 hover:text-accent hover:-translate-y-1"
                        activeClass="text-accent"
                    >
                        {route.title}
                    </ScrollLink>
                ))}
            </div>

            <div className='flex-1 flex items-center justify-end gap-4'>
                <Link to={"/academia/login"} className='primary_btn'>Academia Login</Link>
                <Link to={"/coordinators/login"} className='sec_btn'>Coordinators Login</Link>
            </div>

        </nav>
    )
}

export default Navbar
