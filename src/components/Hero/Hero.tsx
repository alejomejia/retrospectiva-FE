import * as S from './Hero.styles'

export interface HeroProps {}

const Hero = ({}: HeroProps) => (
  <S.HeroWrapper>
    Hero
    <S.GrainyBackground />
  </S.HeroWrapper>
)

export default Hero
