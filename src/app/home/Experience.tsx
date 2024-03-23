/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import Title from '@/components/title'

const content = [
  {
    title: 'Machine Learning Engineer CO-OP - Qualcomm',
    description: [
      `Participated in the development of the Snapdragon chip, impacting
      millions of devices globally, showcasing my ability to work on
      large-scale, impactful projects.`,
      `Created standalone debugging tools for Qualcomm's MLOps codebase,
      which were integrated into the continuous integration (CI)
      infrastructure, enhancing departmental efficiency by 25%.`,
      `Implemented normalization tools using Linux, Docker, and Git,
      enabling seamless mapping between operations and setting the stage
      for future in-depth codebase research.`,
      `Conducted research using Z3 and other Boolean Solvers to find
      patterns in normalized operations, aiming to further improve
      debugging tools and processes.`,
    ],
    image: '/experience-1.png',
  },
  {
    title: 'Full Stack Developer Intern - ENGICON',
    description: [
      `Developed and maintained full-stack web applications, focusing on
    processing, analyzing, and visually rendering data, thereby
    enhancing the user experience and data accessibility.`,
      `Efficiently managed time-sensitive updates, including content
    changes and database upgrades, ensuring high availability and
    up-to-date information for users.`,
      `Leveraged a diverse tech stack comprising HTML, Tailwind CSS,
    JavaScript, and other web technologies to build responsive and
    user-friendly interfaces.`,
    ],
    image: '/experience-2.png',
  },
]

export default function Experience({ isMobile }: any) {
  return (
    <div id='experience' className='bg-slate-900 pt-20'>
      <Title title='Experience' />
      {!isMobile && isMobile !== null ? (
        <StickyScroll content={content} />
      ) : (
        <div className='p-4'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20'>
              <h2
                className='text-2xl font-bold text-slate-100'
                data-aos='fade-up'
              >
                {item.title}
              </h2>
              <img
                src={item.image}
                alt=''
                className='h-[15rem] object-cover mx-auto'
                loading='lazy'
                data-aos='fade-up'
              />
              <div
                className='text-lg text-slate-300 max-w-md mt-10'
                data-aos='fade-up'
              >
                <div className='space-y-4'>
                  {item.description.map((desc: any, i: number) => {
                    return <div key={i}>{desc}</div>
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: any
    image?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    'var(--slate-900)',
    'var(--black)',
    'var(--neutral-900)',
  ]
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]
  return (
    <motion.div
      ref={ref}
      className='w-screen h-[40rem] overflow-y-auto flex justify-center relative space-x-10'
    >
      <div className='relative flex items-start px-4'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-2xl font-bold text-slate-100'
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className='text-lg text-slate-300 max-w-md mt-10'
              >
                <div className='space-y-4'>
                  {item.description.map((desc: any, i: number) => {
                    return <div key={i}>{desc}</div>
                  })}
                </div>
              </motion.div>
            </div>
          ))}
          <div className='h-40' />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          'hidden lg:block h-60 w-96 rounded-md bg-slate-900 sticky top-20 overflow-hidden',
          contentClassName
        )}
      >
        {content[activeCard].image ? (
          <div className='h-full w-full flex items-center justify-center text-white'>
            <img
              src={content[activeCard].image}
              alt=''
              className='h-full object-cover'
              loading='lazy'
            />
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  )
}
