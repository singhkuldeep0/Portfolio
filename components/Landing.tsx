import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import SocialMediaIcons from '../components/SocialMediaIcons'

interface Props {
    setSelectedPage:Dispatch<SetStateAction<string>>
}

const Landing:NextPage<Props> = ({setSelectedPage}) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

  return (
    <section
     id="home"
     className='md:flex min-h-screen md:justify-evenly md:items-center md:h-full gap-16 xl:py-10'
     >

        <div className='md:order-2 flex justify-center w-full md:w-7/12 z-10 mt-28 md:mt-48 xl:mt-52'>
            {isAboveMediumScreen ? (
                <div className='profileImg relative ml-20 rounded-t-[400px] before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]  before:w-full before:max-w-[300px] before:xl:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
                    <img 
                    alt='profile'
                    src='/assets/profile-image4.png'
                    className='hover:filter hover:saturate-200 rounded-t-[400px] transition duration-500 w-full max-w-[300px] xl:max-w-[500px]'
                    />
                </div>
            ) : (
                <div className='profileImg relative md:ml-20 rounded-t-[400px]'>
                <img 
                alt='profile'
                src='/assets/profile-image4.png'
                className='hover:filter hover:saturate-200 mx-auto rounded-t-[400px] transition duration-500 w-full max-w-[240px] sm:max-w-[300px] xl:max-w-[600px]'
                />
            </div>
            )}
            </div>

            <div className='z-30 w-full md:w-5/12 mt-12 md:mt-[10rem] '>
                <motion.div
                className='flex flex-col w-[100%] justify-center'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true , amount:0.5}}
                transition={{duration:0.5 , delay:1.8}}
                variants={{
                    hidden:{opacity:0 , x:-50},
                    visible:{opacity:1 , x:0}
                }}
                >
                    <div className='text-4xl  md:text-6xl font-Playfair z-10 text-center md:text-start flex justify-center items-center h-7'>
                    <span className='ml-[15px] mt-[10px] '>Kuldeep {""}</span>
                    <div className='xs:relative xs:text-deep-blue xs:font-semibold z-20 md:w-[15rem] flex justify-start pt-1 w-[10rem] h-full items-center'
                    >
                    <img src='/assets/brush.png' className='hidden xs:flex absolute right-0 w-60 md:h-[7rem] h-[4rem]'/>
                     <span className='xs:relative ml-[15px] mt-[10px] xs:text-deep-blue xs:font-semibold'>Singh</span>
                    </div>
                    </div>

                <p className='mt-8 md:mt-14 mb-7 text-sm text-center md:text-start tracking-wider'>
                Hello! My name is Kuldeep Singh and I build things for the web. I&apos;m a web developer specializing in building (and occasionally designing) exceptional digital experiences
                </p>
                </motion.div>

                <motion.div
                className='flex mt-5 justify-center md:justify-start'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true , amount:0.5}}
                transition={{delay:1.8, duration:0.5}}
                variants={{
                    hidden:{opacity:0 , x:-50 },
                    visible:{ opacity:1 , x:0 }
                }}
                >
                    <AnchorLink
                    className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
                    onClick={()=>setSelectedPage("contact")}
                    href="#contact"
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                    className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                    onClick={()=>setSelectedPage("contact")}
                    href="#contact"
                    >
                        <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-Playfair px-10'>
                            Let's talk
                        </div>
                    </AnchorLink>
                </motion.div>

                <div
                className='flex mt-5 justify-center md:justify-start '
                // initial="hidden"
                // whileInView="visible"
                // viewport={{once:true , amount:0.5}}
                // transition={{delay:2 , duration:0.5}}
                // variants={{
                //     hidden:{y:50},
                //     visible:{y:0 }
                // }}
                >
                    <SocialMediaIcons />
                </div>
            </div>
      
    </section>
  )
}

export default Landing