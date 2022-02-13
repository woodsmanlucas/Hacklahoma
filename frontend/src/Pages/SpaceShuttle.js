import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/spacex_heart_of_gold/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group position={[0, 96.7, 99.46]} rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.its_rig_rootJoint} />
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  return (
     <div className="view_info">
      <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

      <div className="view_info_main">
        <img className="view_info_qr" src="https://storage.echoar.xyz/wispy-violet-4999/633d6a9c-73d8-4207-ada6-61dc04cfebe3" alt="QR Code" />
        <a href="https://go.echoar.xyz/rQke" target="_blank" rel="noreferrer">
          <button className="view_info_button">View in AR</button>
        </a>
      </div>
    </div>
  )
}

export default function SpaceShuttle() {
  return (
    <>
      <div className="model">

        <Link to="/Welcome" className="model_goback">Go Back</Link>

        <div className="model_info">
          <h1 className="model_info_title">
            SpaxeX ITS
          </h1>
          <div className="explore_title_line"></div>
          <div className="model_info_desc">SpaceX's Interplanetary Transport System (ITS), the reusable rocket-spaceship duo with which the company plans to begin colonizing Mars within the next 10 years or so. ITS is the name of the overall architecture; each individual Mars-bound spaceship will presumably have a unique moniker. This work is based on "SpaceX Heart of Gold" (https://sketchfab.com/3d-models/spacex-heart-of-gold-a590f9bd25da436a85082819c4e6ef7b) by Forest Katsch (https://sketchfab.com/ForestKatsch) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
        </div>

        <div className="model3D">

          <div className="model3D_3D">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={1} />
                <Environment preset="city" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="model3D_3D_Desc">
            <Details />
          </div>

        </div>

      </div>

    </>
  )
}
