import styled from 'styled-components'

export const HeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.siam[400]};
`

export const GrainyBackground = styled.div`
  position: absolute;
  inset: 0;
  mix-blend-mode: color-burn;
  opacity: 0.75;
  background-image: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='franctalNoise' baseFrequency='1.5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E");
`
