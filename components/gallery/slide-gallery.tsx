'use client'
import React from 'react'
import { type GalleryProps } from './gallery'
import { type NavItemConfig } from '../nav/nav'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import Button from '../buttons/button'
interface Props extends GalleryProps, NavItemConfig {
  className?: string
  title?: string
  totalCount: number
}

const SlideGallery = ({
  images,
  route,
  title,
  className,
  totalCount,
}: Props) => {
  return (
    <div className={twMerge('flex flex-col gap-3 p-3 md:container', className)}>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl font-bold capitalize md:text-5xl">{title}</h2>
        <Button>
          <Link href={route}>Tutte {totalCount}</Link>
        </Button>
      </div>
      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden md:w-auto md:flex-row md:justify-center"
        draggable={false}
      >
        {images.map((image, index) => (
          <div key={index} className="w-56 flex-none md:w-1/4">
            <Link
              draggable={false}
              href={`/creations/${encodeURIComponent(image.secure_url)}`}
            >
              <Image
                draggable={false}
                src={image.secure_url}
                alt={image.public_id}
                className="h-full w-full overflow-hidden object-cover transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                width={500}
                height={500}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideGallery
