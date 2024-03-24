/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { projects } from '../constants'
import Link from 'next/link'
import Title from '@/components/title'

export default function Projects({ isMobile }: any) {
  return (
    <div id='projects' className='p-4 lg:p-20 space-y-20'>
      <div className=' flex flex-col items-center'>
        <Title title='Projects' />
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          className='max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-center'
        >
          I build beautiful projects with the latest technologies and
          frameworks. I`m a passionate developers that love to build amazing
          projects.
        </div>
      </div>
      <Swiper
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-48 lg:h-[30rem] flex'
      >
        {projects.map((row) => (
          <SwiperSlide
            key={row.title}
            className='border-2 border-2 hover:border-teal-300'
          >
            <Link
              href={row.link}
              className='block group-hover/product:shadow-2xl '
            >
              <img
                src={row.thumbnail}
                className='object-cover object-center-top absolute h-full w-full inset-0 w-[37.5rem] h-[37.5rem]'
                alt={row.title}
                loading='lazy'
              />
            </Link>
            {/* <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div> */}
            <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
              {row.title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
