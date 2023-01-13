import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Homenav from '../Homenav/Homenav'
import useMediaQuery from '../../hooks/useMediaQuery'
import DotGroup from '../DotGroup'
import Landing from '../Landing'
import LineGradient from '../LineGradient'
import MySkills from '../MySkills'

interface Props {
    page: boolean,
    setPage: Dispatch<SetStateAction<boolean>>
}

const Home: NextPage<Props> = ({ page, setPage }) => {

    const [defaultWidth, setDefaultWidth] = useState(700)
    const [selectPage, setSelectedPage] = useState("home")
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const [isTopOfPage, setIsTopOfPage] = useState(true)

    useEffect(() => {
        setDefaultWidth(window.innerWidth)
        setTimeout(() => {
            setPage(true)
        }, 1400);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY == 0) setIsTopOfPage(true)
            if (window.scrollY !== 0) setIsTopOfPage(false)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const boxVariant = {
        hidden: {
            y: "0vw",
        },
        visible: {
            y: page ? "-180vw" : 0,
            transition: {
                type: 'spring',
                stiffness: defaultWidth <= 700 ? 400 : 200,
                damping: defaultWidth >= 700 ? 160 : 100,
                when: "beforeChildren",
                staggerChildren: 0.08,
            },
        }
    }

    const listVariant = {
        hidden: {
            y: -100,
            opacity: 1
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }



    return (
        <div className='min-h-[100vh] w-[100vw] '>
            <motion.div
                className='absolute top-0 !z-50 left-0 bg-black w-[100%] h-[100%] flex flex-col items-center justify-center gap-6 md:gap-10'
                variants={boxVariant}
                initial="hidden"
                animate="visible"
            >
                <div className='flex gap-3 md:gap-10 overflow-hidden'>
                    {["W", "E", "L", "C", "O", "M", "E"].map((box, i) => {
                        return <motion.li
                            key={i}
                            variants={listVariant}
                            className='navli text-5xl md:text-8xl font-workSans hover:!bg-black hover:!cursor-default overflow-hidden text-white'>{box}</motion.li>
                    })}
                </div>
                <div>
                </div>
            </motion.div>
            <Homenav isTopOfPage={isTopOfPage} selectPage={selectPage} setSelectedPage={setSelectedPage} />
            <div className='w-5/6 mx-auto md:h-full'>
                {isAboveMediumScreens && <DotGroup selectPage={selectPage} setSelectedPage={setSelectedPage} />}
                <Landing setSelectedPage={setSelectedPage} />
            </div>
                <LineGradient/>

                <div className='w-5/6 mx-auto md:h-full'>
                    <MySkills/>
                </div>
        </div>
    )
}

export default Home