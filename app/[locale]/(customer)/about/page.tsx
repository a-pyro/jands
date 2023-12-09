/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'

const TextParagraph = ({ children }: { children: string }) => (
  <p className="mb-4 text-xl md:w-1/2 md:text-2xl lg:text-3xl">{children}</p>
)

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden md:w-1/2">
    <img
      src={src}
      alt={alt}
      className="transition-transform duration-300 ease-in-out hover:scale-105"
    />
  </div>
)

const BlockWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 flex flex-col items-center md:flex-row md:space-x-6">
    {children}
  </div>
)

export default function About() {
  const t = useTranslations('about')
  const introduction = t('introduction')
  const unique_creations = t('unique_creations')
  const variety = t('variety')
  const founders = t('founders')
  const friendship = t('friendship')

  return (
    <div className="container mx-auto p-6">
      <BlockWrapper>
        <TextParagraph>{introduction}</TextParagraph>
        <Image src="/about/work-outside.jpg" alt="Work Outside" />
      </BlockWrapper>

      <BlockWrapper>
        <Image src="/about/work-table.jpg" alt="Work Table" />
        <TextParagraph>{unique_creations}</TextParagraph>
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{variety}</TextParagraph>
        <Image src="/about/vetrina.jpg" alt="Vetrina" />
      </BlockWrapper>

      <BlockWrapper>
        <Image src="/about/vetrina-smile.jpg" alt="Vetrina Smile" />
        <TextParagraph>{founders}</TextParagraph>
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{friendship}</TextParagraph>
        <Image src="/about/hug-smile.jpg" alt="Hug Smile" />
      </BlockWrapper>
    </div>
  )
}
