import React , { useState , useEffect, Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Homenav from '../Homenav/Homenav'


interface Props {
    page:boolean,
    setPage:Dispatch<SetStateAction<boolean>>
}

const Home:NextPage<Props> = ({page, setPage}) => {

    const [defaultWidth, setDefaultWidth] = useState(700)

    useEffect(() => {

        setDefaultWidth(window.innerWidth)

            setTimeout(() => {
                setPage(true)
            }, 1400);
    }, [])
    
    const boxVariant = {
        hidden :{
            y:"0vw",
        },
        visible :{
            y:page ? "-180vw" : 0,
            transition: {
               type:'spring',
               stiffness:defaultWidth <= 700 ? 400 : 200,
               damping: defaultWidth >= 700 ? 160 : 100,
               when: "beforeChildren", 
               staggerChildren: 0.08,
           },
        }
    }

    const listVariant = {
        hidden :{
            y:-100,
            opacity:1
        },
        visible :{
            y:0,
            opacity:1,
        }
    }

    console.log(defaultWidth)
  
  return (
    <div className='h-[100vh] w-[100vw] '>
            <motion.div
                className='absolute top-0 !z-50 left-0 bg-black w-[100%] h-[100%] flex flex-col items-center justify-center gap-6 md:gap-10'
                 variants={boxVariant}
                 initial="hidden"
                 animate="visible"
            >              
                <div className='flex gap-3 md:gap-10 overflow-hidden'>
                {["W","E","L","C","O","M","E"].map((box,i) => {
                    return <motion.li 
                    key={i}
                    variants={listVariant}
                    className='navli text-5xl md:text-8xl font-workSans hover:!bg-black hover:!cursor-default overflow-hidden text-white'>{box}</motion.li>
                })}     
                </div>
                <div>           
                </div>
            </motion.div>
            <Homenav/>
        </div>
  )
}

export default Home