import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {Box} from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})


function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/hackl/scene.gltf')
    const [hovered, set] = useState(null)
    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI, 0.15, -Math.PI]}>
                        <mesh geometry={nodes.Object_4.geometry} material={materials.Earth} />
                    </group>
                    <group position={[0, 0, 3]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_6.geometry} material={materials.Venus} />
                    </group>
                    <group position={[0, 0, 6]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_8.geometry} material={materials.Mercury} />
                    </group>
                    <group position={[0, 0, -3]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_10.geometry} material={materials.Mars} />
                    </group>
                    <group position={[0, 0, -30]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_12.geometry} material={materials.Jupiter} />
                    </group>
                    <group position={[0, 0, -50]}>
                        <mesh geometry={nodes.Object_14.geometry} material={materials.Saturn} />
                    </group>
                    <group position={[0, 0, -70]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_16.geometry} material={materials.Uranus} />
                    </group>
                    <group position={[0, 0, -80]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_18.geometry} material={materials.Neptune} />
                    </group>
                    <group position={[0, 0, 200]} rotation={[0, -1.04, 0]}>
                        <mesh geometry={nodes.Object_20.geometry} material={materials.material} />
                    </group>
                    <group position={[-2, 0, 0]} rotation={[0, -1.04, 0]} scale={0.12}>
                        <mesh geometry={nodes.Object_22.geometry} material={materials.moon} />
                    </group>
                    <group position={[0, 0, -9]} rotation={[0, -1.04, 0]} scale={0.03}>
                        <mesh geometry={nodes.Object_24.geometry} material={materials.ceres} />
                    </group>
                    <group position={[0, 0, -90]} rotation={[0, -1.04, 0]} scale={0.07}>
                        <mesh geometry={nodes.Object_26.geometry} material={materials.eris} />
                    </group>
                    <group position={[0, 0, -84]} rotation={[0, -1.04, 0]} scale={0.05}>
                        <mesh geometry={nodes.Object_28.geometry} material={materials.haumea} />
                    </group>
                    <group position={[0, 0, -87]} rotation={[0, -1.04, 0]} scale={0.05}>
                        <mesh geometry={nodes.Object_30.geometry} material={materials.makemake} />
                    </group>
                    <group position={[0, 0, -50]}>
                        <mesh geometry={nodes.Object_32.geometry} material={materials.SaturnRing} />
                    </group>
                    <group scale={1000}>
                        <mesh geometry={nodes.Object_34.geometry} material={materials.Environment} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "material") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Sun</h1>
                <p className="view_info_desc">The Sun is the Solar System's star and by far its most massive component. Its large mass (332,900 Earth masses), which comprises 99.86% of all the mass in the Solar System, produces temperatures and densities in its core high enough to sustain nuclear fusion of hydrogen into helium, making it a main-sequence star.</p>
            </div>
        )
    }
    else if (snap.current === "Mercury") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Mercury</h1>
                <p className="view_info_desc">Mercury (0.4 AU (60 million km; 37 million mi) from the Sun) is the closest planet to the Sun. The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites. Besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history.</p>
            </div>
        )
    }
    else if (snap.current === "Venus") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Venus</h1>
                <p className="view_info_desc">Venus (0.7 AU (100 million km; 65 million mi) from the Sun) is close in size to Earth (0.815 MEarth) and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity.</p>
            </div>
        )
    }
    else if (snap.current === "Earth") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Earth</h1>
                <p className="view_info_desc">Earth (1 AU (150 million km; 93 million mi) from the Sun) is the largest and densest of the inner planets, the only one known to have current geological activity, and the only place where life is known to exist.</p>
            </div>
        )
    }
    else if (snap.current === "Mars") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Mars</h1>
                <p className="view_info_desc">Mars (1.5 AU (220 million km; 140 million mi) from the Sun) is smaller than Earth and Venus (0.107 MEarth). It has an atmosphere of mostly carbon dioxide with a surface pressure of 6.1 millibars (0.088 psi; 0.18 inHg) (roughly 0.6% of that of Earth).</p>
            </div>
        )
    }
    else if (snap.current === "Jupiter") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Jupiter</h1>
                <p className="view_info_desc">Jupiter (5.2 AU (780 million km; 480 million mi)), at 318 MEarth, is 2.5 times the mass of all the other planets put together. It is composed largely of hydrogen and helium. Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot. Jupiter has 80 known satellites.</p>
            </div>
        )
    }
    else if (snap.current === "Saturn") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Saturn</h1>
                <p className="view_info_desc">Saturn (9.5 AU (1.42 billion km; 880 million mi)), distinguished by its extensive ring system, has several similarities to Jupiter, such as its atmospheric composition and magnetosphere. Although Saturn has 60% of Jupiter's volume, it is less than a third as massive, at 95 MEarth.</p>
            </div>
        )
    }
    else if (snap.current === "Uranus") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Uranus</h1>
                <p className="view_info_desc">Uranus (19.2 AU (2.87 billion km; 1.78 billion mi)), at 14 MEarth, is the lightest of the outer planets. Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic.</p>
            </div>
        )
    }
    else if (snap.current === "Neptune") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center">
                <h1 className="view_info_click">Neptune</h1>
                <p className="view_info_desc">Neptune (30.1 AU (4.50 billion km; 2.80 billion mi)), though slightly smaller than Uranus, is more massive (17 MEarth) and hence more dense. It radiates more internal heat than Uranus, but not as much as Jupiter or Saturn. Neptune has 14 known satellites.</p>
            </div>
        )
    }
    else {
        return (
            <div className="view_info">
                <h1 className="text-2xl tracking-wider">Click on diffrent parts of Solar System to know more</h1>
                <p className="view_info_desc">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="view_info_main">
                    <img className="view_info_qr" src="https://storage.echo3d.co/morning-hill-2019/6eb6c043-0247-4948-b1d1-c5b9a718bd28.png" alt="QR Code" />
                    <a href="https://go.echo3d.co/4dFm" target="_blank" rel="noreferrer">
                        <button className="view_info_button">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function SolarSystem() {
    return (
        <>
            <div className="model">

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/Welcome" className="model_goback">Go Back</Link>
            <Link to="/chat/Shuttle" className="model_goback">Enter the chat</Link>
            </Box>

                <div className="model_info">
                    <h1 className="model_info_title">
                        Solar System
                    </h1>
                    <div className="explore_title_line"></div>
                    <div className="model_info_desc">The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. Of the bodies that orbit the Sun directly, the largest are the four gas and ice giants and the four terrestrial planets, followed by an unknown number of dwarf planets and innumerable small Solar System bodies. This work is based on "Solar system [REAL SCALE] 2k textures" (https://sketchfab.com/3d-models/solar-system-real-scale-2k-textures-febde2b6e3f64b06965620fd3ddc97c2) by FyorDev (https://sketchfab.com/FyorDev) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
                </div>

                <div className="model3D">

                    <div className="model3D_3D">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.05} />
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
