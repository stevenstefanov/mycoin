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
}

// function Background({ left, children }) {
//     const { contentMaxWidth, canvasWidth, margin } = useBlock()
//     const aspect = 1.75
//     // const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
//     return (
//       <group scale={[contentMaxWidth, contentMaxWidth / aspect, 1]}>
//         <GroupScene />
//         {children}
//       </group>
//     )
// }

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

  return (
    <group ref={ref} {...prop}>
      <Coin />
      <Group />
    </group>
  );
}
function ThreeScene() {
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
}

export default ThreeScene;
