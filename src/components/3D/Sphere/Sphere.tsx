import { useRef, useEffect } from 'react'
import * as THREE from 'three'

import { mountScene, unmountScene } from 'utils/three/main'

import * as S from './Sphere.styles'

export interface SphereProps {}

const Sphere = ({}: SphereProps) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const currentRef = ref.current
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const scene = new THREE.Scene()

    mountScene(currentRef, renderer, scene)

    return () => {
      unmountScene(currentRef, renderer, scene)
    }
  }, [])

  return (
    <S.SphereWrapper>
      <S.Canvas ref={ref} />
    </S.SphereWrapper>
  )
}

export default Sphere
