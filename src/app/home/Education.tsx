'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { education } from '../constants'
import Title from '@/components/title'
import { BackgroundBeams } from '@/components/background-beams'

export default function ContainerScroll({ isMobile }: any) {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div id='education'>
      <div
        ref={containerRef}
        className='h-[60rem] lg:h-[80rem] hidden lg:flex items-center justify-center relative p-2 md:p-40'
      >
        {!isMobile && isMobile !== null && (
          <div
            className='py-10 md:py-40 w-full relative z-20'
            style={{ perspective: '100rem' }}
          >
            <motion.div
              style={{ translateY }}
              className='div max-w-5xl mx-auto text-center pt-20'
            >
              <div className='space-y-4'>
                <Title title='Education' />
                <div data-aos='fade-up' className='text-center text-3xl'>
                  {education.title}
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-duration={500}
                  className='text-center max-w-screen-md mx-auto'
                >
                  {education.desc}
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  className='text-3xl mx-10 text-teal-300'
                >
                  {education.school}:
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{
                rotateX: rotate, // rotate in X-axis
                scale,
                boxShadow:
                  '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
              }}
              className='max-w-7xl mx-auto h-[30rem] lg:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl'
            >
              <div className='pt-10 bg-black h-full w-full rounded-2xl grid grid-cols-1 md: grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4'>
                {education.studies.map((row, idx: number) => (
                  <motion.div
                    key={idx}
                    className='bg-black rounded-md cursor-pointer relative'
                    style={{ translateY }}
                    whileHover={{
                      boxShadow:
                        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                    }}
                  >
                    <div className='p-4 space-y-4'>
                      <h1 className='font-semibold text-teal-300'>
                        {row.title}
                      </h1>
                      <h2 className=' '>{row.description}</h2>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <BackgroundBeams />
          </div>
        )}
      </div>

      <div className='lg:hidden mt-20'>
        <div className='space-y-4'>
          <Title title='Education' />
          <div data-aos='fade-up' className='text-center text-xl lg:text-3xl'>
            {education.title}
          </div>
          <div className='text-center max-w-screen-md mx-auto'>
            {education.desc}
          </div>
          <div className='text-xl lg:text-3xl mx-10 text-teal-300'>
            {education.school}:
          </div>
        </div>
        {education.studies.map((row, idx: number) => (
          <div
            key={idx}
            data-aos='fade-up'
            data-aos-duration={(idx + 1) * 200}
            className='bg-black rounded-md cursor-pointer relative'
          >
            <div className='p-4 space-y-4'>
              <h1 className='font-semibold text-teal-300'>{row.title}</h1>
              <h2 className=' '>{row.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
