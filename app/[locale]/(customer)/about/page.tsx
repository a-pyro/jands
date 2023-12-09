/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

const TextParagraph = ({ children }: { children: string }) => (
  <p className="text-xl md:w-1/2 md:text-2xl lg:text-3xl">{children}</p>
)

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden md:w-1/2">
    <img
      src={src}
      alt={alt}
      className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
)

const BlockWrapper = ({
  children,
  className,
  reverse,
}: {
  children: React.ReactNode
  className?: ClassNameValue
  reverse?: boolean
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-between gap-2 md:flex-row md:space-x-6',
        className,
        reverse && 'md:flex-row-reverse ',
      )}
    >
      {children}
    </div>
  )
}

export default function About() {
  const t = useTranslations('about')
  const introduction = t('introduction')
  const unique_creations = t('unique_creations')
  const variety = t('variety')
  const founders = t('founders')
  const friendship = t('friendship')

  return (
    <div className="flex flex-col gap-6">
      <BlockWrapper>
        <TextParagraph>{introduction}</TextParagraph>
        <Image src="/about/work-outside.jpg" alt="Work Outside" />
      </BlockWrapper>

      <BlockWrapper reverse>
        <TextParagraph>{unique_creations}</TextParagraph>
        <Image src="/about/work-table.jpg" alt="Work Table" />
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{variety}</TextParagraph>
        <Image src="/about/vetrina.jpg" alt="Vetrina" />
      </BlockWrapper>

      <BlockWrapper reverse>
        <TextParagraph>{founders}</TextParagraph>
        <Image src="/about/vetrina-smile.jpg" alt="Vetrina Smile" />
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{friendship}</TextParagraph>
        <Image src="/about/hug-smile.jpg" alt="Hug Smile" />
      </BlockWrapper>
    </div>
  )
}
