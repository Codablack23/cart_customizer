/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/steerings/Steering 5.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle011: THREE.Mesh
    Torus002: THREE.Mesh
  }
  materials: {
    ['Black plastic old scratched.001']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Circle.011' | 'Torus.002'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function SteeringModel5(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/models/steerings/Steering 5.glb') as GLTFResult
  const { actions } = useAnimations<any>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Circle011" geometry={nodes.Circle011.geometry} material={nodes.Circle011.material} position={[-0.56, 2, -1.47]} rotation={[-Math.PI, -1.54, 2.41]} scale={0.02} />
        <mesh name="Torus002" geometry={nodes.Torus002.geometry} material={materials['Black plastic old scratched.001']} position={[-0.56, 1.99, -1.47]} rotation={[0.74, -0.48, 0.02]} scale={0.11} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/steerings/Steering 5.glb')