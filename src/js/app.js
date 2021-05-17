import Config from './data/config';
import Detector from './utils/detector';
import Main from './app/main';
import * as THREE from 'three'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

import gsap from 'gsap'

// Styles
import './../css/app.scss';
import { GLTFLoader } from './app/loaders/GLTFLoader';

// Check environment and set the Config helper
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! -----');

  Config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {
    // Old
    // const container = document.getElementById('webgl');
    // new Main(container);

    // Debug
    const gui = new dat.GUI()

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    // Loaders
    
    const loadingManager = new THREE.LoadingManager(
      // Loaded
      () =>
      {
        window.setTimeout(() =>
        {
          const loadingBarElement = document.querySelector('.loading-bar')
            gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0, delay: 1 })
            loadingBarElement.classList.add('ended')
            loadingBarElement.style.transform = ''
            let htmlContainer = document.getElementById("htmlContainer");
            htmlContainer.classList.remove("hidden");
        }, 500)

          const textrev = gsap.timeline();
          textrev.from(".reveal-line *", 1.8, {
            y: 300,
            ease: "power4.out",
            delay: 1,
            skewY: 10,
            stagger: {
              amount: 0.2
            }
          })

          textrev.eventCallback("onComplete", () =>{
            document.querySelectorAll('.reveal-line').forEach(element => {
                element.classList.remove('reveal-line')
            });
          });
      },
  
      // Progress
      (itemUrl, itemsLoaded, itemsTotal) =>
      {
        const loadingBarElement = document.querySelector('.loading-bar')
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
      }
    )
    const gltfLoader = new GLTFLoader(loadingManager)



    /**
     * Models
     */


    const skullGroup = new THREE.Group()
    let skullModel = null;
    gltfLoader.load(
      '/assets/models/skull.glb',
      (gltf) =>
      {
        console.log(gltf)
        gltf.scene.traverse((node) => {
          if (!node.isMesh) return;
        })
        gltf.scene.position.y = 0.25
        gltf.scene.scale.set(0.002,0.002,0.002)
        //gltf.scene.rotation.y = Math.PI / 3.5;
        gltf.scene.rotation.x = Math.PI / 7;
        //gltf.scene.rotation.z = Math.PI / 15;
        skullGroup.add(gltf.scene)
        skullModel = gltf.scene

        scene.add(gltf.scene)


        const pointLight = new THREE.PointLight( 0xf104a5, 3, 100 );
        pointLight.position.set( 0, -5, 10 );
        if (skullGroup != null){
          pointLight.lookAt(skullGroup.position)
        }
        scene.add( pointLight );
      }
    )

    const light = new THREE.AmbientLight( 0x404040  ); // soft white light
    scene.add( light );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 ); 
    scene.add( directionalLight );

    // const axesHelper = new THREE.AxesHelper( 5 );
    // scene.add( axesHelper );

    /**
     * Overlay
     */
    const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
    const overlayMaterial = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: `
          void main()
          {
              gl_Position = vec4(position, 1.0);
          }
      `,
      uniforms:
      {
          uAlpha: { value: 1 }
      },
      fragmentShader: `
      uniform float uAlpha;
      void main()
      {
          gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
      }`
  })
    const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
    scene.add(overlay)




    /**
     * Objects
     */
    // const wireframePlane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(1, 1, 20, 20),
    //   new THREE.MeshBasicMaterial({
    //     wireframe: true,
    //     color: '#a2f609',
    //   })
    // )

    // const gridHelper = new THREE.GridHelper( 11, 10,  "#f104a5", "#f104a5");
    // gridHelper.material.opacity = 0.1;
    // gridHelper.position.z = -5;
    // gridHelper.rotation.x = Math.PI / 2;
    // scene.add( gridHelper );


    // const object1 = new THREE.Mesh(
    //   new THREE.SphereGeometry(0.5, 16, 16),
    //   new THREE.MeshBasicMaterial({
    //     color: '#a2f609'
    //   })
    // )
    // object1.position.x = -2

    // const object2 = new THREE.Mesh(
    //   new THREE.SphereGeometry(0.5, 16, 16),
    //   new THREE.MeshBasicMaterial({
    //     color: '#a2f609'
    //   })
    // )

    // const object3 = new THREE.Mesh(
    //   new THREE.SphereGeometry(0.5, 16, 16),
    //   new THREE.MeshBasicMaterial({
    //     color: '#a2f609'
    //   })
    // )
    // object3.position.x = 2

    //scene.add(object1, object2, object3)

    /**
     * Raycaster
     */
    const raycaster = new THREE.Raycaster()
    let currentIntersect = null
    const rayOrigin = new THREE.Vector3(-3, 0, 0)
    const rayDirection = new THREE.Vector3(10, 0, 0)
    rayDirection.normalize()

    // raycaster.set(rayOrigin, rayDirection)
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,

      move = 25,
      xMove = x / width * (move * 2) - move,
      yMove = y / height * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave'){
        span.style.transform = '';
        shrinkCursor();
      }  else {
        expandCursor();
      }
      
    };

    const shrinkCursor = function(){
      cursor.classList.remove('cursor-expand');
    }
    const expandCursor = function(){
        cursor.classList.add('cursor-expand');
    }

    const editCursor = e => {
      const {
        clientX: x,
        clientY: y
      } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    window.addEventListener('resize', () => {
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
     * Mouse
     */
    const mouse = new THREE.Vector2()

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX / sizes.width * 2 - 1
      mouse.y = -(event.clientY / sizes.height) * 2 + 1
    })

    window.addEventListener('click', () => {
      if (currentIntersect) {
        switch (currentIntersect.object) {
          case object1:
            console.log('click on object 1')
            break

          case object2:
            console.log('click on object 2')
            break

          case object3:
            console.log('click on object 3')
            break
        }
      }
    })

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.z = 3
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
    renderer.setClearColor(0x070b0a, 1)

    /**
     * Animate
     */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Animate objects
      if (skullModel != null)
        skullModel.position.y = Math.sin(elapsedTime * 0.3) * 0.15
      // object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5
      // object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5

      // Cast a ray from the mouse and handle events
      raycaster.setFromCamera(mouse, camera)

      // const objectsToTest = [object1, object2, object3]
      // const intersects = raycaster.intersectObjects(objectsToTest)

      // if (intersects.length) {
      //   if (!currentIntersect) {
      //     console.log('mouse enter')
      //   }

      //   currentIntersect = intersects[0]
      // } else {
      //   if (currentIntersect) {
      //     console.log('mouse leave')
      //   }

      //   currentIntersect = null
      // }

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }
}

init();