import styled from 'styled-components'

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.siam[400]};
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  height: 100vh;
  padding-top: ${({ theme }) => theme.sizes.navbarMobileHeight}px;
`

export const NoiseWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`

export const Content = styled.div`
  min-height: 100%;
  padding: 24px 10px;
`

export const NoiseBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: color-burn;
  opacity: 0.75;
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='franctalNoise' baseFrequency='1.5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E");
`
