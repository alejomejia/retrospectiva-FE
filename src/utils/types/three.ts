export interface ThreeGeometries {
  box: THREE.BoxGeometry
  sphere: THREE.SphereGeometry
}

export type ThreeMaterial = THREE.MeshStandardMaterial

export interface ThreeLights {
  ambient: THREE.AmbientLight
  point: THREE.PointLight
}

export interface ThreeElements {
  square: THREE.Mesh
  sphere: THREE.Mesh
}

export interface ThreeAnimations {
  idle: () => void
  centerInfiniteRotation: () => void
  yAxisInfiniteMovement: () => void
}

export interface ThreeMountSceneParams {
  currentRef: HTMLElement
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  element: keyof ThreeElements
  animation?: keyof ThreeAnimations
}

export interface ThreeUnmountSceneParams {
  currentRef: HTMLElement
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
}
