import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './partials/Logo';
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = ({ routes, component: Component, pageTitle }) => {
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='w-full min-h-screen bg-zinc-100 flex items-center justify-center'>

            <div className="side w-[300px] h-full bg-white fixed top-0 left-0 flex flex-col p-4 gap-8">
                <div className='w-full'>
                    <Logo />
                </div>

                <div className='w-full flex-1 links'>
                    {routes.map((route, index) => {
                        const isSubActive = route.subRoutes?.some(sub => location.pathname === sub.value);
                        const isExpanded = openIndex === index;
                        const Icon = route.icon;

                        return (
                            <div key={index} className="mb-2">
                                <div
                                    onClick={() => route.isExtended && toggle(index)}
                                    className={`flex items-center justify-between cursor-pointer px-2 py-2 rounded-md transition-all duration-200 ${isSubActive ? 'bg-accent/10 text-accent font-semibold' : 'hover:bg-zinc-100 text-zinc-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 flex-1">
                                        {Icon && <Icon className="text-lg" />}
                                        {!route.isExtended ? (
                                            <Link
                                                to={route.path}
                                                className={`block w-full ${location.pathname === route.path ? 'text-accent font-semibold' : ''
                                                    }`}
                                            >
                                                {route.title}
                                            </Link>
                                        ) : (
                                            <span>{route.title}</span>
                                        )}
                                    </div>

                                    {route.isExtended && route.subRoutes && (
                                        <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    )}
                                </div>

                                {route.isExtended && isExpanded && route.subRoutes && (
                                    <div className="ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300">
                                        {route.subRoutes.map((sub, subIndex) => {
                                            const subActive = location.pathname === sub.value;
                                            return (
                                                <Link
                                                    key={subIndex}
                                                    to={sub.value}
                                                    className={`block px-2 py-1 text-sm rounded-md transition-colors ${subActive
                                                        ? 'bg-accent/20 text-accent font-medium'
                                                        : 'text-zinc-500 hover:text-accent hover:bg-zinc-100'
                                                        }`}
                                                >
                                                    {sub.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className='w-full'>
                    <div className='flex items-center gap-2'>
                        <img src="https://placehold.co/64x64" alt="" className='w-[64px] h-[64px] rounded-full object-cover object-center' />
                        <div>
                            <p className='text-base text-zinc-800 font-semibold'>Shahzaib Khan</p>
                            <p className='text-sm font-semibold text-accent'>Student</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main flex-1 ml-[300px] min-h-screen p-8">
                <div className="header w-full bg-white h-20 rounded-lg flex items-center p-4">
                    <p className='text-lg font-medium text-zinc-800'>{pageTitle}</p>
                </div>
                {Component && <Component />}
            </div>
        </section>
    );
};

export default Sidebar;
