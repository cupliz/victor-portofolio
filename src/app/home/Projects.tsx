/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Link from 'next/link'
import { projects } from '../constants'

export default function Projects() {
  const ref = React.useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (window) {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 600, damping: 30, bounce: 200 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0.2, 0.9], [-500, size.width * 4]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, size.height * 1.4]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )

  return (
    <div
      id='projects'
      ref={ref}
      className='w-screen lg:h-[200vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <div className='max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0'>
        <h1
          data-aos='fade-up'
          className='text-2xl md:text-7xl font-bold text-teal-300'
        >
          Projects
        </h1>
        <p
          data-aos='fade-up'
          data-aos-duration='1000'
          className='max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200'
        >
          I build beautiful projects with the latest technologies and
          frameworks. I`m a passionate developers that love to build amazing
          projects.
        </p>
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className='hidden lg:block'
      >
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-20 mb-20'>
          {projects.map((row) => (
            <motion.div
              style={{ x: translateX }}
              whileHover={{ y: 50 }}
              key={row.title}
              className='group/product h-[30rem] w-[60rem] relative flex-shrink-0 bg-white'
            >
              <Link
                href={row.link}
                className='block group-hover/product:shadow-2xl '
              >
                <img
                  src={row.thumbnail}
                  className='object-cover object-center-top absolute h-full w-full inset-0 w-[37.5rem] h-[37.5rem]'
                  alt={row.title}
                />
              </Link>
              {/* <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div> */}
              <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
                {row.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className='block lg:hidden p-4 grid grid-cols-1 gap-10 mb-20'>
        {projects.map((row) => (
          <div
            key={row.title}
            data-aos='fade-up'
            className='group/product h-96 w-full relative flex-shrink-0 bg-transparent'
          >
            <Link
              href={row.link}
              className='block group-hover/product:shadow-2xl '
            >
              <img
                src={row.thumbnail}
                className='object-cover object-center-top absolute h-full w-full inset-0 w-[37.5rem] h-[37.5rem]'
                alt={row.title}
              />
            </Link>
            {/* <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div> */}
            <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
              {row.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
