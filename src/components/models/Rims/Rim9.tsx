/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/rims/Rim 9.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Nut004: THREE.Mesh
    Nut004_1: THREE.Mesh
  }
  materials: {
    ['Steel.001']: THREE.MeshStandardMaterial
    ['default    #4.001']: THREE.MeshStandardMaterial
  }
}

export function RimModel9(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/rim//Rim 9.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[1.349, 0.53, -2.524]} rotation={[1.337, 0, 0]} scale={-3.432}>
        <mesh geometry={nodes.Nut004.geometry} material={materials['Steel.001']} />
        <mesh geometry={nodes.Nut004_1.geometry} material={materials['default    #4.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rim//Rim 9.glb')
