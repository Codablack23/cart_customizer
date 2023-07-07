/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 public/models/rims/Rim 8.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Plane058_2-mesh']: THREE.Mesh
    ['Plane058_2-mesh_1']: THREE.Mesh
  }
  materials: {
    ['default   #3']: THREE.MeshStandardMaterial
    ['Steel.001']: THREE.MeshStandardMaterial
  }
}

export function RimModel8(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/rims/Rim 8.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[1.21, 0.523, -2.514]} rotation={[3.13, 0, Math.PI / 2]} scale={0.217}>
        <mesh geometry={nodes['Plane058_2-mesh'].geometry} material={materials['default   #3']} />
        <mesh geometry={nodes['Plane058_2-mesh_1'].geometry} material={materials['Steel.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rims/Rim 8.glb')
