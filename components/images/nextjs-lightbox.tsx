import Lightbox, { type LightboxExternalProps } from 'yet-another-react-lightbox'
import NextJsImage from './nextjs-image'

export const NextjsLightbox = (props: LightboxExternalProps) => {
  return <Lightbox render={{ slide: NextJsImage }} {...props} />
}
