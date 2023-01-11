import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Example } from '../components/navbar/Example'
import Homee from '../components/home/Home'
import { useState } from 'react'
import Homenav from '../components/Homenav/Homenav'

const Home: NextPage = () => {

  const [page, setPage] = useState<boolean>(false)

  console.log(page)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


     <main>
      <div className='inline md:hidden'>
    {page && <Example/>}
      </div>
      <Homee page={page} setPage={setPage}/>
     </main>
    
    </div>
  )
}

export default Home
