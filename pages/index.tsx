import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Homee from '../components/home/Home'
import { useState } from 'react'
import Homenav from '../components/Homenav/Homenav'

const Home: NextPage = () => {

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

export default Home
