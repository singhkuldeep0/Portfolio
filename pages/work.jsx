import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slashMotion, textMotion } from '../components/Homenav/animate'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { wrapper } from '../store'
import { client, urlFor } from '../sanity.client'
import { setProjects } from '../slices/projectSlice'
import { Tab } from '@headlessui/react'


const work = () => {

  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const projects = useSelector((state) => state.projects.projects)

  const [filteredProjects, setFilterProjects] = useState(projects)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  let categories = [
    'All',
    'Javascript',
    "Reactjs",
    'Nextjs',
    'Nodejs',
    'MongoDB'
  ]

  let arr = []

  const filterProjects = (category) => {
    if (category === 'All') {
      setFilterProjects(projects)
    }
    else {
      projects.filter((item) => {
        if (item.skills.includes(category)) {
          arr.push(item)
        }
      })
      setFilterProjects(arr)
    }
  }

  console.log(filteredProjects)

  return (
    <section>
      <nav className={`z-40 w-full fixed top-0 py-5 ${isTopOfPage ? 'bg-deep-blue' : 'bg-pink-600'}`}>
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

          <Link
            className='text-white hover:text-yellow transition duration-500'
            href="/"
          >
            Home
          </Link>
        </div>
      </nav>
      <div className='w-full mt-6'>
        <div className=" px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 w-[600px] mx-auto rounded-xl bg-red p-1">
              {categories.map((category) => (
                <Tab
                  onClick={() => filterProjects(category)}
                  key={category}
                  className={({ selected }) => {
                    return classNames(
                      'w-full rounded-lg py-2.5 px-2 text-sm font-medium leading-5',
                      'focus:outline-none ',
                      selected
                        ? 'bg-blue shadow text-white'
                        : ' hover:bg-white hover:text-black text-white'
                    )
                  }
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
        <div className='w-full px-4 md:px-10 flex flex-wrap gap-10'>
          <AnimatePresence>
        {filteredProjects.map((item, i) => (
          <motion.div
          key={item._id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.5}}
          className="flex justify-center mb-10">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={urlFor(item.images[0]).url()} alt="" />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{item.projectName}</h5>
                <p className="text-gray-700 text-base mb-4">
                 {item.description?.slice(0,140)}...
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">view</button>
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
        </div>
      </div>
    </section>
  )

}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {

  const projectsQuery = `*[_type == 'projects'] | order(releaseDate desc)`
  const projects = await client.fetch(projectsQuery)

  await store.dispatch(setProjects(projects))

  console.log(projects)

  return {
    props: {

    }
  }
})


export default work