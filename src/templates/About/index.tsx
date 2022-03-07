import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircleOutline size={32} />
    </LinkWrapper>

    <S.Heading>Skateboard spots</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, quis
        illo et repellat similique amet dignissimos corporis voluptate
        necessitatibus optio consequatur vero blanditiis sunt quibusdam
        deleniti! Debitis ullam necessitatibus ratione?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
