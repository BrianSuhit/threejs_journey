import { Float, Text, Html, PivotControls, OrbitControls, GizmoViewport, Grid, Stars, Sky, Stats } from '@react-three/drei'
import { useRef } from 'react'
import { AxesHelper } from 'three'

export default function Experience()
{
    return <>

        <Stats/>
        <Grid scale={50} position-y={ - 1 } infiniteCellCount={20} cellSize={0.5} sectionSize={3} fadeDistance={30} fadeStrength={1} />
        <OrbitControls makeDefault maxPolarAngle={ Math.PI / 2} />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Float speed={ 5 } floatingRange={[1, 2]}>
        <mesh position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
        </Float>

        <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={2}>
        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        </PivotControls>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        {/* <Html>Hola</Html> */}
        <Text 
        font='\bangers-v20-latin-regular.woff'
        fontSize={ 0.5 }
        position={[0, 2, 0]}
        color={'coral'}
        >I love R3F</Text>
    </>
}