import { CloseCircleOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    skug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`Skateboard Spot - ${place.name}`}
        description={
          place.description?.text ||
          'A simple project to show my favorite spots in the world.'
        }
        canonical="https://guisalmeida.com"
        openGraph={{
          url: 'https://guisalmeida.com',
          title: `Skateboard Spot - ${place.name}`,
          description:
            place.description?.text ||
            'A simple project to show my favorite spots in the world.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseCircleOutline size={32} aria-label="Go back to map." />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={1000}
                objectFit="cover"
                objectPosition="center bottom"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
