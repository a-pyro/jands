import { useTranslations } from 'next-intl';

const TextParagraph = ({ children }: { children: string }) => (
  <p className="mb-4 text-xl md:mb-0  md:w-1/2 md:text-2xl lg:text-3xl">
    {children}
  </p>
);

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full overflow-hidden  md:w-1/2">
    {/* eslint-disable-next-line @next/next/no-img-element -- dont need next image */}
    <img
      alt={alt}
      className="h-auto w-full transition-transform duration-300 ease-in-out hover:scale-110"
      src={src}
    />
  </div>
);

const BlockWrapper = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  const baseClasses = 'flex flex-col items-center gap-6 md:gap-8';
  const flexOrder = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  return <div className={`${baseClasses} ${flexOrder} w-full`}>{children}</div>;
};

const AboutPage = () => {
  const t = useTranslations('about');
  const introduction = t('introduction');
  const uniqueCreations = t('unique_creations');
  const variety = t('variety');
  const founders = t('founders');
  const friendship = t('friendship');
  const title = t('title');

  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <BlockWrapper>
        <TextParagraph>{introduction}</TextParagraph>
        <Image alt="Work Outside" src="/about/work-outside.jpg" />
      </BlockWrapper>

      <BlockWrapper reverse>
        <TextParagraph>{uniqueCreations}</TextParagraph>
        <Image alt="Work Table" src="/about/work-table.jpg" />
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{variety}</TextParagraph>
        <Image alt="Vetrina" src="/about/vetrina.jpg" />
      </BlockWrapper>

      <BlockWrapper reverse>
        <TextParagraph>{founders}</TextParagraph>
        <Image alt="Vetrina Smile" src="/about/vetrina-smile.jpg" />
      </BlockWrapper>

      <BlockWrapper>
        <TextParagraph>{friendship}</TextParagraph>
        <Image alt="Hug Smile" src="/about/hug-smile.jpg" />
      </BlockWrapper>
    </div>
  );
};

export default AboutPage;
