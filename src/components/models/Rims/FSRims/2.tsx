/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/rims/fs/Rim 2.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Felge003_4-mesh001']: THREE.Mesh
    ['Felge003_4-mesh001_1']: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
    ['Steel.004']: THREE.MeshStandardMaterial
  }
}

export function FSRim2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/rims/fs/Rim 2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-1.182, 0.52, 0.483]} scale={[0.527, 1.237, 1.237]}>
        <mesh geometry={nodes['Felge003_4-mesh001'].geometry} material={materials['default']} />
        <mesh geometry={nodes['Felge003_4-mesh001_1'].geometry} material={materials['Steel.004']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/rims/fs/Rim 2.glb')