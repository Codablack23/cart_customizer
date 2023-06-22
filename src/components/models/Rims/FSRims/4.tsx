/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/rims/fs/Rim 4.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Circle014_2-mesh001']: THREE.Mesh
    ['Circle014_2-mesh001_1']: THREE.Mesh
  }
  materials: {
    ['default.001']: THREE.MeshStandardMaterial
    ['Steel.005']: THREE.MeshStandardMaterial
  }
}

export function FSRim4(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/rims/fs/Rim 4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-1.133, 0.517, 0.48]} scale={0.952}>
        <mesh geometry={nodes['Circle014_2-mesh001'].geometry} material={materials['default.001']} />
        <mesh geometry={nodes['Circle014_2-mesh001_1'].geometry} material={materials['Steel.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rims/fs/Rim 4.glb')