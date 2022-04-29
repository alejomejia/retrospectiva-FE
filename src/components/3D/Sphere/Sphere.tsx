import { useRef, useEffect } from 'react'
import * as THREE from 'three'

import * as S from './Sphere.styles'

export interface SphereProps {}

const Sphere = ({}: SphereProps) => {
  const ref = useRef<any>(null)

  useEffect(() => {
    const currentRef = ref.current
    const { clientWidth: width, clientHeight: height } = currentRef

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    currentRef.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)
    scene.add(camera)

    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableDamping = true

    // const geometry = new THREE.BoxBufferGeometry()
    const geometry = new THREE.BoxBufferGeometry(1.5, 1.5, 1.5)
    const material = new THREE.MeshStandardMaterial({
      color: 0x916949,
    })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const ambientLight = new THREE.AmbientLight(0x916949, 1)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0x333333, 2)
    pointLight.position.set(-50, -50, 50)
    scene.add(pointLight)

    camera.position.set(5, 0, 12)
    camera.lookAt(cube.position)

    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      cube.rotation.x = elapsedTime
      cube.rotation.y = elapsedTime
      cube.position.y = Math.sin(elapsedTime)

      // controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const updateWidth = currentRef.clientWidth
      const updateHeight = currentRef.clientHeight

      renderer.setSize(updateWidth, updateHeight)
      camera.aspect = updateWidth / updateHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      currentRef.removeChild(renderer.domElement)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <S.SphereWrapper>
      <S.Canvas ref={ref} />
    </S.SphereWrapper>
  )
}

export default Sphere
