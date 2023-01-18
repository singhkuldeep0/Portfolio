import { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import { motion } from 'framer-motion'
import { slashMotion, textMotion, limotion , liVariant  } from './animate'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
    isTopOfPage: boolean,
    selectPage: string,
    setSelectedPage: Dispatch<SetStateAction<string>>
}


interface LinkProps {
    page: string,
    selectedPage: string,
    setSelectedPage: Dispatch<SetStateAction<string>>
    navli:boolean
}

const Linkk: NextPage<LinkProps> = ({navli, page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLocaleLowerCase()


    return (
        <>
        {lowerCasePage === "projects" ?

            (<motion.li variants={limotion}  transition={{
                type:"tween",
                duration: navli ? 2 : 0.5
            }}
            >
                <Link
                    className='hover:text-yellow transition duration-500'
                    href="/work"
                >
                    {page}
                </Link>
            </motion.li>)  :

              (<motion.li variants={limotion}  transition={{
            type:"tween",
            duration: navli ? 2 : 0.5
        }}
        >
            <AnchorLink
                className={`${selectedPage === lowerCasePage ? 'text-yellow' : 'hover:text-yellow transition duration-500'} `}
                href={`#${lowerCasePage}`}
                onClick={() => setSelectedPage(lowerCasePage)}
            >
                {page}
            </AnchorLink>
        </motion.li> )

        
        
        }
        </>
    )
}

const Homenav: NextPage<Props> = ({ isTopOfPage, selectPage, setSelectedPage }) => {

    const [isMenuToggled, setisMenuToggled] = useState(false)
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)")

    const [navli, setNavli] = useState(true)

    useEffect(() => {
     setTimeout(() => {
        setNavli(false)
     }, 4000);
    }, [])
    

    return (
        <nav className={`z-40 w-full fixed top-0 py-5 ${ isTopOfPage ? 'bg-deep-blue' : 'bg-pink-600'}`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
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
                {isAboveSmallScreens ? (
                    <motion.div variants={liVariant}    
                    initial="hidden"
                    animate="visible"
                    className='flex justify-center gap-10 font-Sans text-sm font-semibold overflow-hidden'>
                        <Linkk
                            navli={navli}
                            page="Home"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                            navli={navli}
                            page="Skills"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        
                        <Linkk
                            navli={navli}
                            page="Projects"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        
                        <Linkk
                            navli={navli}
                            page="Testimonials"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                            navli={navli}
                            page="Contact"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </motion.div>
                ) : (
                    <button onClick={() => setisMenuToggled(!isMenuToggled)} className={`relative inline-flex items-center justify-start px-2 py-1 overflow-hidden font-medium transition-all ${isTopOfPage ? 'bg-pink-600' : 'bg-deep-blue'} rounded group`}>
                        <span className="w-52 h-52 rounded rotate-[-40deg] bg-blue absolute bottom-0 left-0 -translate-x-full ease-in-out duration-1000  transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out ">
                            <Bars2Icon className='h-8' />
                        </span>
                    </button>
                )}
                {
                    !isAboveSmallScreens && (
                        <div className={`${isMenuToggled ? 'translate-x-0' : 'translate-x-96'} fixed duration-300 ease-in-out top-0 right-0 bottom-0 -full bg-blue w-[300px]`}>
                         
                            <div className="flex justify-end p-4">
                            <button onClick={()=>setisMenuToggled(!isMenuToggled)} className="inline-flex items-center justify-center px-1.5 py-1.5 text-base font-bold leading-6 text-white bg-pink-600 border border-transparent rounded-full md:w-auto hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600">
                                <XMarkIcon className='h-8' />
                            </button>
                            </div>

                            <motion.div variants={liVariant} initial="hidden" animate="visible"  className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                            <Linkk
                            navli={navli}
                            page="Home"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                            navli={navli}
                            page="Skills"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                            navli={navli}
                            page="Projects"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                            navli={navli}
                            page="Testimonials"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Linkk
                           navli={navli}
                            page="Contact"
                            selectedPage={selectPage}
                            setSelectedPage={setSelectedPage}
                        />
                            </motion.div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Homenav