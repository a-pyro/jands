'use client'
import React, { useRef, useState } from 'react'
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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.pageX - (sliderRef.current?.offsetLeft ?? 0))
    setStartY(e.pageY)
    setScrollLeft(sliderRef.current?.scrollLeft ?? 0)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (sliderRef.current?.offsetLeft ?? 0)
    const y = e.pageY

    // Calcola la differenza tra la posizione Y iniziale e la posizione Y attuale
    const diffY = Math.abs(y - startY)

    // Se la differenza è maggiore di un certo valore, l'utente sta probabilmente cercando di scorrere la pagina, quindi interrompi l'esecuzione della funzione
    if (diffY > 10) {
      return
    }

    const walk = (x - startX) * 3 // scroll-fast
    sliderRef.current!.scrollLeft = scrollLeft - walk
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <div className={twMerge('flex flex-col pl-3', className)}>
      <div className="flex items-center justify-between">
        <h2 className="mb-6 text-4xl font-bold">{title}</h2>
        <button className="border-2 border-dark px-6 py-1.5 text-xl font-bold  hover:bg-dark hover:text-logo">
          <Link href={route}>Tutte</Link>
        </button>
      </div>
      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden"
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
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
