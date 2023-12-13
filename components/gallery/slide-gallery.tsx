import { getTranslations } from 'next-intl/server';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { type CreationType } from '@/services/types';
import { Link } from '@/utils/navigation';

import { Button } from '../buttons/button';
import { type NavItemConfig } from '../nav/nav';

import { type GalleryProps } from './grid-gallery';
import { LinkImage } from './link-image';

type Props = {
  className?: string;
  type: CreationType;
  totalCount: number;
} & GalleryProps &
  NavItemConfig;

export const SlideGallery = async ({
  images,
  route,
  type,
  className,
}: Props) => {
  const t = await getTranslations('creations');
  const title = t(`${type}.title`);
  return (
    <div className={twMerge('flex flex-col gap-3 p-3 md:container', className)}>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-3xl capitalize md:text-5xl">{title}</h2>
        <Button className="px-2">
          <Link href={route}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Button>
      </div>
      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden md:w-auto md:flex-row md:justify-center"
        draggable={false}
      >
        {images.map((image) => (
          <div className="w-56 flex-none md:w-1/4" key={image.public_id}>
            <LinkImage image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};
