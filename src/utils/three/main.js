import * as THREE from 'three'

const geometries = {
  box: new THREE.BoxBufferGeometry(1.5, 1.5, 1.5),
  sphere: new THREE.SphereBufferGeometry(),
}

const material = new THREE.MeshStandardMaterial({
  color: 0x916949,
})

const lights = {
  ambient: new THREE.AmbientLight(0x916949, 1),
  point: new THREE.PointLight(0x333333, 2),
}

const elements = {
  square: new THREE.Mesh(geometries.box, material),
  sphere: new THREE.Mesh(geometries.sphere, material),
}

export const mountScene = (currentRef, renderer, scene) => {
  const { clientWidth: width, clientHeight: height } = currentRef
  const { domElement } = renderer

  renderer.setSize(width, height)
  currentRef.appendChild(domElement)

  const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000)

  scene.add(camera)
  scene.add(elements.square)
  scene.add(lights.ambient)
  scene.add(lights.point)

  lights.point.position.set(-50, -50, 50)
  camera.position.set(5, 0, 12)

  camera.lookAt(elements.square.position)

  const clock = new THREE.Clock()

  const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    elements.square.rotation.x = elapsedTime
    elements.square.rotation.y = elapsedTime
    elements.square.position.y = Math.sin(elapsedTime)

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
}

export const unmountScene = (currentRef, renderer, scene) => {
  scene.dispose()

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
