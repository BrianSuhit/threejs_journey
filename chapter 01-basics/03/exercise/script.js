import * as THREE from 'three'
import { cameraFar } from 'three/tsl'

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: "#38b764"})
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

// Camera´s Config
const sizes = {width: 800, height: 600}

// Camera
const mainCamera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
mainCamera.position.z = 3
mainCamera.position.x = 1
mainCamera.position.y = 1
scene.add(mainCamera)

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, mainCamera)