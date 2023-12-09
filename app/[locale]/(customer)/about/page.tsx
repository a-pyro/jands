/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  const introduction = t('introduction')
  const unique_creations = t('unique_creations')
  const variety = t('variety')
  const founders = t('founders')
  const friendship = t('friendship')

  return (
    <div>
      <div className="flex">
        <p className="mb-4 text-xl md:text-2xl lg:text-3xl">{introduction}</p>
        <div className="overflow-hidden">
          <img
            src="/about/work-outside.jpg"
            alt="Work Outside"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex">
        <p className="mb-4 text-xl md:text-2xl lg:text-3xl">
          {unique_creations}
        </p>
        <div className="overflow-hidden">
          <img
            src="/about/work-table.jpg"
            alt="Work Table"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="flex">
        <p className="mb-4 text-xl md:text-2xl lg:text-3xl">{variety}</p>
        <div className="overflow-hidden">
          <img
            src="/about/vetrina.jpg"
            alt="Vetrina"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex">
        <p className="mb-4 text-xl md:text-2xl lg:text-3xl">{founders}</p>
        <div className="overflow-hidden">
          <img
            src="/about/vetrina-smile.jpg"
            alt="Vetrina Smile"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex">
        <p className="mb-4 text-xl md:text-2xl lg:text-3xl">{friendship}</p>
        <div className="overflow-hidden">
          <img
            src="/about/hug-smile.jpg"
            alt="Hug Smile"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  )
}
