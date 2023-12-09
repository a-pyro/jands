import React from 'react'
import { type GalleryProps } from './grid-gallery'
import { type NavItemConfig } from '../nav/nav'
import { twMerge } from 'tailwind-merge'
import Button from '../buttons/button'
import { type CreationType } from '@/services/types'
import LinkImage from './link-image'
import { Link } from '@/utils/navigation'
import { getTranslations } from 'next-intl/server'
interface Props extends GalleryProps, NavItemConfig {
  className?: string
  type: CreationType
  totalCount: number
}

const SlideGallery = async ({ images, route, type, className }: Props) => {
  const t = await getTranslations('creations')
  const title = t(`${type}.title`)
  return (
    <div className={twMerge('flex flex-col gap-3 p-3 md:container', className)}>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl capitalize md:text-5xl">{title}</h2>
        <Button className="px-2">
          <Link href={route}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </Button>
      </div>
      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden md:w-auto md:flex-row md:justify-center"
        draggable={false}
      >
        {images.map((image, index) => (
          <div key={index} className="w-56 flex-none md:w-1/4">
            <LinkImage image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideGallery
