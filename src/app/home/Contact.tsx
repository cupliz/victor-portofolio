'use client'
import React from 'react'
// import { BackgroundBeams } from '@/components/background-beams'
import Title from '@/components/title'

export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { name, email, message } = e.target
    console.log(name.value, email.value, message.value)
    alert('send message to ' + email.value)
  }
  return (
    <div id='contact' className='relative lg:pt-20 pb-48 p-4'>
      {/* <BackgroundBeams /> */}
      <Title title='Contact' />
      <form
        onSubmit={handleSubmit}
        className='max-w-screen-sm mx-auto  mt-20 space-y-6  z-40 '
      >
        <input
          data-aos='fade-up'
          data-aos-duration='1000'
          required
          type='text'
          name='name'
          placeholder='Name'
          className='p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-300  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'
        />
        <input
          data-aos='fade-up'
          data-aos-duration='1200'
          required
          type='text'
          name='email'
          placeholder='Email'
          className='p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-300  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'
        />
        <textarea
          data-aos='fade-up'
          data-aos-duration='1400'
          required
          name='message'
          placeholder='Message'
          rows={4}
          className='p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-300  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700'
        />
        <div
          data-aos='fade-up'
          data-aos-duration='1600'
          className='mx-auto flex justify-center'
        >
          <button
            type='submit'
            className='transition ease-in-out delay-50 duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer relative px-20 py-2.5 hover:text-black hover:bg-teal-300 bg-transparent border-2 border-teal-300 rounded-lg'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
