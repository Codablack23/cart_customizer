/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 SP4.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane011: THREE.Mesh
    Plane011_1: THREE.Mesh
    Plane011_2: THREE.Mesh
    Plane011_3: THREE.Mesh
  }
  materials: {
    ['Dark Steel.003']: THREE.MeshStandardMaterial
    ['frame_03.001']: THREE.MeshStandardMaterial
    ['solar.001']: THREE.MeshStandardMaterial
    ['plastic.001']: THREE.MeshStandardMaterial
  }
}

export function SolarPanelModel40(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/others/SP4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.02, 3.15, -0.12]} scale={[0.794, 1.056, 1.46]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials['Dark Steel.003']} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials['frame_03.001']} />
        <mesh geometry={nodes.Plane011_2.geometry} material={materials['solar.001']} />
        <mesh geometry={nodes.Plane011_3.geometry} material={materials['plastic.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/others/SP4.glb')
