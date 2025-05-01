import React from 'react'
import { facilities } from '../../utils/staticData'
import Facility from "../../components/Facility"
const Features = () => {
    return (
        <section id='features' className='!h-auto sec-section px-16'>
            <h2 className='text-4xl font-clemente_semibold font-medium text-primary-text'>Discover Our Key Facilities</h2>
            <div className="grid grid-cols-3 gap-[16px] mt-[16px]">
                {facilities.map((f, index) => (
                    <Facility key={index} icon={f.icon} title={f.title} description={f.paragraph} />
                ))}
            </div>
        </section>
    )
}

export default Features
