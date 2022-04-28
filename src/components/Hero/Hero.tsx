import * as S from './Hero.styles'

export interface HeroProps {}

const Hero = ({}: HeroProps) => (
  <S.HeroWrapper>
    <S.ContentWrapper>
      <S.Content>Hero</S.Content>
    </S.ContentWrapper>
    <S.GrainyBackground />
  </S.HeroWrapper>
)

export default Hero
