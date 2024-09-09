import React from 'react'
import aboutpic from '../assets/about.jpg'
import {motion} from 'framer-motion';
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text'>About 
    <span className='text-neutral-500'>Me</span></h1>
    <div className='flex flex-wrap'>
   <div className='w-full lg:w-1/2 lg:p-8'>
   <div className='flex items-center justify-center'>
   <motion.img 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:0.5}}
   className='rounded-2xl' 
   src={aboutpic} alt=''></motion.img>
   </div>
   </div> 
   <div className='w-full lg:w-1/2'>
   <div className='flex justify-center lg:justify-start'>
   <motion.p 
   whileInView={{opacity:1,x:0}}
   initial={{opacity:0,x:100}}
   transition={{duration:0.5}}
   className='my-2 max-w-xl py-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications with 5 years of 
   professional experience, I have worked with variety of technologies, including React js, MySQL, Spring Boot. My journey in web developement began with deep
   curiosity for how things work and it has evoled into a career where i continuously
   strive to learn and adapt to new challengrs.I want to succeed in a stimulating and challenging
    environment that will provide me with
    advancement opportunities. I want to excel in
    'Software field' with hard work, perseverance and
    dedication. I want a highly rewarding career where I
    can use my skills and knowledge.</motion.p>
   </div>
   </div>
    </div>
    </div>
  )
}

export default About