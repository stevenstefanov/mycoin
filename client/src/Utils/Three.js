import * as THREE from 'three'
import React, {Component} from 'react'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import coinSnip from './images/coinsnip.PNG'
import background from './images/blackgradient.jpg'
import LandingPage from '../components/LandingPage'

class Three extends Component {

    componentDidMount = () => {
    
        const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                    const axis = new THREE.Vector3(0.55,0.55,0.55);

                    const pivot = new THREE.Object3D();
                    

                    const renderer = new THREE.WebGLRenderer();
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
                    const spotLight = new THREE.SpotLight(0xffffff, 1)
                    const pointLight = new THREE.PointLight(0xffffff, 1)

                    // const helper = new THREE.SpotLightHelper(spotLight)
                    
                    // ambientLight.position.set(35, 0, 0)

                    spotLight.position.set( 40 ,50, 300)
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

                    const smallGeo = new THREE.CylinderGeometry(7, 7, 1, 30);
                    const mats = new THREE.MeshStandardMaterial( {map: texture, metalness: 1, metalnessMap: texture, bumpMap: texture} );
                    const smallCoin = new THREE.Mesh(smallGeo, mats)

                    const lineMats = new THREE.LineBasicMaterial()
                    const lineGeo = new THREE.CircleGeometry(0 , 0)
                    const line = new THREE.Line(lineGeo, lineMats)


                    const orbit = new THREE.Group();

                    orbit.add(line)
                    orbit.add(smallCoin)
                    orbit.rotateOnAxis(axis, 20)

                    pivot.add(circle)

                    scene.add(spotLight, circle , orbit, pointLight)

                    camera.position.z = 100;

                    const animate = function () {   
                        requestAnimationFrame( animate );

                        circle.rotation.x = Math.PI / 2;                        
                        // circle.rotation.z += 0.01;
                        circle.position.set(55, 0 , -50 )

                        smallCoin.rotation.z += 0.03  
                        smallCoin.position.set(70, 0, 0)
                        
                        orbit.rotation.z += 0.01;
                        orbit.position.set(65, 0, -60)

                        // orbitControls.update()

                        renderer.render( scene, camera, pivot );
                    };

                    animate();
                }
    
            
        render() {
            return(
                <div>
                    <div ref={ref => this.mount = ref}>
                        <LandingPage />
                    </div>
                </div>
            )
        }
    }

export default Three;