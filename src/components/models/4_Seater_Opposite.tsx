/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/models/4_Seater_Opposite.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Features, { Feature4 } from './Feature'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder032: THREE.Mesh
    Cylinder032_1: THREE.Mesh
    Circle: THREE.Mesh
    Cube011: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy']: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy001']: THREE.Mesh
    Cylinder004: THREE.Mesh
    Circle014: THREE.Mesh
    Circle010: THREE.Mesh
    Circle007: THREE.Mesh
    Circle001: THREE.Mesh
    Cylinder026: THREE.Mesh
    hub_rf010: THREE.Mesh
    hub_rf010_1: THREE.Mesh
    hub_rf010_2: THREE.Mesh
    Nut042: THREE.Mesh
    suspension_rf009: THREE.Mesh
    suspension_rf009_1: THREE.Mesh
    Cylinder011: THREE.Mesh
    hub_rf001: THREE.Mesh
    hub_rf001_1: THREE.Mesh
    hub_rf001_2: THREE.Mesh
    Nut001: THREE.Mesh
    suspension_rf001: THREE.Mesh
    suspension_rf001_1: THREE.Mesh
    Cylinder017: THREE.Mesh
    hub_rf002: THREE.Mesh
    hub_rf002_1: THREE.Mesh
    hub_rf002_2: THREE.Mesh
    Nut002: THREE.Mesh
    suspension_rf002: THREE.Mesh
    suspension_rf002_1: THREE.Mesh
    Cylinder021: THREE.Mesh
    hub_rf003: THREE.Mesh
    hub_rf003_1: THREE.Mesh
    hub_rf003_2: THREE.Mesh
    Nut003: THREE.Mesh
    suspension_rf003: THREE.Mesh
    suspension_rf003_1: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004']: THREE.Mesh
    Plane042: THREE.Mesh
    Plane041: THREE.Mesh
    Plane039: THREE.Mesh
    Plane034: THREE.Mesh
    Plane029: THREE.Mesh
    Plane028: THREE.Mesh
    Plane027: THREE.Mesh
    Plane026: THREE.Mesh
    Plane025: THREE.Mesh
    Plane024: THREE.Mesh
    Plane014: THREE.Mesh
    cart_floor: THREE.Mesh
    front_headlight: THREE.Mesh
    interior_light002: THREE.Mesh
    interior_light001: THREE.Mesh
    interior_light: THREE.Mesh
    front: THREE.Mesh
    frame: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cube089: THREE.Mesh
    Cube088: THREE.Mesh
    Cube084: THREE.Mesh
    Cube078: THREE.Mesh
    Cube076: THREE.Mesh
    Cube074: THREE.Mesh
    Cube072: THREE.Mesh
    Cube071: THREE.Mesh
    Cube069: THREE.Mesh
    Cube064: THREE.Mesh
    Cube063: THREE.Mesh
    Cube062: THREE.Mesh
    Cube061: THREE.Mesh
    Cube059: THREE.Mesh
    Cube058: THREE.Mesh
    Cube057: THREE.Mesh
    Cube055: THREE.Mesh
    Cube054: THREE.Mesh
    Cube053: THREE.Mesh
    Cube051: THREE.Mesh
    Cube050: THREE.Mesh
    Cube046: THREE.Mesh
    Cube028: THREE.Mesh
    Cube027: THREE.Mesh
    Cube026: THREE.Mesh
    Cube023: THREE.Mesh
    Cube018: THREE.Mesh
    Cube045: THREE.Mesh
    Cube045_1: THREE.Mesh
    Cube044: THREE.Mesh
    Cube044_1: THREE.Mesh
    Cube010: THREE.Mesh
    Cube009: THREE.Mesh
    Cube008: THREE.Mesh
    Cube005: THREE.Mesh
    Cube004: THREE.Mesh
    Cube003: THREE.Mesh
    Cube001: THREE.Mesh
    Cube: THREE.Mesh
    Circle003: THREE.Mesh
    Circle002: THREE.Mesh
    Bolt021: THREE.Mesh
    Bolt019: THREE.Mesh
    Bolt007: THREE.Mesh
    Bolt005: THREE.Mesh
    Bolt004: THREE.Mesh
    Bolt003: THREE.Mesh
    Bolt002: THREE.Mesh
    Bolt001: THREE.Mesh
    Mesh006: THREE.Mesh
    Mesh006_1: THREE.Mesh
    Mesh006_2: THREE.Mesh
    back: THREE.Mesh
    light: THREE.Mesh
    headlight002: THREE.Mesh
    headlight001: THREE.Mesh
    headllight_inside: THREE.Mesh
    Circle005: THREE.Mesh
    Plane032: THREE.Mesh
    Plane035: THREE.Mesh
    Plane037: THREE.Mesh
    Plane038: THREE.Mesh
    Plane043: THREE.Mesh
    Mesh009: THREE.Mesh
    Mesh009_1: THREE.Mesh
    Plane044: THREE.Mesh
    Cube016: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001']: THREE.Mesh
    Plane045: THREE.Mesh
    Mesh010: THREE.Mesh
    Mesh010_1: THREE.Mesh
    Mesh010_2: THREE.Mesh
    Plane046: THREE.Mesh
    Plane048: THREE.Mesh
    Plane049: THREE.Mesh
    Cube019: THREE.Mesh
    Cube020: THREE.Mesh
    Cube021: THREE.Mesh
    Cube022: THREE.Mesh
    Plane050: THREE.Mesh
    Plane019: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cube024: THREE.Mesh
    Mesh013: THREE.Mesh
    Mesh013_1: THREE.Mesh
    dashboard: THREE.Mesh
    Mesh015: THREE.Mesh
    Mesh015_1: THREE.Mesh
    Mesh016: THREE.Mesh
    Mesh016_1: THREE.Mesh
    Cube031: THREE.Mesh
    Cube032: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder008: THREE.Mesh
    Circle008: THREE.Mesh
    Cylinder009: THREE.Mesh
    Cube033: THREE.Mesh
    Plane051: THREE.Mesh
    WIPERS001: THREE.Mesh
    ROOF001: THREE.Mesh
    Cube013: THREE.Mesh
    Cube086: THREE.Mesh
    Cube087: THREE.Mesh
    Cube090: THREE.Mesh
    Cylinder040: THREE.Mesh
    Cylinder041: THREE.Mesh
    Cylinder043: THREE.Mesh
    Plane020: THREE.Mesh
    Plane022: THREE.Mesh
    Plane021_1: THREE.Mesh
    Plane023: THREE.Mesh
  }
  materials: {
    ['Blue paint new']: THREE.MeshStandardMaterial
    ['Black Metal Paint']: THREE.MeshPhysicalMaterial
    ['0black']: THREE.MeshStandardMaterial
    ['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']: THREE.MeshStandardMaterial
    flayer: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Stainless Steel']: THREE.MeshStandardMaterial
    ['Black 1.001']: THREE.MeshStandardMaterial
    ['amg_nadbadge.002']: THREE.MeshStandardMaterial
    ['Steel.001']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Dark_metal: THREE.MeshStandardMaterial
    ['Tarp Sports Cherry Red Black Topstitch']: THREE.MeshStandardMaterial
    ['Black plastic old scratched']: THREE.MeshStandardMaterial
    BASE: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['cart white']: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    ['Black Plastic']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Matte Black']: THREE.MeshStandardMaterial
    Rubber: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Dark Steel']: THREE.MeshStandardMaterial
    ['Black plastic PL']: THREE.MeshStandardMaterial
    ['Dark Steel.001']: THREE.MeshStandardMaterial
    ['Black plastic PL.001']: THREE.MeshStandardMaterial
    ['Tarp Sports Cherry Red Black Topstitch.001']: THREE.MeshStandardMaterial
    ['Glow Glass 02']: THREE.MeshStandardMaterial
    ['Iron Touched.002']: THREE.MeshStandardMaterial
    ['Iron Touched.001']: THREE.MeshStandardMaterial
    ['glass_red.001']: THREE.MeshStandardMaterial
    ['CHROME.001']: THREE.MeshStandardMaterial
    ['Back_emit.001']: THREE.MeshStandardMaterial
    ['Black plastic PL.002']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshPhysicalMaterial
    metal: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    rubber: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
    ['Material.022']: THREE.MeshStandardMaterial
    ['Material.028']: THREE.MeshStandardMaterial
    ['Material.029']: THREE.MeshStandardMaterial
    ['Material.030']: THREE.MeshStandardMaterial
    ['Material.031']: THREE.MeshStandardMaterial
    ['Material.032']: THREE.MeshStandardMaterial
    ['Material.025']: THREE.MeshStandardMaterial
    ['Material.033']: THREE.MeshStandardMaterial
    ['Material.034']: THREE.MeshStandardMaterial
    ['cart white.001']: THREE.MeshStandardMaterial
    ['Black plastic PL.003']: THREE.MeshStandardMaterial
    ['Steel.002']: THREE.MeshStandardMaterial
    ['Rough Iron Steel']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

export function FourSeaterOppositeCart(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/4_Seater_Opposite.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <Feature4/>
      <group position={[0, 0.513, 1.425]} rotation={[0, 0, Math.PI / 2]} scale={[0.344, 0.08, 0.344]}>
        <mesh geometry={nodes.Cylinder032.geometry} material={materials['Blue paint new']} />
        <mesh geometry={nodes.Cylinder032_1.geometry} material={materials['Black Metal Paint']} />
      </group>
      
      <mesh geometry={nodes.Circle.geometry} material={materials['0black']} position={[0, 2.108, 0.034]} scale={0.137} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['0black']} position={[0, 1.216, 0]} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']} position={[-0.892, 1.757, 0.033]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.226} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy001'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']} position={[0.898, 1.757, 0.033]} rotation={[0, 0, -Math.PI / 2]} scale={0.226} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.flayer} position={[-0.901, 0.793, 0.501]} rotation={[1.288, -0.112, -1.454]} scale={[0.724, 0.637, 0.761]} />
      <mesh geometry={nodes.Circle014.geometry} material={materials['Material.014']} position={[-1.121, 0.521, 0.47]} rotation={[0, 0, -Math.PI / 2]} scale={[0.397, 0.452, 0.397]} />
      <mesh geometry={nodes.Circle010.geometry} material={materials['Material.014']} position={[-1.121, 0.521, -2.523]} rotation={[0, 0, -Math.PI / 2]} scale={[0.397, 0.452, 0.397]} />
      <mesh geometry={nodes.Circle007.geometry} material={materials['Material.014']} position={[1.135, 0.521, 0.47]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.397, -0.452, -0.397]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.014']} position={[1.135, 0.521, -2.537]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.397, -0.452, -0.397]} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials['Stainless Steel']} position={[0.136, -0.021, 0.517]} rotation={[Math.PI, 0, Math.PI]} scale={3.665} />
      <group position={[1.102, 0.499, -2.726]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1.018}>
        <mesh geometry={nodes.hub_rf010.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf010_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf010_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
      <mesh geometry={nodes.Nut042.geometry} material={materials['Steel.001']} position={[1.432, -0.758, -2.473]} rotation={[Math.PI, 0, Math.PI]} scale={2.716} />
      <group position={[0.943, 0.529, -2.515]} rotation={[Math.PI / 2, 0, 0]} scale={1.213}>
        <mesh geometry={nodes.suspension_rf009.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf009_1.geometry} material={materials['Steel.001']} />
      </group>
      <mesh geometry={nodes.Cylinder011.geometry} material={materials['Stainless Steel']} position={[0.136, -0.021, 3.447]} rotation={[Math.PI, 0, Math.PI]} scale={3.665} />
      <group position={[1.102, 0.499, 0.201]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1.018}>
        <mesh geometry={nodes.hub_rf001.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf001_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf001_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
      <mesh geometry={nodes.Nut001.geometry} material={materials['Steel.001']} position={[1.432, -0.758, 0.456]} rotation={[Math.PI, 0, Math.PI]} scale={2.716} />
      <group position={[0.943, 0.529, 0.468]} rotation={[Math.PI / 2, 0, 0]} scale={1.213}>
        <mesh geometry={nodes.suspension_rf001.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf001_1.geometry} material={materials['Steel.001']} />
      </group>
      <mesh geometry={nodes.Cylinder017.geometry} material={materials['Stainless Steel']} position={[-0.122, -0.021, 3.517]} rotation={[0, 0, -Math.PI]} scale={-3.665} />
      <group position={[-1.088, 0.499, 0.201]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={-1.018}>
        <mesh geometry={nodes.hub_rf002.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf002_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf002_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
      <mesh geometry={nodes.Nut002.geometry} material={materials['Steel.001']} position={[-1.418, -0.758, 0.526]} rotation={[0, 0, -Math.PI]} scale={-2.716} />
      <group position={[-0.929, 0.529, 0.468]} rotation={[-Math.PI / 2, 0, 0]} scale={-1.213}>
        <mesh geometry={nodes.suspension_rf002.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf002_1.geometry} material={materials['Steel.001']} />
      </group>
      <mesh geometry={nodes.Cylinder021.geometry} material={materials['Stainless Steel']} position={[-0.122, -0.021, 0.504]} rotation={[0, 0, -Math.PI]} scale={-3.665} />
      <group position={[-1.088, 0.499, -2.74]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={-1.018}>
        <mesh geometry={nodes.hub_rf003.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf003_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf003_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
      <mesh geometry={nodes.Nut003.geometry} material={materials['Steel.001']} position={[-1.418, -0.758, -2.487]} rotation={[0, 0, -Math.PI]} scale={-2.716} />
      <group position={[-0.929, 0.529, -2.529]} rotation={[-Math.PI / 2, 0, 0]} scale={-1.213}>
        <mesh geometry={nodes.suspension_rf003.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf003_1.geometry} material={materials['Steel.001']} />
      </group>
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004'].geometry} material={materials['Material.020']} position={[0.019, 2.994, 1.984]} rotation={[0.929, 0, 0]} scale={0.251} />
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.027']} position={[0.025, 1.558, -2.918]} scale={0.026} />
      <mesh geometry={nodes.Plane041.geometry} material={materials['Material.026']} position={[0.025, 1.558, -2.918]} scale={0.026} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.018']} position={[0.051, 2.963, 2.283]} rotation={[0.938, 0, 0]} scale={0.259} />
      <mesh geometry={nodes.Plane034.geometry} material={materials.Black} position={[-0.558, 2.018, -1.495]} rotation={[0.782, 0, 0]} scale={0.092} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.Dark_metal} position={[1.115, 1.437, -0.403]} rotation={[0.547, 0, -Math.PI / 2]} scale={[0.078, 0.114, 0.078]} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.Dark_metal} position={[-1.049, 1.472, -0.403]} rotation={[0.547, 0, Math.PI / 2]} scale={[0.078, 0.114, 0.078]} />
      <mesh geometry={nodes.Plane027.geometry} material={materials.Dark_metal} position={[-0.891, 1.692, 0.607]} rotation={[2.595, 0, Math.PI / 2]} scale={[0.067, 0.095, 0.07]} />
      <mesh geometry={nodes.Plane026.geometry} material={materials.Dark_metal} position={[0.89, 1.69, 0.594]} rotation={[2.595, 0, -Math.PI / 2]} scale={[0.067, 0.095, 0.07]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} position={[0.955, 0.751, 1.753]} rotation={[Math.PI / 2, 0, 0]} scale={[0.054, 0.054, 0.036]} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} position={[-0.879, 0.751, 1.753]} rotation={[Math.PI / 2, 0, 0]} scale={[0.054, 0.054, 0.036]} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Black plastic old scratched']} position={[0.034, 2.799, 0.001]} rotation={[Math.PI / 2, 0, 0]} scale={[0.059, 0.059, 0.026]} />
      <mesh geometry={nodes.cart_floor.geometry} material={materials.BASE} position={[0.017, 0.792, -0.408]} rotation={[Math.PI, 0, Math.PI]} scale={[1.153, 0.577, 0.577]} />
      <mesh geometry={nodes.front_headlight.geometry} material={materials['Material.010']} position={[0.021, 1.599, -2.63]} />
      <mesh geometry={nodes.interior_light002.geometry} material={materials.Black} position={[-0.052, 2.826, -0.003]} rotation={[-1.322, 1.571, 0]} scale={0.059} />
      <mesh geometry={nodes.interior_light001.geometry} material={materials['Black 1.001']} position={[-0.3, 2.799, 0.039]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.059} />
      <mesh geometry={nodes.interior_light.geometry} material={materials['Steel.001']} position={[-0.129, 3.07, 0.015]} rotation={[-1.694, Math.PI / 2, 0]} scale={0.059} />
      <mesh geometry={nodes.front.geometry} material={materials['cart white']} position={[0.023, 1.735, -3.22]} />
      <mesh geometry={nodes.frame.geometry} material={materials.Steel} position={[-0.652, 2.202, 0.077]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Black Plastic']} position={[0.04, 2.799, 0.078]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.059} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.004']} position={[0.04, 0.183, -0.408]} rotation={[Math.PI, 0, Math.PI]} scale={[3.49, 3.49, 2.937]} />
      <mesh geometry={nodes.Cube088.geometry} material={materials.Steel} position={[0.017, 3.131, -1.905]} rotation={[-2.949, 0, -Math.PI]} scale={0.018} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['Material.023']} position={[0.032, 1.792, -0.324]} rotation={[1.833, 0, Math.PI]} scale={[0.366, 0.287, 0.346]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Black Plastic']} position={[0.03, 1.783, -0.321]} rotation={[1.833, 0, Math.PI]} scale={[0.356, 0.287, 0.363]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Matte Black']} position={[0.021, 0.129, -1.332]} rotation={[Math.PI, 0, Math.PI]} scale={[5.269, 3.095, 2.707]} />
      <mesh geometry={nodes.Cube074.geometry} material={materials['Material.023']} position={[0.03, 1.918, 0.397]} rotation={[1.337, 0, 0]} scale={[0.366, 0.346, 0.346]} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['Black Plastic']} position={[0.032, 1.897, 0.398]} rotation={[1.337, 0, 0]} scale={[0.356, 0.346, 0.377]} />
      <mesh geometry={nodes.Cube071.geometry} material={materials['Material.023']} position={[0.032, 1.544, 0.809]} rotation={[Math.PI, 0, Math.PI]} scale={[0.348, 0.346, 0.382]} />
      <mesh geometry={nodes.Cube069.geometry} material={materials.Rubber} position={[0.819, 2.453, -0.75]} rotation={[Math.PI, 0, 3.044]} scale={2.022} />
      <mesh geometry={nodes.Cube064.geometry} material={materials.Rubber} position={[-0.879, 2.478, -1.961]} rotation={[-Math.PI, 0, -3.036]} scale={1.955} />
      <mesh geometry={nodes.Cube063.geometry} material={materials.Rubber} position={[-0.879, 2.478, -1.961]} rotation={[-Math.PI, 0, -3.036]} scale={1.955} />
      <mesh geometry={nodes.Cube062.geometry} material={materials.Steel} position={[-0.879, 2.591, -1.913]} rotation={[-Math.PI, 0, -3.036]} scale={1.955} />
      <mesh geometry={nodes.Cube061.geometry} material={materials.Steel} position={[-0.879, 2.528, -1.961]} rotation={[-Math.PI, 0, -3.036]} scale={1.955} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.008']} position={[0.04, 0.065, -4.157]} rotation={[Math.PI, 0, Math.PI]} scale={3.665} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Dark Steel']} position={[-0.008, 0.136, 3.161]} rotation={[Math.PI, 0, Math.PI]} scale={[3.719, 3.719, 6.151]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Dark Steel']} position={[-0.008, -0.104, -0.985]} rotation={[Math.PI, 0, Math.PI]} scale={[3.154, 3.971, 1.903]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Black plastic PL']} position={[0.007, 0.918, 0.971]} scale={[0.099, 0.107, 0.097]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials.Steel} position={[0.822, 2.489, -0.75]} rotation={[Math.PI, 0, 3.044]} scale={2.022} />
      <mesh geometry={nodes.Cube053.geometry} material={materials.Steel} position={[0.819, 2.55, -0.702]} rotation={[Math.PI, 0, 3.044]} scale={2.022} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['Black plastic PL']} position={[0.046, 1.232, 0.555]} rotation={[Math.PI, 0, Math.PI]} scale={0.577} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Dark Steel.001']} position={[0.087, 0.497, 0.848]} rotation={[Math.PI, 0, Math.PI]} scale={3.719} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['Black plastic old scratched']} position={[1.186, 0.731, -0.431]} rotation={[Math.PI, 0, Math.PI]} scale={[0.681, 0.345, 0.577]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.Rubber} position={[-1.003, 1.582, 0.826]} scale={[0.036, 0.036, 0.297]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials.Rubber} position={[1.055, 1.582, 0.826]} scale={[0.036, 0.036, 0.297]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Black plastic PL.001']} position={[0.046, 1.232, 0.567]} rotation={[0, 0, -Math.PI]} scale={[0.522, 0.577, 1.092]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Matte Black']} position={[0.03, 1.829, -0.409]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials.Rubber} position={[0.819, 2.453, -0.75]} rotation={[Math.PI, 0, 3.044]} scale={2.022} />
      <group position={[0.057, 1.697, 0.6]} rotation={[-0.547, 0, -Math.PI / 2]} scale={[0.08, 0.114, 0.084]}>
        <mesh geometry={nodes.Cube045.geometry} material={materials['Black plastic PL']} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      </group>
      <group position={[0.02, 1.477, -0.375]} rotation={[-2.595, 0, Math.PI / 2]} scale={[0.078, 0.114, 0.078]}>
        <mesh geometry={nodes.Cube044.geometry} material={materials['Black plastic PL']} />
        <mesh geometry={nodes.Cube044_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      </group>
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[0.028, 1.239, -2.016]} rotation={[-0.511, 0, 0]} scale={[0.095, 0.079, 0.057]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black plastic PL']} position={[0.023, 0.945, -2.736]} rotation={[2.734, 0, Math.PI]} scale={[0.103, 0.084, 0.095]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Dark Steel.001']} position={[-0.132, 1.324, -2.662]} scale={0.212} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Black Plastic']} position={[-0.268, 0.901, -1.69]} rotation={[-2.566, 0, Math.PI]} scale={[-0.082, -0.009, -0.148]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Steel} position={[-0.791, 2.896, 0.068]} scale={0.021} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Black Plastic']} position={[-0.752, 0.903, -1.675]} rotation={[-2.548, 0, -Math.PI]} scale={[-0.152, -0.009, -0.148]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Dark Steel.001']} position={[-0.839, 1.786, -2.14]} rotation={[-3.137, 0.099, 2.444]} scale={[-0.048, -0.016, -0.068]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Dark Steel.001']} position={[0.83, 1.647, -2.138]} rotation={[2.961, 0.001, -2.472]} scale={[-0.048, -0.016, -0.068]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Glow Glass 02']} position={[0.493, 2.8, 0.027]} rotation={[Math.PI / 2, 0, 0]} scale={-0.047} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Black plastic old scratched']} position={[-0.559, 1.101, -2.007]} rotation={[0.435, 0, 0]} scale={0.062} />
      <mesh geometry={nodes.Bolt021.geometry} material={materials['Iron Touched.002']} position={[0.406, 3.096, 0.781]} rotation={[-Math.PI, 0, -3.088]} scale={7.402} />
      <mesh geometry={nodes.Bolt019.geometry} material={materials['Iron Touched.002']} position={[0.406, 3.078, -1.023]} rotation={[Math.PI, 0, 2.831]} scale={7.402} />
      <mesh geometry={nodes.Bolt007.geometry} material={nodes.Bolt007.material} position={[0.019, 1.119, -2.044]} rotation={[-2.117, 0, 0]} scale={0.004} />
      <mesh geometry={nodes.Bolt005.geometry} material={materials['Iron Touched.001']} position={[0.02, 0.502, -2.737]} rotation={[-Math.PI / 2, 0, 0]} scale={11.533} />
      <mesh geometry={nodes.Bolt004.geometry} material={materials['Iron Touched.001']} position={[0.209, 0.455, -2.737]} rotation={[-Math.PI / 2, 0, 0]} scale={11.533} />
      <mesh geometry={nodes.Bolt003.geometry} material={materials['Iron Touched.001']} position={[-0.156, 0.455, -2.737]} rotation={[-Math.PI / 2, 0, 0]} scale={11.346} />
      <mesh geometry={nodes.Bolt002.geometry} material={materials['Iron Touched.001']} position={[0.205, 0.58, -2.737]} rotation={[-Math.PI / 2, 0, 0]} scale={11.348} />
      <mesh geometry={nodes.Bolt001.geometry} material={materials['Iron Touched.001']} position={[-0.156, 0.58, -2.737]} rotation={[-Math.PI / 2, 0, 0]} scale={11.294} />
      <group position={[1.004, 1.27, 0.862]} rotation={[2.973, 1.313, -0.325]} scale={[6.194, 6.484, 1.024]}>
        <mesh geometry={nodes.Mesh006.geometry} material={materials['glass_red.001']} />
        <mesh geometry={nodes.Mesh006_1.geometry} material={materials['CHROME.001']} />
        <mesh geometry={nodes.Mesh006_2.geometry} material={materials['Back_emit.001']} />
      </group>
      <mesh geometry={nodes.back.geometry} material={materials['Black plastic PL.002']} position={[0.047, 0.634, 1.484]} rotation={[Math.PI, 0, Math.PI]} scale={[0.794, 0.577, 0.577]} />
      <mesh geometry={nodes.light.geometry} material={materials['Material.002']} position={[0.018, 1.357, -3.294]} />
      <mesh geometry={nodes.headlight002.geometry} material={materials.metal} position={[0.018, 1.357, -3.294]} />
      <mesh geometry={nodes.headlight001.geometry} material={materials['Material.013']} position={[0.022, 1.338, -3.177]} scale={0.995} />
      <mesh geometry={nodes.headllight_inside.geometry} material={materials['Material.016']} position={[0.022, 1.338, -3.177]} scale={0.995} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Black plastic PL']} position={[0.901, 0.986, -0.74]} rotation={[-Math.PI / 2, 0.375, -Math.PI / 2]} scale={[-0.074, -0.076, -0.079]} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.012']} position={[-0.254, 0.926, -1.679]} scale={0.066} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.003']} position={[-1.183, 0.883, -0.662]} rotation={[0, 0, Math.PI / 2]} scale={0.209} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.018']} position={[-1.178, 0.881, -0.65]} rotation={[0, 0, -Math.PI / 2]} scale={[0.066, 0.177, 0.194]} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.003']} position={[1.209, 0.883, -0.656]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={0.209} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.018']} position={[1.208, 0.881, -0.661]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.066, 0.177, 0.194]} />
      <group position={[0.009, 2.822, -1.865]} rotation={[0.216, 0, 0]} scale={0.072}>
        <mesh geometry={nodes.Mesh009.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Mesh009_1.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.007']} position={[0, 2.933, -1.768]} scale={0.228} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Material.023']} position={[0.032, 1.371, -0.683]} rotation={[Math.PI, 0, Math.PI]} scale={[0.378, 0.346, 0.387]} />
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001'].geometry} material={materials['Material.020']} position={[0.02, 1.078, -3.085]} rotation={[1.951, 0, -Math.PI]} scale={0.184} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.018']} position={[0.018, 0.998, -3.289]} rotation={[1.941, 0, -Math.PI]} scale={0.191} />
      <group position={[-0.971, 1.27, 0.86]} rotation={[-0.228, 1.303, -0.332]} scale={[-6.194, -6.484, -1.024]}>
        <mesh geometry={nodes.Mesh010.geometry} material={materials['glass_red.001']} />
        <mesh geometry={nodes.Mesh010_1.geometry} material={materials['CHROME.001']} />
        <mesh geometry={nodes.Mesh010_2.geometry} material={materials['Back_emit.001']} />
      </group>
      <mesh geometry={nodes.Plane046.geometry} material={materials.rubber} position={[0.027, 1.588, 1.615]} />
      <mesh geometry={nodes.Plane048.geometry} material={materials.rubber} position={[0.023, 1.735, -1.944]} />
      <mesh geometry={nodes.Plane049.geometry} material={materials.rubber} position={[0, 1.222, -1.076]} scale={1.064} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.rubber} position={[-0.766, 2.822, 0.732]} scale={0.073} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.rubber} position={[0.027, 0.979, 1.487]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.rubber} position={[0.813, 2.828, -0.897]} scale={0.073} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['cart white']} position={[-0.07, 1.116, -0.913]} scale={0.444} />
      <mesh geometry={nodes.Plane050.geometry} material={materials.flayer} position={[-0.415, 1.303, -2.41]} scale={[0.399, 0.399, 0.426]} />
      <mesh geometry={nodes.Plane019.geometry} material={materials.flayer} position={[0.467, 1.303, -2.41]} rotation={[-Math.PI, 0, 0]} scale={[-0.399, -0.399, -0.426]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['cart white']} position={[-1.161, 0.878, -0.526]} rotation={[0, 0, -Math.PI / 2]} scale={0.022} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['cart white']} position={[-1.161, 0.878, -0.68]} rotation={[0, 0, -Math.PI / 2]} scale={0.022} />
      <mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} position={[1.193, 0.878, -0.637]} rotation={[0, 0, -Math.PI / 2]} scale={0.022} />
      <mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} position={[1.193, 0.878, -0.79]} rotation={[0, 0, -Math.PI / 2]} scale={0.022} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.rubber} position={[-0.871, 2.951, 1.4]} />
      <group position={[-0.53, 2.138, -1.307]}>
        <mesh geometry={nodes.Mesh013.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Mesh013_1.geometry} material={materials['Material.019']} />
      </group>
      <mesh geometry={nodes.dashboard.geometry} material={materials['Material.022']} position={[-0.009, 1.73, -1.844]} rotation={[0, Math.PI / 2, 0]} scale={0.239} />
      <group position={[0.086, 1.683, -1.85]} scale={0.103}>
        <mesh geometry={nodes.Mesh015.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Mesh015_1.geometry} material={materials['Material.028']} />
      </group>
      <group position={[-0.092, 1.489, -1.789]} scale={0.117}>
        <mesh geometry={nodes.Mesh016.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Mesh016_1.geometry} material={materials['Material.029']} />
      </group>
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.030']} position={[0.092, 1.415, -1.701]} scale={0.015} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['Material.030']} position={[0.043, 1.415, -1.701]} scale={0.015} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.031']} position={[-0.018, 1.436, -1.707]} scale={0.023} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.032']} position={[-0.198, 1.639, -1.849]} scale={0.038} />
      <mesh geometry={nodes.Circle008.geometry} material={materials['Material.025']} position={[-0.57, 1.924, -1.519]} rotation={[0.522, 0, 0]} scale={0.026} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.033']} position={[-0.628, 1.896, -1.525]} rotation={[0.335, 0.275, 1.223]} scale={0.042} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.034']} position={[-0.58, 1.856, -1.482]} rotation={[2.021, 0, 0]} scale={0.057} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['cart white.001']} position={[0.023, 1.735, -1.986]} />
      <mesh geometry={nodes.WIPERS001.geometry} material={materials['Black plastic PL.003']} position={[0.44, 2.946, -1.808]} rotation={[0, 1.571, 0]} scale={[1, 1, 0.736]} />
      <mesh geometry={nodes.ROOF001.geometry} material={materials['Dark Steel.001']} position={[0.018, 3.147, 0.1]} rotation={[Math.PI, 0, Math.PI]} scale={[1.337, 1.078, 1.576]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.rubber} position={[-0.766, 2.828, -0.897]} scale={0.073} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Steel.002']} position={[0.637, 1.227, -2.992]} rotation={[-2.896, 0, 3.109]} scale={[0.131, 0.131, 0.001]} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Steel.002']} position={[-0.565, 1.204, -2.99]} rotation={[-2.855, 0, -2.054]} scale={[0.131, 0.131, 0.001]} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Dark Steel']} position={[0.015, 0.411, -3.002]} rotation={[Math.PI, 0, Math.PI]} scale={[0.348, 0.025, 0.025]} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials['Dark Steel']} position={[0.017, 1.223, -2.979]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.051, 1.139, 0.051]} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials['Dark Steel']} position={[0.017, 1.432, -2.972]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.025, 0.318, 0.025]} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials['Rough Iron Steel']} position={[0.017, 0.121, -1.578]} rotation={[Math.PI, 0, Math.PI]} scale={[3.099, 1.68, 1.68]} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Steel.002']} position={[0.025, 1.277, -2.993]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.518, 0.577, 0.008]} />
      {/* <mesh geometry={nodes.Plane022.geometry} material={materials['Rough Iron Steel']} position={[0.017, 0.625, -2.979]} rotation={[Math.PI, 0, Math.PI]} scale={[0.355, 0.577, 0.062]}>
        <mesh geometry={nodes.Plane021_1.geometry} material={materials['Material.009']} position={[-0.084, 0.682, 1.198]} rotation={[2.071, 0, 0]} scale={[0.373, 1.845, 0.092]} />
      </mesh> */}
      <mesh geometry={nodes.Plane023.geometry} material={materials['Dark Steel']} position={[0.017, 0.398, -2.953]} rotation={[Math.PI, 0, Math.PI]} scale={[0.24, 0.572, 0.051]} />
    </group>
  )
}

useGLTF.preload('/models/4_Seater_Opposite.glb')
