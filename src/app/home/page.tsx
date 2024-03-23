'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import Header from './Header'
import AboutMe from './AboutMe'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import 'aos/dist/aos.css'
import Github from './Github'

export default function Home() {
  const [isMobile, setIsMobile]: any = React.useState(null)
  useEffect(() => {
    AOS.init()
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])
  return (
    <main className='flex flex-col justify-between items-center w-full min-h-screen tracking-widest bg-black text-white mx-auto'>
      <Header />
      <section className='z-10 w-full'>
        <AboutMe isMobile={isMobile}/>
        <Education isMobile={isMobile} />
        <Skills isMobile={isMobile} />
        <Experience isMobile={isMobile} />
        <Projects isMobile={isMobile} />
        <Github />
        <Contact />
      </section>
      <div className='fixed bottom-4 lg:bottom-10 right-4 lg:right-10 z-40'>
        <a
          href='https://www.linkedin.com/in/victor-moucattash-512b08290/'
          target='blank'
        >
          <div className='transition ease-in-out delay-50 duration-300 hover:scale-110 hover:from-[#2D64BC] hover:to-sky-600 shadow-lg hover:shadow-[#2D64BC] text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 shadow-teal-500/50 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2'>
            LinkedIn
          </div>
        </a>
      </div>
    </main>
  )
}
