import type { NextPage } from 'next'
import Head from 'next/head'
import Homee from '../components/home/Home'
import { useEffect, useState } from 'react'
import {client} from '../sanity.client'
import { useDispatch } from 'react-redux'
import { setProjects } from '../slices/projectSlice'

const Home: NextPage = ({projects}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setProjects(projects))
  }, [projects])
  

  const [page, setPage] = useState<boolean>(false)

  console.log(page)

  return (
    <div className="flex min-h-screen app flex-col items-center justify-center overflow-x-hidden">
      <Head>
        <title>SinghKuldeep.com</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>


     <main>
      <div className='inline md:hidden'>

      </div>
      <Homee page={page} setPage={setPage}/>
     </main>
    
    </div>
  )
}


export async function getServerSideProps() {

  const projectsQuery = `*[_type == 'projects'] | order(releaseDate desc)`
  const projects = await client.fetch(projectsQuery)
  
  return {
    props: {
      projects
    }, 
  }
}

export default Home

