import * as THREE from 'three'

import {
  ThreeGeometries,
  ThreeMaterial,
  ThreeLights,
  ThreeElements,
  ThreeMountSceneParams,
  ThreeUnmountSceneParams,
  ThreeAnimations,
} from 'utils/types/three'

const geometries: ThreeGeometries = {
  box: new THREE.BoxBufferGeometry(1, 1, 1),
  sphere: new THREE.SphereBufferGeometry(1, 64, 32),
}

const material: ThreeMaterial = new THREE.MeshStandardMaterial({
  color: 0x916949,
})

const lights: ThreeLights = {
  ambient: new THREE.AmbientLight(0x916949, 1),
  point: new THREE.PointLight(0x333333, 2),
}

const elements: ThreeElements = {
  square: new THREE.Mesh(geometries.box, material),
  sphere: new THREE.Mesh(geometries.sphere, material),
}

export const mountScene = ({
  currentRef,
  renderer,
  scene,
  camera,
  element,
  animation,
}: ThreeMountSceneParams) => {
  const { clientWidth: width, clientHeight: height } = currentRef
  const { domElement } = renderer

  renderer.setSize(width, height)
  currentRef.appendChild(domElement)

  scene.add(camera)
  scene.add(elements[element])
  scene.add(lights.ambient)
  scene.add(lights.point)

  lights.point.position.set(150, 150, 50)
  camera.position.set(5, 0, 10)

  camera.lookAt(elements[element].position)

  const clock = new THREE.Clock()

  const animations: ThreeAnimations = {
    idle: () => {
      renderer.render(scene, camera)
    },
    centerInfiniteRotation: () => {
      const elapsedTime = clock.getElapsedTime()

      elements[element].rotation.set(elapsedTime, elapsedTime, 0)

      renderer.render(scene, camera)
      requestAnimationFrame(animations.centerInfiniteRotation)
    },
    yAxisInfiniteMovement: () => {
      const elapsedTime = clock.getElapsedTime()

      elements[element].rotation.set(elapsedTime * 0.25, elapsedTime * 0.25, 0)
      elements[element].position.y = Math.sin(elapsedTime * 0.25)

      renderer.render(scene, camera)
      requestAnimationFrame(animations.yAxisInfiniteMovement)
    },
  }

  animation ? animations[animation]() : animations.idle()

  const handleResize = () => {
    const updateWidth = currentRef.clientWidth
    const updateHeight = currentRef.clientHeight

    renderer.setSize(updateWidth, updateHeight)
    camera.aspect = updateWidth / updateHeight
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', handleResize)
}

export const unmountScene = ({
  currentRef,
  renderer,
  camera,
}: ThreeUnmountSceneParams) => {
  const handleResize = () => {
    const updateWidth = currentRef.clientWidth
    const updateHeight = currentRef.clientHeight

    renderer.setSize(updateWidth, updateHeight)
    camera.aspect = updateWidth / updateHeight
    camera.updateProjectionMatrix()
  }

  currentRef.removeChild(renderer.domElement)
  window.removeEventListener('resize', handleResize)
}
