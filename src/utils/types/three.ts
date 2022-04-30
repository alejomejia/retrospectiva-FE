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

export interface ThreeMountSceneParams {
  currentRef: HTMLElement
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
}

export interface ThreeUnmountSceneParams {
  currentRef: HTMLElement
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
}
