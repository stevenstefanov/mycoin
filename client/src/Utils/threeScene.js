<<<<<<< HEAD
import React, {useRef, Suspense, useEffect, useMemo, useState} from 'react'
import { 
    Canvas, 
    useFrame, 
    events, 
    render,
    useThree,
    extend,
    useLoader,
} from '@react-three/fiber'
import { Html, Stars, PerspectiveCamera, OrbitControls} from '@react-three/drei'
import usePromise from 'react-promise-suspense'
import LandingPage from '../components/LandingPage'
import * as THREE from 'three'
import coinmap from './images/coinsnip.PNG'
import {TextureLoader} from 'three'
import background from './images/lazers.jpg'
import './threescene.css'

extend ({OrbitControls})


function StarBackground() {
    const [hovered, setHovered] = useState(false)

    const ref= useRef()

    const [x, y , z] = Array(3).fill().map( () => THREE.MathUtils.randFloatSpread(500))
    

return(
    <mesh 
    // onPointerOver={setHovered(true)} 
    // onPointerOut={setHovered(false)}
    ref={ref} position={hovered ? [x + 10, y + 10 , z] : [x, y, z]}>
    <sphereGeometry attach='geometry' 
    args={[1, 1, 1]}  />
    <meshPhongMaterial attach='material' wireframe emissive={'red'} emissiveIntensity={1} color='red'  />
    </mesh>


)
=======
import React, { useRef, Suspense, useMemo } from "react";
// import React, {useRef, Suspense, useEffect, useMemo} from 'react'
import {
  Canvas,
  useFrame,
  events,
  render,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import usePromise from "react-promise-suspense";
import LandingPage from "../components/LandingPage";
import state from "./state";
import { Block, useBlock } from "./Block";
import * as THREE from "three";
import coinmap from "./images/coinsnip.PNG";
import { TextureLoader } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

// extend({OrbitControls})

// unmountComponentAtNode(document.querySelector('canvas'))

// window.addEventListener('resize', () =>
//   render(<mesh />, document.querySelector('canvas'), {
//     events,
//     size: { width: window.innerWidth, height: window.innerHeight },
//   })
// )
function StarBackground() {
  const ref = useRef();

  const [x, y] = Array(2)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));
  const z = THREE.MathUtils.randFloatSpread(-100);

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
>>>>>>> 4a48cf60a8ac1f5fd07b15a8a34e3488a5363431
}


<<<<<<< HEAD
function Orbit () {
    const orbit = useRef()
    const {camera, gl} = useThree()
    useFrame(() => {
        orbit.current.update()
    })

   
    const display = []


    for(let i =0; i<1000; i++) {
        display.push(
            <StarBackground />
        )
    }
    return(
        <>
  
        <OrbitControls
        minPolarAngle =  {Math.PI/2}
		maxPolarAngle =  {Math.PI/2}
        enableZoom={false}
        enablePan={false}
        args={[camera, gl.domElement]} 
        ref={orbit}
        />
        <mesh position={[0, 0, -350]}>
            <sphereGeometry attach='geometry' args={[200, 50, 50]} />
            <meshBasicMaterial attach='material' wireframe  color={'teal'}/>
        </mesh>

        <GroupScene/>
        {display}
        </>
    )
}


function Group ({time, ...props}) {
    const axis = new THREE.Vector3(5, 5, 5)
    const ref = useRef(group => {
        group.rotateOnAxis(axis, 45)
    })
    usePromise(ms => new Promise(res => setTimeout(res, ms)), [time])
    useFrame(() => {
        ref.current.rotation.z += 0.01
        // ref.current.rotateOnAxis(axis, 40)

    });

    return(
        <group ref={ref} position={[45, 0, 0]} >
            <SmallCoin />
        </group>
    )
}

function SmallCoin ({time, ...props}) {
    const ref = useRef()
    usePromise(ms => new Promise(res => setTimeout(res, ms)), [time])
    useFrame(() => {
        ref.current.rotation.x = Math.PI/2;
        ref.current.rotation.z += 0.02
        // ref.current.rotateY = 10
    })
    const coinText = useMemo(
        () => new TextureLoader().load(coinmap),
        [],
      );
    return(
        <mesh {...props} ref = {ref} position={[70, 25, 0]}>
            <cylinderGeometry attach='geometry' args={[5,5,1,30]}/>
            <meshPhongMaterial attach='material' color='gold' map={coinText} metalness={1} bumpMap={coinText}
            shininess={100} />
        </mesh>
    )
}
function Coin({time, ...props}) {
    const ref = useRef()
    usePromise(ms => new Promise(res => setTimeout(res, ms)), [time])
    useFrame(({camera}) => {
        ref.current.rotation.x = Math.PI/2;
        ref.current.rotation.z += 0.01
    })
    const coinText = useMemo(
        () => new TextureLoader().load(coinmap),
        [],
      );
    return(
        <mesh {...props} ref={ref} position={[50, 0, 0]}>
        <cylinderGeometry attach='geometry' args={[20,20,1,30]}/>
        <meshPhongMaterial attach='material' color='gold' map={coinText} metalness={1} bumpMap={coinText} />
        </mesh>
    )
}

function HtmlContent({time, ...props}) {
 
    return(
      <Html distanceFactor={60} transform={true}  position ={[-60, 0, 0]} >  

        <LandingPage />

      </Html>
    )
  }

function GroupScene ({time, ...prop}) {
    const ref = useRef()
    usePromise(ms => new Promise(res => setTimeout(res, ms)), [time])

    return(
  
        <group ref={ref} {...prop} position={[0, 0, -100]}>
            <Coin />
            <Group />
            <HtmlContent />
        </group>
=======
function Orbit() {
  const orbit = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbit.current.update();
  });
  return <orbitControls args={[camera, gl.domElement]} ref={orbit} />;
}

function Group({ time, ...props }) {
  const ref = useRef((group) => {
    group.rotateOnAxis({ axis: [0.55, 0.55, 0.55], angle: 100 });
  });
  usePromise((ms) => new Promise((res) => setTimeout(res, ms)), [time]);
  useFrame(() => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <group ref={ref} position={[30, 0, 0]}>
      <SmallCoin />
    </group>
  );
}

function SmallCoin({ time, ...props }) {
  const ref = useRef();
  usePromise((ms) => new Promise((res) => setTimeout(res, ms)), [time]);
  useFrame(() => {
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.z += 0.01;
  });
  const coinText = useMemo(() => new TextureLoader().load(coinmap), []);
  return (
    <mesh {...props} ref={ref} position={[50, 25, 0]}>
      <cylinderGeometry attach="geometry" args={[3, 3, 1, 30]} />
      <meshStandardMaterial attach="material" color="gold" map={coinText} />
    </mesh>
  );
}
function Coin({ time, ...props }) {
  const ref = useRef();
  usePromise((ms) => new Promise((res) => setTimeout(res, ms)), [time]);
  useFrame(({ camera }) => {
    ref.current.rotation.x = Math.PI / 2;
    ref.current.rotation.z += 0.01;
    camera.position.z = 80;
  });
  const coinText = useMemo(() => new TextureLoader().load(coinmap), []);
  return (
    <mesh {...props} ref={ref} position={[30, 0, 0]}>
      <cylinderGeometry attach="geometry" args={[10, 10, 1, 30]} />
      <meshStandardMaterial attach="material" color="gold" map={coinText} />
    </mesh>
  );
}

function HtmlContent({ time, ...props }) {
  return (
    <Html distanceFactor={30} transform={true} fullscreen={true}>
      <LandingPage />
    </Html>
  );
}

function GroupScene({ time, ...prop }) {
  const ref = useRef();
  usePromise((ms) => new Promise((res) => setTimeout(res, ms)), [time]);
>>>>>>> 4a48cf60a8ac1f5fd07b15a8a34e3488a5363431

  return (
    <group ref={ref} {...prop}>
      <Coin />
      <Group />
    </group>
  );
}
function ThreeScene() {
<<<<<<< HEAD
 
    window.addEventListener('load', () =>
    render(<mesh />, document.querySelector('canvas'), {
        events,
        size: { width: window.innerWidth, height: window.innerHeight },
    })
    )

    // const display = []
    // for(let i =0; i<1000; i++) {
    //     display.push(
    //         <StarBackground />
    //     )
    // }
    let y = 0
    function onMouseWheel(event) {
        let scroll = event.deltaY 
        y += scroll

    }


    return(
        // <>
        <Canvas id='canvas' style={{backgroundImage: `url(${background})`}}
            
        >
        
        
        <Suspense fallback={null}>
  
        <Orbit />
        <pointLight position={[0, 0, 20]}/>
        <ambientLight intensity={0.3}/>           
           
        </Suspense>
        
        </Canvas>
     
    
    )
=======
  // render(<mesh />, document.querySelector('canvas'), {
  //     size: { width: window.innerWidth, height: window.innerHeight }
  // })
  window.addEventListener("load", () =>
    render(<mesh />, document.querySelector("canvas"), {
      events,
      size: { width: window.innerWidth, height: window.innerHeight },
    })
  );

  const display = [];
  for (let i = 0; i < 100; i++) {
    display.push(<StarBackground />);
  }
  // const scrollArea = useRef()
  // const onScroll = (e) => (state.top.current = e.target.scrollTop)
  // useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    // <>
    <Canvas
    // resize={{width: window.innerWidth, height: window.innerHeight}}
    // camera={{position:[0,0,75]}}
    >
      <Orbit />
      <Suspense fallback={null}>
        <pointLight position={[0, 0, 20]} />
        {/* <StarBackground /> */}
        {display}
        <GroupScene />
        <HtmlContent />
        {/* <Block factor={1.5} offset={0}>
                <Stars />
                <HtmlContent />

                <GroupScene />
            </Block>
            <Block factor={-1.0} offset={0}>
                <StarBackground />
            </Block> */}
      </Suspense>
    </Canvas>
    //  <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
    //  <div style={{ height: `${state.pages * 100}vh` }} />
    //  </div>
    // </>
  );
>>>>>>> 4a48cf60a8ac1f5fd07b15a8a34e3488a5363431
}

export default ThreeScene;
