'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import AboutMe from './AboutMe'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <main className='flex flex-col justify-between items-center min-h-screen tracking-widest bg-black text-white mx-auto'>
      {/* <div className='fixed h-20 '>Header</div> */}
      <div className='mt-32'>
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <div className='fixed bottom-4 lg:bottom-10 right-4 lg:right-10 z-40'>
        <a
          href='https://www.linkedin.com/in/victor-moucattash-512b08290/'
          target='blank'
          className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:from-[#2D64BC] hover:to-sky-600 shadow-lg hover:shadow-[#2D64BC] shadow-teal-500/50 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2'
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}
