'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import { BackgroundBeams } from '@/components/background-beams'
import Header from './Header'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className='flex items-center min-h-screen tracking-widest bg-black text-white mx-auto'>
      <div className='flex flex-col mx-auto text-center z-20 gap-5'>
        <div className='text-4xl lg:text-6xl'>
          Welcome to <span className='whitespace-nowrap text-teal-300'>Victor Moucattash`s</span>{' '}
          Portfolio
        </div>
        <div className='text-xl lg:text-3xl w-3/4 mx-auto'>Discover my journey in Computer Science</div>
        <div className='mt-10 lg:mt-20 '>
          <Link
            href={'/home'}
            className='cursor-pointer relative px-20 py-2.5 hover:text-black hover:bg-teal-300 bg-transparent border-2 border-teal-300 rounded-lg'
          >
            EXPLORE
          </Link>
        </div>
      </div>
        <BackgroundBeams /> 
    </main>
  )
}
