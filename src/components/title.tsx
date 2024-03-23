'use client'
import React from 'react'

export default function Title({
  title,
  className,
}: {
  title?: string
  className?: string
}) {
  return (
    <div data-aos='flip-up' data-aos-duration="1000">
      <div
        className={`text-3xl lg:text-7xl text-teal-300 text-center ${className}`}
      >
        {title}
      </div>
    </div>
  )
}
