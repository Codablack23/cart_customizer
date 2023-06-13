/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 RC6.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ROOF: THREE.Mesh
  }
  materials: {
    ['Black.001']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'ROOF'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<any>()
  const { nodes, materials, animations } = useGLTF('/RC6.glb') as GLTFResult
  const { actions } = useAnimations<any>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="ROOF" geometry={nodes.ROOF.geometry} material={materials['Black.001']} position={[-0.012, 3.444, -1.466]} scale={[0.013, 0.015, 0.02]} />
      </group>
    </group>
  )
}

useGLTF.preload('/RC6.glb')
