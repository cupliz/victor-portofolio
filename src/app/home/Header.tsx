'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const menus = [
  'About',
  'Education',
  'Skills',
  'Experience',
  'Projects',
  'Contact',
]
const separator = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      className='w-4 h-4 current-fill'
      viewBox='0 0 24 24'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'
        d='M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
      />
    </svg>
  )
}

export default function Header() {
  const [show, setshow] = useState(false)
  return (
    <div className='fixed h-20 bg-black w-screen shadow-lg shadow-teal-300 z-50 pt-6 px-4'>
      <nav className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <Link className='text-3xl font-bold leading-none' href='/'>
          <Image src='/logo.png' height={50} width={50} alt='' className='' />
        </Link>
        <div className='lg:hidden'>
          <button
            className='navbar-burger flex items-center text-teal-300 p-3'
            onClick={() => setshow(true)}
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:space-x-6'>
          {menus.map((menu, i) => {
            return (
              <a
                key={i}
                href={`#${menu.toLowerCase()}`}
                className='cursor-pointer hover:text-teal-300'
              >
                {menu}
              </a>
            )
          })}
        </div>
      </nav>

      {show && (
        <div className='navbar-menu relative z-50'>
          <div className='navbar-backdrop fixed opacity-25'></div>
          <nav className='fixed h-screen top-0 right-0 bottom-0 flex flex-col w-2/3 max-w-sm py-6 px-4 bg-black border-r overflow-y-auto'>
            <div className='flex items-center justify-end mb-8'>
              {/* <a className='mr-auto text-3xl font-bold leading-none' href='#'>
                <Image
                  src='/logo.png'
                  height={50}
                  width={50}
                  alt=''
                  className=''
                />
              </a> */}
              <button className='navbar-close' onClick={() => setshow(false)}>
                <svg
                  className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500 mt-2 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='flex flex-col justify-end gap-4 px-2 divide-y divide-slate-500'>
              {menus.map((menu, i) => {
                return (
                  <a
                    key={i}
                    href={`#${menu.toLowerCase()}`}
                    className='cursor-pointer hover:text-teal-300 text-right pt-2'
                  >
                    {menu}
                  </a>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
