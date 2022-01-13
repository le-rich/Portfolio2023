import * as THREE from 'https://cdn.skypack.dev/-/three-full@v28.0.2-vXctAfDjnTFinuDDLbIh/dist=es2019,mode=imports/optimized/three-full.js'
import { OBJLoader } from 'https://cdn.skypack.dev/-/three-full@v28.0.2-vXctAfDjnTFinuDDLbIh/dist=es2019,mode=imports/optimized/three-full.js'
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
/**
 * Loaders
 */
const loader = new OBJLoader();
let daggerGroup = new THREE.Group()
let daggerMesh = null;
loader.load(
    '../assets/3d/dagger.obj',
    function (object){
        object.rotation.x = Math.PI / 2
        object.children[0].scale.set(12,12,12)
        object.position.set(2.5,0, -0.5)
        daggerMesh = object.children[0];
        daggerGroup = object
        scene.add(object);
    },
    // called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
)

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//scene.add(mesh)

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
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0xf9f6ee, 1)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)
    daggerGroup.rotation.z = elapsedTime;
    daggerGroup.position.y = (Math.sin(elapsedTime) / 4) + 0.45



    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()