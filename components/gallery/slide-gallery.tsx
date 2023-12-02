'use client'
import React from 'react'
import { type GalleryProps } from './gallery'
import { type NavItemConfig } from '../nav/nav'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
interface Props extends GalleryProps, NavItemConfig {
  className?: string
  title?: string
  totalCount: number
}

const SlideGallery = ({
  images,
  name,
  route,
  title,
  className,
  totalCount,
}: Props) => {
  console.log('🚀 ~ totalCount:', totalCount)
  console.log('🚀 ~ SlideGallery ~ name:', name)
  return (
    <div
      className={twMerge('flex flex-col gap-3 p-3 md:items-center', className)}
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        <button className="border-2 border-dark px-6 py-1.5 text-xl font-bold  hover:bg-dark hover:text-logo">
          <Link href={route}>Tutte {totalCount}</Link>
        </button>
      </div>
      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden md:w-auto md:flex-row md:justify-center"
        draggable={false}
      >
        {images.map((image, index) => (
          <div key={index} className="w-56 flex-none md:w-1/4">
            <Image
              draggable={false}
              src={image.secure_url}
              alt={image.public_id}
              className="h-full w-full overflow-hidden object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-grab"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideGallery
