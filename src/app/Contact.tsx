'use client'
import { BackgroundBeams } from '@/components/background-beams'
import Title from '@/components/title'
import React from 'react'

export default function Contact() {
  return (
    <div className='w-full relative h-screen pt-20'>
      <Title title='CONTACT' />
      <div className='max-w-screen-sm mx-auto pt-20'>
        <div className='relative flex flex-col max-w-sm lg:max-w-none lg:max-w-none items-start z-0'>
          
          <input
            id='floating_standard'
            name='test'
            type='text'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=''
          />
          <label
            htmlFor='floating_standard'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
          >
            Floating standard
          </label>
        </div>
        {/* <input
          type='text'
          placeholder='Name'
          className='h-14 p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-800  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'
        /> */}
      </div>
      <BackgroundBeams />
    </div>
  )
}
