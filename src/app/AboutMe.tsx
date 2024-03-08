import React from 'react'
import { aboutMe } from './constants'
import { BackgroundBeams } from '@/components/background-beams'
import Title from '@/components/title'
import TitleSparkles from '@/components/sparkles-title'

export default function AboutMe() {
  return (
    <div
      id='about'
      className='max-w-screen-md mx-auto text-center flex flex-col px-3 lg:px-0 pt-32'
    >
      <TitleSparkles title='ABOUT ME' />
      <div className='flex flex-col gap-10 mt-10'>
        {aboutMe.map((x, i) => {
          return (
            <div key={i} data-aos={i % 2 ? 'fade-left' : 'fade-right'}>
              {x}
            </div>
          )
        })}
      </div>
      <BackgroundBeams />
    </div>
  )
}
