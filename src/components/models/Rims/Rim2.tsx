/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/rims/Rim 2.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['rims-2']: THREE.Mesh
  }
  materials: {}
}

type ActionName = 'rims-2'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function RimModel2(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/models/rims/Rim 2.glb') as GLTFResult
  const { actions } = useAnimations<any>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="rims-2" geometry={nodes['rims-2'].geometry} material={nodes['rims-2'].material} position={[-1.22, 0.52, 1.42]} scale={[0.51, 1.2, 1.2]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rims/Rim 2.glb')