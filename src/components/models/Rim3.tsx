/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/rims/Rim 3.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['rimS-3']: THREE.Mesh
  }
  materials: {
    ['10_Front Whell']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'rimS-3'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function RimModel3(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/rims/Rim 3.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="rimS-3" geometry={nodes['rimS-3'].geometry} material={materials['10_Front Whell']} position={[0.6, 0.51, -2.5]} scale={[0.71, 1.39, 1.39]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rims/Rim 3.glb')
