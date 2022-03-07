import Link from 'next/link'
import * as S from './styles'

type LinkwrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkwrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)
export default LinkWrapper
