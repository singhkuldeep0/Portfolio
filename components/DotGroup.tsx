import { NextPage } from 'next'
import React, { Dispatch, SetStateAction } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

interface Props {
    selectPage:string,
    setSelectedPage:Dispatch<SetStateAction<string>>,
}

const DotGroup:NextPage<Props> = ({selectPage , setSelectedPage}) => {
    const selectedStyle = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`

  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-12'>
        <AnchorLink 
        className={`${selectPage === 'home' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#home"
        onClick={()=>setSelectedPage('home')}
        />
        <AnchorLink 
        className={`${selectPage === 'skills' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#skills"
        onClick={()=>setSelectedPage('skills')}
        />
        <AnchorLink 
        className={`${selectPage === 'projects' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#projects"
        onClick={()=>setSelectedPage('projects')}
        />
        <AnchorLink 
        className={`${selectPage === 'testimonials' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#testimonials"
        onClick={()=>setSelectedPage('testimonials')}
        />
        <AnchorLink 
        className={`${selectPage === 'contact' ? selectedStyle : "bg-dark-grey"} w-3 h-3 rounded-full`}
        href="#contact"
        onClick={()=>setSelectedPage('contact')}
        />

    </div>
  )
}

export default DotGroup