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
}

const SlideGallery = ({ images, name, route, title, className }: Props) => {
  console.log('🚀 ~ SlideGallery ~ name:', name)
  return (
    <div className={twMerge('flex flex-col gap-3 p-3', className)}>
      <div className="flex items-center justify-between">
        <h2 className=" text-4xl font-bold">{title}</h2>
        <button className="border-2 border-dark px-6 py-1.5 text-xl font-bold  hover:bg-dark hover:text-logo">
          <Link href={route}>Tutte</Link>
        </button>
      </div>
      <div
        className="scrollbar-hide  flex gap-3 overflow-x-auto overflow-y-hidden"
        draggable={false}
      >
        {images.map((image, index) => (
          <div key={index} className="w-56 flex-none">
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
