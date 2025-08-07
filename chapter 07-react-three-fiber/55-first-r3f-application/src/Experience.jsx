import { useFrame } from "@react-three/fiber"
import { useRef } from "react"



export default function Experience()
{
    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame( (state, delta) => 
        { 
            cubeRef.current.rotation.y += 1  * delta
            //groupRef.current.rotation.y += 1 * delta
        } )

    return<>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4 } />
        <ambientLight intensity={ 1.5 } />

        <group ref={groupRef}>
            <mesh position-x={ - 2 }>
                <sphereGeometry/>
                <meshStandardMaterial color='coral' />
            </mesh>

            <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
                <boxGeometry/>
                <meshStandardMaterial color='mediumPurple' />
            </mesh>
        </group>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color='greenYellow'/>
        </mesh>

    </>
}