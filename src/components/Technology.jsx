import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from 'framer-motion';
const iconvarient=(duration)=>({
  initil:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
      },
  }
})
const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='my-20 text-center text-4xl'>Technologies</motion.h1>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className='flex flex-wrap items-center justify-center gap-4'>
    <motion.div
    variants={iconvarient(2.5)}
    initial="initial"
    animate="animate"
     className='rounded-2xl border-4 
     border-neutral-800 p-4'>
    <FaReact className="text-7xl text-cyan-400"/>
    </motion.div>
    <motion.div 
    variants={iconvarient(3)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <SiSpring className="text-7xl text-green-600"/>
    </motion.div>
    <motion.div
    variants={iconvarient(5)}
    initial="initial"
    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
    <GrMysql className="text-7xl text-blue-600"/>
    </motion.div>
    <motion.div 
    variants={iconvarient(6)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <TbBrandJavascript className="text-7xl text-yellow-500"/>
    </motion.div>
    
    <motion.div 
    variants={iconvarient(4)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <DiJqueryLogo className="text-7xl text-blue-600"/>
    </motion.div>
    <motion.div 
    variants={iconvarient(3.5)}
    initial="initial"
    animate="animate"
    className='rounded-2xl border-4 border-neutral-800 p-4'>
    <FaJava className="text-7xl text-red-500"/>
    </motion.div>

    </motion.div>
    </div>
  )
}

export default Technology