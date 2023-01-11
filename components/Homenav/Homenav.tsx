import React from 'react'
import { motion } from 'framer-motion'
import { slashMotion , textMotion ,limotion } from './animate'

const Homenav = () => {
    
    const transitionValues = {
        duration: 0.8,
        yoyo: Infinity,
        ease: "easeOut"
      };

  return (
    <header className="flex justify-between items-center w-full h-16 px-4 md:px-10  ">
        <motion.div initial="rest" whileHover="hover" animate="rest"
        className='flex h-full gap-1 items-center overflow-hidden w-[174px] cursor-pointer'>
            <div className='flex justify-center items-center' >
                <motion.span className='text-white text-2xl pt-[0.25rem]' variants={slashMotion}>©</motion.span>
            </div>
            <motion.div className='flex text-white text-xl font-Poppins overflow-hidden' >
                <motion.div className='flex' variants={textMotion}>
                <span>Singh</span>
                <span>Kuldeep</span>
                </motion.div>
                <motion.div className='mx-2' variants={textMotion}>
                    <span>Singh</span>
                </motion.div>
            </motion.div>
        </motion.div>

        <div className='justify-center hidden md:flex'>
            <motion.ul className='flex gap-8 lg:gap-12 xl:gap-16' >
                <motion.li initial="rest" whileHover="hover" animate="rest" variants={limotion} className='liitem'>Work</motion.li>
                <motion.li initial="rest" whileHover="hover" animate="rest" variants={limotion} className='liitem'>About</motion.li>
                <motion.li initial="rest" whileHover="hover" animate="rest" variants={limotion} className='liitem'>Contact</motion.li>
            </motion.ul>
        </div>
    </header>
  )
}

export default Homenav