import * as THREE from 'https://cdn.skypack.dev/-/three-full@v28.0.2-vXctAfDjnTFinuDDLbIh/dist=es2019,mode=imports/optimized/three-full.js'
import { OBJLoader, TextureLoader } from 'https://cdn.skypack.dev/-/three-full@v28.0.2-vXctAfDjnTFinuDDLbIh/dist=es2019,mode=imports/optimized/three-full.js'

import luxefragment from '../assets/shader/luxefragment.glsl.js'
import cleanfragment from '../assets/shader/cleanfragment.glsl.js'
import cleanvertex from '../assets/shader/cleanvertex.glsl.js'
import cyberfragment from '../assets/shader/cyberfragment.glsl.js'
import cybervertex from '../assets/shader/cybervertex.glsl.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')
const textureLoader = new THREE.TextureLoader();

// Scene
const scene = new THREE.Scene()
/**
 * Loading Screen, Loaders and Load Management
 */
let daggerGroup = null;
let daggerMesh = null;
let assetsLoaded = 0;

document.addEventListener('DOMContentLoaded', () => {
    let totalAssets = 0;

    const updateLoadingProgress = () => {
        assetsLoaded++;

        if (assetsLoaded === totalAssets) {
            $("#loading-text").fadeOut();
            $("#loading-bar").fadeOut();
            setTimeout(slideOutLoader, 1000);
        }
    };

    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {
        totalAssets += itemsTotal;
    };
    manager.onProgress = function (url, itemsLoaded, itemsTotal) {

    };
    manager.onLoad = function () {
        updateLoadingProgress();
    };

    const loader = new OBJLoader(manager);
    loader.load(
        '../assets/3d/daggerhighres-seamless.obj',
        function (object){
            object.rotation.x = Math.PI / 2;
            object.children[0].scale.set(12,12,12);
            object.position.set(0,0, -0.5);

            daggerMesh = object.children[0];
            daggerMesh.material = CleanCutMat;
            daggerGroup = object;
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            const percentage = Math.round((xhr.loaded / xhr.total) * 100);
            document.getElementById('loading-percentage').textContent = `${percentage}%`;
            document.getElementById('loading-bar-fill').style.width = `${percentage}%`;
        },
        function (error) {
            console.log('Error Loading Dagger Mesh Occurred');
        }
    );
});

function slideOutLoader() {
    document.getElementById('loading-screen').classList.add('slide-out-top');
}

// Materials for switching
const CleanCutMat = new THREE.ShaderMaterial({
    vertexShader : cleanvertex,
    fragmentShader: cleanfragment,
    uniforms:
    {
        uFrequency: { value: new THREE.Vector2(15, 15) },
        uTime: { value: 0 }
    }
});

const CyberWarfareMat = new THREE.ShaderMaterial({
    vertexShader: cybervertex,
    fragmentShader: cyberfragment,
    wireframe: true,
});

const luxematcap = textureLoader.load('../assets/img/matcap-128px.png')
const LuxeMat = new THREE.MeshMatcapMaterial();
LuxeMat.matcap = luxematcap;


export function ActivateMeshCyberWarfare() {
    daggerMesh.material = CyberWarfareMat;
    daggerMesh.material.needsUpdate = true;
}

export function ActivateMeshCleanCut(){
    daggerMesh.material = CleanCutMat;
    daggerMesh.material.needsUpdate = true;
}

export function ActivateMeshLuxe(){
    daggerMesh.material = LuxeMat;
    daggerMesh.material.needsUpdate = true;
}




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
    // daggerGroup.position.x = 0 + (camera.aspect * 1.25)
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
//renderer.setClearColor(0xf9f6ee, 1)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)
    if (daggerGroup != null){
        daggerGroup.rotation.z = elapsedTime;
        daggerGroup.position.y = (Math.sin(elapsedTime) / 4) + 0.45
    }

    // Update material
    CleanCutMat.uniforms.uTime.value = elapsedTime

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()