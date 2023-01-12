import React, { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { slashMotion , textMotion ,limotion } from './animate'
import { NextPage } from 'next'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Example } from '../navbar/Example'
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import DotGroup from '../DotGroup'
import Landing from '../Landing'

interface Props {
    selectPage:string,
    setSelectedPage:Dispatch<SetStateAction<string>>,
    isTopOfPage:boolean
}

interface LinkProps {
    page:string,
    selectedPage:string,
    setSelectedPage:Dispatch<SetStateAction<string>>
}

const Link:NextPage<LinkProps> = ({page, selectedPage , setSelectedPage}) => {
    const lowerCasePage = page.toLocaleLowerCase()
    return (
        <motion.li initial="rest" whileHover="hover" animate="rest" variants={limotion}>
            <AnchorLink
            className={`${selectedPage === lowerCasePage ? 'text-yellow' : 'hover:text-yellow transition duration-500'} `}
            href={`#${lowerCasePage}`}
            onClick={()=>setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    </motion.li> 
    )
}

const Homenav:NextPage<Props> = ({ isTopOfPage , selectPage , setSelectedPage}) => {

    const isAboveSmallScreens = useMediaQuery("(min-width:768px)")
    const navbarBackground = isTopOfPage ? '' : 'bg-red'

  return (
    <>
   { isAboveSmallScreens ?<> <header className="flex bg-deep-blue justify-between items-center w-full h-16 px-4 md:px-10  ">
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
            <motion.ul className='flex gap-16' >
                <Link 
                    page="Home"
                    selectedPage={selectPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Skills"
                    selectedPage={selectPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Testimonials"
                    selectedPage={selectPage}
                    setSelectedPage={setSelectedPage}    
                />
                <Link 
                    page="Contact"
                    selectedPage={selectPage}
                    setSelectedPage={setSelectedPage}    
                />
            </motion.ul>
        </div>
    </header>
    
    </>
    : <Example/>}
    </>
  )
}

export default Homenav