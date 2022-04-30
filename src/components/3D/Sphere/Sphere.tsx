import { useRef, useEffect } from 'react'
import * as THREE from 'three'

import { mountScene, unmountScene } from 'utils/three/main'

import * as S from './Sphere.styles'

export interface SphereProps {}

const Sphere = ({}: SphereProps) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const currentRef = ref.current
    const { clientWidth: width, clientHeight: height } = currentRef

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)

    mountScene({ currentRef, renderer, scene, camera })

    return () => {
      unmountScene({ currentRef, renderer, camera })
    }
  }, [])

  return (
    <S.SphereWrapper>
      <S.Canvas ref={ref} />
    </S.SphereWrapper>
  )
}

export default Sphere
