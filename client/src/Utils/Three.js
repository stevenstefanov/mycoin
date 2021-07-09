import * as THREE from 'three'
import React, {Component} from 'react'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import coinSnip from './images/coinsnip.PNG'
import background from './images/blackgradient.jpg'
import LandingPage from '../components/LandingPage'
import Text from './images/Drawing.sketchpad.jpeg'

class Three extends Component {

    componentDidMount = () => {
    
        const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                    const axis = new THREE.Vector3(0.55,0.55,0.55);

                    const pivot = new THREE.Object3D();
                    
                    const renderer = new THREE.WebGLRenderer();

                    const canvas = document.querySelector('canvas.webgl')

                    // const canvas = renderer.domElement;
                    // const width = canvas.clientWidth;
                    // const height = canvas.clientHeight

                    renderer.setSize( window.innerWidth, window.innerHeight );
                    renderer.setClearColor("#000000")
                    // document.body.appendChild( renderer.domElement );
                    // const orbitControls = new OrbitControls(camera, renderer.domElement)
                    this.mount.appendChild(renderer.domElement);

                    window.addEventListener('resize', () => {
                        renderer.setSize( window.innerWidth, window.innerHeight );
                        camera.aspect = window.innerWidth/window.innerHeight
                        camera.updateProjectionMatrix();
                    })
                   
                    // const ambientLight = new THREE.AmbientLight(0xffffff, 0);
                    const spotLight = new THREE.SpotLight(0xffffff, 1.7)
                    // const pointLight = new THREE.PointLight(0xffffff, 0)

                    // const helper = new THREE.SpotLightHelper(spotLight)
                    
                    // ambientLight.position.set(35, 0, 0)

                    spotLight.position.set( 40 ,50, 100)
                    spotLight.rotation.x = Math.PI / 2
                
                    // const loader = new THREE.FontLoader();
                        
                    //     loader.load( '/EncodeSansSCCondesedr.json', function ( font ) {  
                    //     const letter = new THREE.TextGeometry('$', {
                    //         font: font,
                    //         size: 80,
                    //         height: 5,
                    //         curveSegments: 12,
                    //         bevelEnabled: true,
                    //         bevelThickness: 10,
                    //         bevelSize: 8,
                    //         bevelOffset: 0,
                    //         bevelSegments: 5
                    //     } );

                    //     const letterMats = new THREE.MeshBasicMaterial({color: 0xffffff})
                    //     const finishedLetter = new THREE.Mesh(letter, letterMats)
                    //     scene.add(finishedLetter)

                    // });

                    const texture = new THREE.TextureLoader().load(coinSnip)
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set(1, 1)  

                    const backgroundTexture = new THREE.TextureLoader().load(background);
                    scene.background = backgroundTexture

                    const addStar = () => {
                        const starGeo = new THREE.SphereGeometry(0.4);
                        const starMats = new THREE.MeshStandardMaterial( {color: 'aqua'} )
                        const star1 = new THREE.Mesh(starGeo, starMats)
                        const star2 = new THREE.Mesh(starGeo, starMats)
                        const star3 = new THREE.Mesh(starGeo, starMats)
                        const star4 = new THREE.Mesh(starGeo, starMats)

                        const [x, y] = Array(2).fill().map( () => THREE.MathUtils.randFloatSpread(2000))
                        const [x1, y1 ] = Array(2).fill().map( () => THREE.MathUtils.randFloatSpread(1000))
                        const [x2, y2 ] = Array(2).fill().map( () => THREE.MathUtils.randFloatSpread(500))
                        const [x3, y3 , z3] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(1000))

                        const points = [];

                        points.push(new THREE.Vector3(x , y , -100))
                        points.push(new THREE.Vector3(x1 , y1 , -100))
                        points.push(new THREE.Vector3(x2 , y2 , -100))
                        points.push(new THREE.Vector3(x3 , y3 , z3))

                        const laserMats = new THREE.LineBasicMaterial({ color: 0x027A92 })
                        const laserGeo = new THREE.BufferGeometry().setFromPoints( points )
                        const laser = new THREE.Line(laserGeo, laserMats)

                        star1.position.set(x, y, -1000)
                        star2.position.set(x1, y1 , -1000)
                        star3.position.set(x2, y2 , -1000)
                        star4.position.set(x3, y3 , z3)

                        scene.add(star1)
                        scene.add(star2)
                        scene.add(star3)
                        scene.add(star4)
                        scene.add(laser)

                    }

                    Array(30).fill().forEach(addStar)

                    const geometry = new THREE.CylinderGeometry(25, 25, 1, 30);
                    const material = new THREE.MeshStandardMaterial( {map: texture, color: 0xffd700, metalness: 1, metalnessMap: texture, bumpMap: texture } )
                    const circle = new THREE.Mesh( geometry, material );
                    circle.position.set(55, 0 , -50 )

                    const smallGeo = new THREE.CylinderGeometry(7, 7, 1, 30);
                    const mats = new THREE.MeshStandardMaterial( {map: texture, metalness: 1, metalnessMap: texture, bumpMap: texture} );
                    const smallCoin = new THREE.Mesh(smallGeo, mats)
                    smallCoin.position.set(70, 0, 0)

                    const lineMats = new THREE.LineBasicMaterial()
                    const lineGeo = new THREE.CircleGeometry(0 , 0)
                    const line = new THREE.Line(lineGeo, lineMats)


                    const orbit = new THREE.Group();

                    orbit.add(line)
                    orbit.add(smallCoin)
                    orbit.rotateOnAxis(axis, 20)
                    orbit.position.set(65, 0, -60)

                    pivot.add(circle)

                    scene.add(spotLight, circle , orbit)

                    camera.position.z = 75;

                    const objs = []
                    scene.traverse((object) => {
                        if(object.isMesh) {
                            objs.push(object)

                        }
                    })
                    //mouse
                    const mouse = new THREE.Vector2()
                    
                    window.addEventListener('mouseover', (event) => {
                        mouse.x = (event.clientX / window.innerWidth) * 2 - 1
                        mouse.y = - (event.clientY / window.innerHeight) * 2 - 1
                    })

                    //raycaster
                    const raycaster = new THREE.Raycaster()
                    
                    const intersects = raycaster.intersectObjects(objs)

                    console.log(intersects)

                    for(const intersect of intersects) {
                        // console.log(intersect)
                    }

                    window.addEventListener('wheel', onMouseWheel)
                    let y = 0
                    let position = 0

                    function onMouseWheel(event) {
                        y = event.deltaY *  0.2

                    }

                    const animate = function () {   
                        requestAnimationFrame( animate );
                        position += y
                        y *= 0.9

                        camera.position.y = position
                        
                        circle.rotation.x = Math.PI / 2;                        
                        
                        raycaster.setFromCamera(mouse, camera)
                        const intersects = raycaster.intersectObjects(objs)


                        for(const intersect of intersects) {
                            // console.log(intersect)
                        }
                        smallCoin.rotation.z += 0.03  

                        
                        orbit.rotation.z += 0.01;

                        // orbitControls.update()

                        renderer.render( scene, camera, pivot );
                    };

                    animate();
                }
    
            
        render() {
            return(
                <div ref={ref => this.mount = ref}>

                </div>
            )
        }
    }

export default Three;