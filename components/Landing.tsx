import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'


interface Props {
    setSelectedPage:Dispatch<SetStateAction<string>>
}

const Landing:NextPage<Props> = ({setSelectedPage}) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

  return (
    <section
     id="home"
     className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'
     >

        <div className='md:order-2 flex justify-center basis-5/9 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreen ? (
                <div className='profileImg relative ml-20 rounded-t-[400px] before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]  before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]'>
                    <img 
                    alt='profile'
                    src='/assets/profile-image4.png'
                    className='hover:filter hover:saturate-200 rounded-t-[400px] transition duration-500 w-full max-w-[400px] md:max-w-[600px]'
                    />
                </div>
            ) : (
                <div className='profileImg relative md:ml-20 rounded-t-[400px]'>
                <img 
                alt='profile'
                src='/assets/profile-image4.png'
                className='hover:filter hover:saturate-200 rounded-t-[400px] transition duration-500 w-full max-w-[240px] sm:max-w-[400px] md:max-w-[600px]'
                />
            </div>
            )}
            </div>

            <div className='z-30 basis-4/9 mt-12 md:mt-32 '>
                <motion.div
                className='flex justify-center'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true , amount:0.5}}
                transition={{duration:0.5 , delay:1.8}}
                variants={{
                    hidden:{opacity:0 , x:-50},
                    visible:{opacity:1 , x:0}
                }}
                >
                    <div className='text-4xl md:text-6xl font-Playfair z-10 text-center md:text-start flex '>
                    <span>Kuldeep {""}</span>
                    <div className='xs:relative xs:text-deep-blue xs:font-semibold z-20 md:w-60 flex justify-start pt-1'
                    >
                    <img src='/assets/brush.png' className='hidden xs:flex absolute -top-9 right-0 w-60'/>
                     <span className='xs:relative md:ml-5 xs:text-deep-blue xs:font-semibold'>Singh</span>
                    </div>
                    </div>

                <p className='mt-10 mb-7 text-sm text-center md:text-start'>

                </p>

                </motion.div>
            </div>
      
    </section>
  )
}

export default Landing