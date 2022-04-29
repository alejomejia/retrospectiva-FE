import Sphere from 'components/3D/Sphere/Sphere'

import * as S from './Hero.styles'

export interface HeroProps {}

const Hero = ({}: HeroProps) => (
  <S.HeroWrapper>
    <S.ContentWrapper>
      <S.Content>Hero</S.Content>
    </S.ContentWrapper>
    <S.NoiseWrapper>
      <S.NoiseBackground />
      <Sphere />
    </S.NoiseWrapper>
  </S.HeroWrapper>
)

export default Hero
