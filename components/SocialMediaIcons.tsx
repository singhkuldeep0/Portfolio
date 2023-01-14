import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const SocialMediaIcons = () => {


  const boxVariant = {
    hidden :{
    },
    visible :{
        transition: {
           when: "beforeChildren", 
           staggerChildren: 0.1,
       },
    }
}

const listVariant = {
    hidden :{
        y:160,
        opacity:1
    },
    visible :{
        y:0,      
        opacity:1,

    }
}

  return (
    <motion.div className='overflow-hidden flex' 
    variants={boxVariant}
    initial="hidden"
    animate="visible"
    
    >
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}   transition={{type:"tween",duration:2}}><SocialIcon  url="https://linkedin.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{type:"tween", duration:2}}><SocialIcon  url="https://twitter.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{type:"tween", duration:2}}><SocialIcon  url="https://facebook.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{type:"tween", duration:2}}><SocialIcon  url="https://instagram.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    </motion.div>
  )
}

export default SocialMediaIcons