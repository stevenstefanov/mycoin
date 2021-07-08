import * as THREE from 'three'
import React, {Component} from 'react'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"



class Three extends Component {

    componentDidMount = () => {
    
        const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                    const axis = new THREE.Vector3(0.5,0.5,0);

                    const pivot = new THREE.Object3D();
                    

                    const renderer = new THREE.WebGLRenderer();
                    renderer.setSize( window.innerWidth, window.innerHeight );
                    renderer.setClearColor("#000000")
                    // document.body.appendChild( renderer.domElement );
                    const orbitControls = new OrbitControls(camera, renderer.domElement)
                    this.mount.appendChild(renderer.domElement);

                    window.addEventListener('resize', () => {
                    
                        renderer.setSize( window.innerWidth, window.innerHeight );
                        camera.aspect = window.innerWidth/window.innerHeight
                        camera.updateProjectionMatrix();
                    })
                   
                    const pointLight = new THREE.SpotLight(0xffffff, 1.5);
                    const helper = new THREE.SpotLightHelper(pointLight)
                    

                    pointLight.position.set( 0 ,10, 30)

                
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

                    const geometry = new THREE.CylinderGeometry(10, 10, 1, 30);
                    const material = new THREE.MeshBasicMaterial( { color: 0xffd700 } );
                    const circle = new THREE.Mesh( geometry, material );

                    const smallGeo = new THREE.CylinderGeometry(3, 3, 1, 30);
                    const mats = new THREE.MeshStandardMaterial( { color: 0xffffff } );
                    const smallCoin = new THREE.Mesh(smallGeo, mats)

                    

                    const lineMats = new THREE.LineBasicMaterial({color: 'blue'})
                    const lineGeo = new THREE.CircleGeometry(0 , 0)
                    const line = new THREE.Line(lineGeo, lineMats)

                    const orbit = new THREE.Group();

                    orbit.add(line)
                    orbit.add(smallCoin)
                    orbit.rotateOnAxis(axis, 10)

                    pivot.add(circle)

                    scene.add(pointLight, circle , orbit)
                    // scene.add( loader );
                    // scene.add(light)
                    camera.position.z = 50;

                    const animate = function () {   
                        requestAnimationFrame( animate );

                        circle.rotation.x = Math.PI / 2;                        
                        circle.rotation.z += 0.01;

                        // smallCoin.rotation.x = Math.PI / 2;  
                        smallCoin.rotation.z += 0.03  
                        smallCoin.position.set(20, 0, 0)
                        
                        
                        // orbit.rotation.y += 0.01;
                        orbit.rotation.z += 0.02;
                        // orbit.rotation.x +=0.01;
                        orbitControls.update()
                        renderer.render( scene, camera, pivot );
                    };

                    animate();
                }
    
            
        render() {
            return(
                <div ref={ref => this.mount = ref}></div>
            )
        }
    }

export default Three;