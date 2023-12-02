'use client'
import React, { useRef, useState } from 'react'
import { type GalleryProps } from './gallery'
import { type NavItemConfig } from '../nav/nav'
import BlurImage from './blur-image'

interface Props extends GalleryProps, NavItemConfig {
  className?: string
  title?: string
}

const SlideGallery = ({ images, name, route, title, className }: Props) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft ?? 0))
    setScrollLeft(sliderRef.current?.scrollLeft ?? 0)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft ?? 0)
    const walk = (x - startX) * 3 // scroll-fast
    sliderRef.current!.scrollLeft = scrollLeft - walk
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="flex gap-3 overflow-x-auto"
      ref={sliderRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {images.map((image, index) => (
        <div key={index} className="w-56 flex-none">
          <img
            src={image.secure_url}
            alt={image.public_id}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default SlideGallery
