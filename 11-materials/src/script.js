import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RGBELoader } from 'three/examples/jsm/Addons.js' 

const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures -----------------------------------------------------------------------
const textureLoader = new THREE.TextureLoader()
const doorColor = textureLoader.load('./textures/door/color.jpg')
const doorAlpha = textureLoader.load('./textures/door/alpha.jpg')
const doorAO = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorMetal = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughness = textureLoader.load('./textures/door/roughness.jpg')
const matcap = textureLoader.load('./textures/matcaps/1.png')
const gradient = textureLoader.load('./textures/gradients/3.jpg')

doorColor.colorSpace = THREE.SRGBColorSpace
matcap.colorSpace = THREE.SRGBColorSpace
// Textures ------------------------------------------------------------------------

// Objects ---------------------------------------------------------
const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.side = THREE.DoubleSide

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)


const sphere = new THREE.Mesh
(
    new THREE.SphereGeometry(0.5, 16, 16), material
)
sphere.position.x = -1.5

const plane = new THREE.Mesh
(
    new THREE.PlaneGeometry(1, 1), material
)

const torus = new THREE.Mesh
(
    new THREE.TorusGeometry(0.3, 0.2, 16, 33), material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)
// Objects -------------------------------------------------------------

// Lights
// const ambientLight = new THREE.AmbientLight('white', 1)
// const pointLight = new THREE.PointLight('white', 30)
// pointLight.position.x =2
// pointLight.position.y =3
// pointLight.position.z =4
// scene.add(pointLight)
// scene.add(ambientLight)

const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) =>
{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.background = environmentMap
    scene.environment = environmentMap
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = -0.15 * elapsedTime
    plane.rotation.x= 0.15 * elapsedTime
    torus.rotation.x= -0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()