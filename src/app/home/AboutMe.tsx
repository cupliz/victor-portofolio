'use client'
import React from 'react'
import { aboutMe } from '../constants'
import Title from '@/components/title'
import { BackgroundBeams } from '@/components/background-beams'

export default function AboutMe({ isMobile }: any) {
  return (
    <div
      id='about'
      className='max-w-screen-md mx-auto text-center flex flex-col px-3 lg:px-0 pt-32'
    >
      <Title title='ABOUT ME' />
      <div className='flex flex-col gap-10 mt-10'>
        {aboutMe.map((x, i) => {
          return (
            <div key={i} data-aos='fade-up' data-aos-duration={(i + 1) * 500}>
              {x}
            </div>
          )
        })}
      </div>
      {!isMobile && isMobile !== null && <BackgroundBeams />}
    </div>
  )
}
