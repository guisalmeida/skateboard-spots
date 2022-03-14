import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Skateboard Spots"
        description="A simple project to show my favorite spots in the world."
        canonical="https://guisalmeida.com"
        openGraph={{
          url: 'https://guisalmeida.com',
          title: 'Skateboard Spots',
          description:
            'A simple project to show my favorite spots in the world.',
          images: [
            {
              url: 'https://guisalmeida.com/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Skateboard Spots'
            }
          ],
          site_name: 'Skateboard Spots'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
