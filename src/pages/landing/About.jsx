import React from 'react'
import { assets } from '../../../constants'

const About = () => {
  return (
    <section id='about' className='w-full px-16'>
      <div className='w-full grid grid-cols-3 gap-6'>
        <div className='h-[450px]'>
          <img className='w-full h-full bg-red-400 rounded-lg object-cover object-center' src={assets.zain} alt="" />
        </div>
        <div className='text-center flex flex-col justify-center'>
          <h2 className='text-4xl font-clemente_semibold mb-2'>Mind Behind Resourcify</h2>
          <p>Meet the minds behind Resourcify: Zain Asgher Malik and Daniya Qaiser—final year Software Engineering students at COMSATS University Islamabad, Wah Campus. Our inspiration for this project came from witnessing daily inefficiencies and manual resource management in our university's libraries and labs. Driven by a shared passion to solve real campus challenges through smart technology, we developed Resourcify—a centralized, web-based solution that simplifies how academia and service coordinators access, manage, and optimize institutional resources. With features like real-time alerts, booking management, and analytics, Resourcify not only enhances operational efficiency but also creates a smoother, smarter experience for all users.</p>
        </div>
        <div className='h-[450px]'>
          <img className='w-full h-full bg-red-400 rounded-lg object-cover object-center' src={assets.daniya} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About
