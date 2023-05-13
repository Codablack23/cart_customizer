/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/steerings/Steering 4.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bolt025: THREE.Mesh
    Plane053: THREE.Mesh
    Plane055: THREE.Mesh
  }
  materials: {
    ['Black Plastic.002']: THREE.MeshStandardMaterial
    ['BASE.001']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Bolt.025' | 'Plane.053' | 'Plane.055'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function SteeringModel4(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/steerings/Steering 4.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Bolt025" geometry={nodes.Bolt025.geometry} material={nodes.Bolt025.material} position={[-0.58, 1.89, -1.55]} rotation={[0.73, 0, 0]} scale={0.1} />
        <mesh name="Plane053" geometry={nodes.Plane053.geometry} material={materials['Black Plastic.002']} position={[-0.58, 1.98, -1.45]} rotation={[0.73, 0, 0]} scale={0.23} />
        <mesh name="Plane055" geometry={nodes.Plane055.geometry} material={materials['BASE.001']} position={[-0.58, 2.01, -1.48]} rotation={[0.73, 0, 0]} scale={0.1} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/steerings/Steering 4.glb')
