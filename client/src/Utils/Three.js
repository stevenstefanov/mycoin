import * as THREE from 'three'
import React, {Component} from 'react'


class Three extends Component {

    componentDidMount = () => {
    
        const scene = new THREE.Scene();
                    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

                    const renderer = new THREE.WebGLRenderer();
                    renderer.setSize( window.innerWidth, window.innerHeight );
                    renderer.setClearColor("#ffffff")
                    // document.body.appendChild( renderer.domElement );
                    this.mount.appendChild(renderer.domElement);

                    window.addEventListener('resize', () => {
                    
                        renderer.setSize( window.innerWidth, window.innerHeight );
                        camera.aspect = window.innerWidth/window.innerHeight
                        camera.updateProjectionMatrix();
                    })
                   
                    const light = new THREE.PointLight('0xffd700');
                    light.position.set(0, 0, 15)
                
                    
                  
                    const geometry = new THREE.CylinderGeometry(10, 10, 1, 30);
                    const material = new THREE.MeshBasicMaterial( { color: 0xffd700 } );
                    const circle = new THREE.Mesh( geometry, material );

            
                    
                    

                    
                    
                   
                    scene.add( circle );
                    
                    scene.add(light)
                    camera.position.z = 50;

                    const animate = function () {   
                        requestAnimationFrame( animate );

                        
                        
                        circle.rotation.x = Math.PI / 2;
                        
                        circle.rotation.z += 0.01;
                      
                        


                        renderer.render( scene, camera );
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