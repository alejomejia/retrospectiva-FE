import Logo from 'components/Logo/Logo'
import Sphere from 'components/3D/Sphere/Sphere'

import * as S from './Hero.styles'

export interface HeroProps {}

const Hero = ({}: HeroProps) => (
  <S.HeroWrapper>
    <S.ContentWrapper>
      <S.Content>
        <Logo type="fill" />
      </S.Content>
    </S.ContentWrapper>
    <S.BackgroundWrapper>
      <S.NoiseBackground />
      <Sphere />
    </S.BackgroundWrapper>
  </S.HeroWrapper>
)

export default Hero
