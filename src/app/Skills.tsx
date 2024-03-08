'use client'
import React from 'react'
import { skills } from './constants'
import Title from '@/components/title'
import { Boxes } from '@/components/background-boxes'
import { cn } from '@/utils/cn'

export default function Skills() {
  return (
    <div id='skills' className='pt-20'>
      <div className='lg:h-[60rem]  relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg'>
        <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
        <Boxes />
        <Title title='Skills' className='z-30' />
        <div className='text-center mt-2 text-neutral-300 relative z-20 grid lg:grid-cols-3 text-center lg:gap-32 pt-20'>
          {skills.map((skill, i) => {
            return (
              <div
                key={i}
                className='space-y-10'
                data-aos='flip-left'
                data-aos-duration={(i + 1) * 500}
              >
                <div className='text-teal-300 underline underline-offset-8'>
                  {skill.title}
                </div>
                <div className='space-y-2'>
                  {skill.data.map((row, i2) => (
                    <div key={i2}>{row}</div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
