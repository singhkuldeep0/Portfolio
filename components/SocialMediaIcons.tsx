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
           staggerChildren: 0.4,
       },
    }
}

const listVariant = {
    hidden :{
        y:60,
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
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{duration:0.5 , delay:1.8}}><SocialIcon  url="https://linkedin.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{duration:0.5 , delay:1.8}}><SocialIcon  url="https://twitter.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{duration:0.5 , delay:1.8}}><SocialIcon  url="https://facebook.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    <motion.div className='overflow-hiden max-h-fit' variants={listVariant}  transition={{duration:0.5 , delay:1.8}}><SocialIcon  url="https://instagram.com/jaketrent" bgColor='none' fgColor="white" /></motion.div>
    </motion.div>
  )
}

export default SocialMediaIcons