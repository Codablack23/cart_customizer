/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/models/kart.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Features from './models/Feature'
import { SeatRestModel } from './models/SEATREST'
// import {SteeringModel1} from './models/Steering1'
// import {SolarPanelModel} from './models/SolarPanel'
// import {BasketModel} from './models/Basket'
// import {RoofModel} from './models/Roof'
// import {RimModel1} from './models/Rim1'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder003: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder016: THREE.Mesh
    Cylinder020: THREE.Mesh
    Cylinder032: THREE.Mesh
    Cylinder032_1: THREE.Mesh
    Circle006: THREE.Mesh
    Cylinder026: THREE.Mesh
    hub_rf010: THREE.Mesh
    hub_rf010_1: THREE.Mesh
    hub_rf010_2: THREE.Mesh
    Nut042: THREE.Mesh
    suspension_rf009: THREE.Mesh
    suspension_rf009_1: THREE.Mesh
    Circle004: THREE.Mesh
    Cylinder011: THREE.Mesh
    hub_rf001: THREE.Mesh
    hub_rf001_1: THREE.Mesh
    hub_rf001_2: THREE.Mesh
    Nut001: THREE.Mesh
    suspension_rf001: THREE.Mesh
    suspension_rf001_1: THREE.Mesh
    Circle009: THREE.Mesh
    Cylinder017: THREE.Mesh
    hub_rf002: THREE.Mesh
    hub_rf002_1: THREE.Mesh
    hub_rf002_2: THREE.Mesh
    Nut002: THREE.Mesh
    suspension_rf002: THREE.Mesh
    suspension_rf002_1: THREE.Mesh
    Circle013: THREE.Mesh
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
    Plane031: THREE.Mesh
    Plane030: THREE.Mesh
    Plane029: THREE.Mesh
    Plane028: THREE.Mesh
    Plane027: THREE.Mesh
    Plane026: THREE.Mesh
    Plane025: THREE.Mesh
    Plane024: THREE.Mesh
    Plane018: THREE.Mesh
    Plane014: THREE.Mesh
    cart_floor: THREE.Mesh
    front_headlight: THREE.Mesh
    interior_light002: THREE.Mesh
    interior_light001: THREE.Mesh
    interior_light: THREE.Mesh
    front: THREE.Mesh
    frame: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cube089: THREE.Mesh
    Cube088: THREE.Mesh
    Cube084: THREE.Mesh
    Cube083_1: THREE.Mesh
    Cube083_2: THREE.Mesh
    Cube082_1: THREE.Mesh
    Cube082_2: THREE.Mesh
    Cube080: THREE.Mesh
    Cube078: THREE.Mesh
    Cube076: THREE.Mesh
    Cube074_1: THREE.Mesh
    Cube074_2: THREE.Mesh
    Cube072: THREE.Mesh
    Cube071_1: THREE.Mesh
    Cube071_2: THREE.Mesh
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
    Cube040: THREE.Mesh
    Cube040_1: THREE.Mesh
    Cube044: THREE.Mesh
    Cube044_1: THREE.Mesh
    Cube011: THREE.Mesh
    Cube010: THREE.Mesh
    Cube009: THREE.Mesh
    Cube008: THREE.Mesh
    Cube005: THREE.Mesh
    Cube004: THREE.Mesh
    Cube003: THREE.Mesh
    Cube001: THREE.Mesh
    Cube: THREE.Mesh
    Circle007: THREE.Mesh
    Circle003: THREE.Mesh
    Circle002: THREE.Mesh
    Circle001: THREE.Mesh
    Circle: THREE.Mesh
    Bolt021: THREE.Mesh
    Bolt019: THREE.Mesh
    Bolt007: THREE.Mesh
    Bolt005: THREE.Mesh
    Bolt004: THREE.Mesh
    Bolt003: THREE.Mesh
    Bolt002: THREE.Mesh
    Bolt001: THREE.Mesh
    Mesh007: THREE.Mesh
    Mesh007_1: THREE.Mesh
    Mesh007_2: THREE.Mesh
    back: THREE.Mesh
    Cube025: THREE.Mesh
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
    Mesh010: THREE.Mesh
    Mesh010_1: THREE.Mesh
    Plane044: THREE.Mesh
    Cube002_1: THREE.Mesh
    Cube002_2: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001']: THREE.Mesh
    Plane045: THREE.Mesh
    Mesh011: THREE.Mesh
    Mesh011_1: THREE.Mesh
    Mesh011_2: THREE.Mesh
    Plane046: THREE.Mesh
    Plane048: THREE.Mesh
    Plane049: THREE.Mesh
    Cube017: THREE.Mesh
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
    Circle010: THREE.Mesh
    ROOF001: THREE.Mesh
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
    ['Material.001']: THREE.MeshStandardMaterial
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
    ['Glass - Optimized']: THREE.MeshStandardMaterial
    ['Black plastic old scratched']: THREE.MeshStandardMaterial
    BASE: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['cart white']: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    ['Black plastic PL']: THREE.MeshStandardMaterial
    ['Black Plastic']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Matte Black']: THREE.MeshStandardMaterial
    Rubber: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Dark Steel']: THREE.MeshStandardMaterial
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
    ['Black Plastic.001']: THREE.MeshStandardMaterial
    ['Steel.002']: THREE.MeshStandardMaterial
    ['Rough Iron Steel']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
  }
}

export function KartModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/kart.glb') as GLTFResult
  return (
    <group {...props} dispose={null} >
     <group position={[-0.34, 1.46, -2.86]} scale={8.89}>
        <mesh geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} position={[0.52, -0.02, 0.04]} scale={0.11}/>
        <mesh geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} position={[0.52, -0.02, 0.48]} scale={0.11} />
        <mesh geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} position={[-0.44, -0.02, 0.48]} rotation={[-Math.PI, 0, 0]} scale={-0.11} />
        <mesh geometry={nodes.Cylinder020.geometry} material={nodes.Cylinder020.material} position={[-0.44, -0.02, 0.04]} rotation={[-Math.PI, 0, 0]} scale={-0.11} />
      </group>
    
      {/* <group position={[-1.25, 0.51, 1.42]} name="rim" rotation={[0, 0, Math.PI / 2]} scale={[0.34, 0.08, 0.34]}>
        <mesh geometry={nodes.Cylinder032.geometry} material={materials['Blue paint new']} />
        <mesh geometry={nodes.Cylinder032_1.geometry} material={materials['Black Metal Paint']} />
      </group> */}
       {/* <SteeringModel1/>
      <SolarPanelModel/>
      <BasketModel/>
      <RoofModel/>
      <RimModel1/> */}
      <Features/>
      <mesh name="tyre1" geometry={nodes.Circle006.geometry} material={materials['Material.001']} position={[-1.12, 0.52, -2.52]} rotation={[0, 0, -Math.PI / 2]} scale={[0.4, 0.45, 0.4]} />
      <mesh name="tyre_ring_1" geometry={nodes.Cylinder026.geometry} material={materials['Stainless Steel']} position={[0.14, -0.02, 0.52]} rotation={[Math.PI, 0, Math.PI]} scale={3.66} />
      
      <group position={[1.1, 0.5, -2.73]} rotation={[Math.PI / 2, 0, Math.PI]} visible={false} scale={1.02}>
        <mesh geometry={nodes.hub_rf010.geometry} material={materials['Black 1.001']} />
        <mesh  geometry={nodes.hub_rf010_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf010_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
       
      <mesh geometry={nodes.Nut042.geometry} name="rim_bolt_1" material={materials['Steel.001']} position={[1.43, -0.76, -2.47]} rotation={[Math.PI, 0, Math.PI]} scale={2.72} />
       <group position={[0.94, 0.53, -2.51]} rotation={[Math.PI / 2, 0, 0]} scale={1.21}>
        <mesh geometry={nodes.suspension_rf009.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf009_1.geometry} material={materials['Steel.001']} />
      </group>
      
      <mesh geometry={nodes.Circle004.geometry} name="tyre2" material={materials['Material.001']} position={[-1.12, 0.52, 1.41]} rotation={[0, 0, -Math.PI / 2]} scale={[0.4, 0.45, 0.4]} />
      <mesh geometry={nodes.Cylinder011.geometry} name="tyre_ring_2" material={materials['Stainless Steel']} position={[0.14, -0.02, 4.45]} rotation={[Math.PI, 0, Math.PI]} scale={3.66} />
       <group position={[1.1, 0.5, 1.21]} rotation={[Math.PI / 2, 0, Math.PI]} scale={1.02}>
        <mesh geometry={nodes.hub_rf001.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf001_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf001_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>

      <mesh name="rim_bolt_1" geometry={nodes.Nut001.geometry} material={materials['Steel.001']} position={[1.43, -0.76, 1.46]} rotation={[Math.PI, 0, Math.PI]} scale={2.72} />
       <group position={[0.94, 0.53, 1.42]} rotation={[Math.PI / 2, 0, 0]} scale={1.21}>
        <mesh geometry={nodes.suspension_rf001.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf001_1.geometry} material={materials['Steel.001']} />
      </group>

      <mesh geometry={nodes.Circle009.geometry} material={materials['Material.001']} position={[1.14, 0.52, 1.41]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.4, -0.45, -0.4]} />
      <mesh name="tyre_ring_2" geometry={nodes.Cylinder017.geometry} material={materials['Stainless Steel']} position={[-0.12, -0.02, 4.45]} rotation={[0, 0, -Math.PI]} scale={-3.66} />
       <group position={[-1.09, 0.5, 1.21]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={-1.02}>
        <mesh geometry={nodes.hub_rf002.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf002_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf002_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
      <mesh name="rim_bolt_3" geometry={nodes.Nut002.geometry} material={materials['Steel.001']} position={[-1.42, -0.76, 1.46]} rotation={[0, 0, -Math.PI]} scale={-2.72} />
      <group position={[-0.93, 0.53, 1.42]} rotation={[-Math.PI / 2, 0, 0]} scale={-1.21}>
        <mesh geometry={nodes.suspension_rf002.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf002_1.geometry} material={materials['Steel.001']} />
      </group>
       
      <mesh geometry={nodes.Circle013.geometry} material={materials['Material.001']} position={[1.14, 0.52, -2.54]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.4, -0.45, -0.4]} />
     <mesh name="tyre_ring_3" geometry={nodes.Cylinder021.geometry} material={materials['Stainless Steel']} position={[-0.12, -0.02, 0.5]} rotation={[0, 0, -Math.PI]} scale={-3.66} />
      <group position={[-1.09, 0.5, -2.74]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={-1.02}>
        <mesh geometry={nodes.hub_rf003.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.hub_rf003_1.geometry} material={materials['Stainless Steel']} />
        <mesh geometry={nodes.hub_rf003_2.geometry} material={materials['amg_nadbadge.002']} />
      </group>
       <mesh name="rim_bolt_4" geometry={nodes.Nut003.geometry} material={materials['Steel.001']} position={[-1.42, -0.76, -2.49]} rotation={[0, 0, -Math.PI]} scale={-2.72} />
       <group name="tyre_3" position={[-0.93, 0.53, -2.53]} rotation={[-Math.PI / 2, 0, 0]} scale={-1.21}>
        <mesh geometry={nodes.suspension_rf003.geometry} material={materials['Black 1.001']} />
        <mesh geometry={nodes.suspension_rf003_1.geometry} material={materials['Steel.001']} />
      </group>
     <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004'].geometry} material={materials['Material.020']} position={[0.02, 2.99, 2.73]} rotation={[0.93, 0, 0]} scale={0.25} />
       <mesh name="logo1" geometry={nodes.Plane042.geometry} material={materials['Material.027']} position={[0.02, 1.56, -2.92]} scale={0.03} />
      <mesh name="logo_patch_1" geometry={nodes.Plane041.geometry} material={materials['Material.026']} position={[0.02, 1.56, -2.92]} scale={0.03} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.018']} position={[0.05, 2.96, 3.03]} rotation={[0.94, 0, 0]} scale={0.26} />
      <mesh geometry={nodes.Plane034.geometry} material={materials.Black} position={[-0.56, 2.02, -1.5]} rotation={[0.78, 0, 0]} scale={0.09} />
      <mesh geometry={nodes.Plane031.geometry} material={materials.Dark_metal} position={[1.1, 1.43, -0.67]} rotation={[0.55, 0, -Math.PI / 2]} scale={[0.08, 0.11, 0.08]} />
      <mesh geometry={nodes.Plane030.geometry} material={materials.Dark_metal} position={[-1.05, 1.44, -0.67]} rotation={[0.55, 0, Math.PI / 2]} scale={[0.08, 0.11, 0.08]} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.Dark_metal} position={[1.16, 1.44, 0.62]} rotation={[0.55, 0, -Math.PI / 2]} scale={[0.08, 0.11, 0.08]} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.Dark_metal} position={[-1.07, 1.43, 0.62]} rotation={[0.55, 0, Math.PI / 2]} scale={[0.08, 0.11, 0.08]} />
      <mesh geometry={nodes.Plane027.geometry} material={materials.Dark_metal} position={[-0.89, 1.69, 1.57]} rotation={[2.6, 0, Math.PI / 2]} scale={[0.07, 0.09, 0.07]} />
      <mesh geometry={nodes.Plane026.geometry} material={materials.Dark_metal} position={[0.89, 1.69, 1.56]} rotation={[2.6, 0, -Math.PI / 2]} scale={[0.07, 0.09, 0.07]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} position={[0.96, 0.75, 2.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.04]} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} position={[-0.88, 0.75, 2.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.05, 0.04]} />
      <mesh geometry={nodes.Plane018.geometry} material={materials['Glass - Optimized']} position={[0.01, 2.19, -2.03]} rotation={[1.9, 0, Math.PI]} scale={[0.86, 0.59, 0.16]} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Black plastic old scratched']} position={[0.06, 3.06, 0.81]} rotation={[Math.PI / 2, 0, 0]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.cart_floor.geometry} material={materials.BASE} position={[0.02, 0.79, -0.41]} rotation={[Math.PI, 0, Math.PI]} scale={[1.15, 0.58, 0.58]} />
      <mesh geometry={nodes.front_headlight.geometry} material={materials['Material.010']} position={[0.02, 1.6, -2.63]} />
      <mesh geometry={nodes.interior_light002.geometry} material={materials.Black} position={[0, 3.08, 0.81]} rotation={[-1.32, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.interior_light001.geometry} material={materials['Black 1.001']} position={[-0.17, 3.06, 0.84]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.interior_light.geometry} material={materials['Steel.001']} position={[-0.05, 3.24, 0.82]} rotation={[-1.69, Math.PI / 2, 0]} scale={0.04} />
      <mesh geometry={nodes.front.geometry} material={materials['cart white']} position={[0.02, 1.73, -3.22]} />
      <mesh geometry={nodes.frame.geometry} material={materials.Steel} position={[-0.65, 2.2, 1.08]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Black plastic PL']} position={[-0.9, 0.79, 1.47]} rotation={[1.29, -0.11, -1.45]} scale={[0.72, 0.64, 0.76]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Black Plastic']} position={[0.06, 3.06, 0.87]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.04} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.004']} position={[0.04, 0.18, -0.41]} rotation={[Math.PI, 0, Math.PI]} scale={[3.49, 3.49, 2.94]} />
      <mesh geometry={nodes.Cube088.geometry} material={materials.Steel} position={[0.02, 3.13, -1.91]} rotation={[-2.95, 0, -Math.PI]} scale={0.02} />
      <SeatRestModel/>
      {/* <mesh name="seat-rest-1" geometry={nodes.Cube084.geometry} material={materials['Material.023']} position={[0.03, 1.79, 0.69]} rotation={[1.83, 0, Math.PI]} scale={[0.37, 0.29, 0.35]} /> */}
      {/* <group name="seat-rest-1" position={[0.03, 1.82, -0.5]} rotation={[1.83, 0, Math.PI]} scale={[0.37, 0.35, 0.31]}>
        <mesh geometry={nodes.Cube083_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube083_2.geometry} material={materials['Material.014']} />
      </group> */}
       <group position={[0.03, 1.33, -0.9]} rotation={[Math.PI, 0, Math.PI]} scale={[0.38, 0.35, 0.39]}>
        <mesh geometry={nodes.Cube082_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube082_2.geometry} material={materials['Material.024']} />
      </group>
      <mesh geometry={nodes.Cube080.geometry} material={materials['Black Plastic']} position={[0.03, 1.81, -0.48]} rotation={[1.83, 0, Math.PI]} scale={[0.36, 0.09, 0.34]} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Black Plastic']} position={[0.03, 1.78, 0.7]} rotation={[1.83, 0, Math.PI]} scale={[0.36, 0.29, 0.36]} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Matte Black']} position={[0.02, 0.13, -0.33]} rotation={[Math.PI, 0, Math.PI]} scale={[5.27, 3.09, 2.71]} />
      {/* <group name="seat-rest-3" position={[0.03, 1.92, 1.36]} rotation={[1.34, 0, 0]} scale={[0.37, 0.35, 0.35]}>
        <mesh geometry={nodes.Cube074_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube074_2.geometry} material={materials['Material.014']} />
      </group> */}
      <mesh geometry={nodes.Cube072.geometry} material={materials['Black Plastic']} position={[0.03, 1.9, 1.35]} rotation={[1.34, 0, 0]} scale={[0.36, 0.35, 0.38]} />
      <group position={[0.03, 1.54, 1.77]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.35, 0.38]}>
        <mesh geometry={nodes.Cube071_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube071_2.geometry} material={materials['Material.024']} />
      </group>
      <mesh geometry={nodes.Cube069.geometry} material={materials.Rubber} position={[0.82, 2.45, -0.75]} rotation={[Math.PI, 0, 3.04]} scale={2.02} />
      <mesh geometry={nodes.Cube064.geometry} material={materials.Rubber} position={[-0.88, 2.48, -1.96]} rotation={[-Math.PI, 0, -3.04]} scale={1.96} />
      <mesh geometry={nodes.Cube063.geometry} material={materials.Rubber} position={[-0.88, 2.48, -1.96]} rotation={[-Math.PI, 0, -3.04]} scale={1.96} />
      <mesh geometry={nodes.Cube062.geometry} material={materials.Steel} position={[-0.88, 2.59, -1.91]} rotation={[-Math.PI, 0, -3.04]} scale={1.96} />
      <mesh geometry={nodes.Cube061.geometry} material={materials.Steel} position={[-0.88, 2.53, -1.96]} rotation={[-Math.PI, 0, -3.04]} scale={1.96} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.008']} position={[0.04, 0.06, -4.16]} rotation={[Math.PI, 0, Math.PI]} scale={3.66} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Dark Steel']} position={[-0.01, 0.14, 3.16]} rotation={[Math.PI, 0, Math.PI]} scale={[3.72, 3.72, 6.15]} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Dark Steel']} position={[-0.01, -0.1, -0.98]} rotation={[Math.PI, 0, Math.PI]} scale={[3.15, 3.97, 1.9]} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Black plastic PL']} position={[0.01, 0.88, 1.92]} scale={[0.1, 0.11, 0.1]} />
      <mesh geometry={nodes.Cube054.geometry} material={materials.Steel} position={[0.82, 2.49, -0.75]} rotation={[Math.PI, 0, 3.04]} scale={2.02} />
      <mesh geometry={nodes.Cube053.geometry} material={materials.Steel} position={[0.82, 2.55, -0.7]} rotation={[Math.PI, 0, 3.04]} scale={2.02} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['Black plastic PL']} position={[0.05, 1.23, 1.56]} rotation={[Math.PI, 0, Math.PI]} scale={0.58} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Dark Steel.001']} position={[0.09, 0.5, 0.85]} rotation={[Math.PI, 0, Math.PI]} scale={3.72} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['Black plastic old scratched']} position={[1.19, 0.73, -0.43]} rotation={[Math.PI, 0, Math.PI]} scale={[0.68, 0.35, 0.58]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.Rubber} position={[-1, 1.58, 1.79]} scale={[0.04, 0.04, 0.3]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials.Rubber} position={[1.06, 1.58, 1.79]} scale={[0.04, 0.04, 0.3]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Black plastic PL.001']} position={[0.05, 1.23, 1.56]} rotation={[0, 0, -Math.PI]} scale={[0.52, 0.58, 1.09]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Matte Black']} position={[0.03, 1.83, 0.61]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials.Rubber} position={[0.82, 2.45, -0.75]} rotation={[Math.PI, 0, 3.04]} scale={2.02} />
       <group name="seat-belt-1" position={[0.06, 1.7, 1.56]} rotation={[-0.55, 0, -Math.PI / 2]} scale={[0.08, 0.11, 0.08]}>
        <mesh geometry={nodes.Cube045.geometry} material={materials['Black plastic PL']} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      </group>
      <group position={[-0.03, 1.49, -0.68]} rotation={[-2.6, 0, Math.PI / 2]} scale={[0.08, 0.11, 0.08]}>
        <mesh geometry={nodes.Cube040.geometry} material={materials['Black plastic PL']} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      </group>
     <group name="seat-belt-2" position={[0.02, 1.43, 0.64]} rotation={[-2.6, 0, Math.PI / 2]} scale={[0.08, 0.11, 0.08]}>
        <mesh geometry={nodes.Cube044.geometry} material={materials['Black plastic PL']} />
        <mesh geometry={nodes.Cube044_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      </group>
     <mesh geometry={nodes.Cube011.geometry} material={materials['Matte Black']} position={[0.03, 1.83, -0.63]} />
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} position={[0.03, 1.24, -2.02]} rotation={[-0.51, 0, 0]} scale={[0.1, 0.08, 0.06]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black plastic PL']} position={[0.02, 0.95, -2.74]} rotation={[2.73, 0, Math.PI]} scale={[0.1, 0.08, 0.09]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Dark Steel.001']} position={[-0.13, 1.32, -2.66]} scale={0.21} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Black Plastic']} position={[-0.27, 0.9, -1.69]} rotation={[-2.57, 0, Math.PI]} scale={[-0.08, -0.01, -0.15]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Steel} position={[-0.79, 3.02, 0.9]} scale={0.02} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Black Plastic']} position={[-0.75, 0.9, -1.68]} rotation={[-2.55, 0, -Math.PI]} scale={[-0.15, -0.01, -0.15]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Dark Steel.001']} position={[-0.84, 1.79, -2.14]} rotation={[-3.14, 0.1, 2.44]} scale={[-0.05, -0.02, -0.07]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Dark Steel.001']} position={[0.83, 1.65, -2.14]} rotation={[2.96, 0, -2.47]} scale={[-0.05, -0.02, -0.07]} />
      <mesh geometry={nodes.Circle007.geometry} material={materials['Black Plastic']} position={[0.48, 2.86, -1.91]} rotation={[1.77, 0, 0]} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Glow Glass 02']} position={[0.37, 3.06, 0.83]} rotation={[Math.PI / 2, 0, 0]} scale={-0.03} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Black plastic old scratched']} position={[-0.56, 1.1, -2.01]} rotation={[0.44, 0, 0]} scale={0.06} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Black plastic PL']} position={[-0.85, 0.99, -0.88]} rotation={[Math.PI / 2, 0.38, -Math.PI / 2]} scale={[0.07, 0.08, 0.08]} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Black plastic PL']} position={[0.87, 0.98, -0.88]} rotation={[Math.PI / 2, -0.37, -Math.PI / 2]} scale={[0.07, 0.08, 0.08]} />
      <mesh geometry={nodes.Bolt021.geometry} material={materials['Iron Touched.002']} position={[0.41, 3.11, 0.78]} rotation={[-Math.PI, 0, -3.09]} scale={7.4} />
      <mesh geometry={nodes.Bolt019.geometry} material={materials['Iron Touched.002']} position={[0.41, 3.08, -1.02]} rotation={[Math.PI, 0, 2.83]} scale={7.4} />
      <mesh geometry={nodes.Bolt007.geometry} material={nodes.Bolt007.material} position={[0.02, 1.12, -2.04]} rotation={[-2.12, 0, 0]} scale={0} />
      <mesh geometry={nodes.Bolt005.geometry} material={materials['Iron Touched.001']} position={[0.02, 0.5, -2.74]} rotation={[-Math.PI / 2, 0, 0]} scale={11.53} />
      <mesh geometry={nodes.Bolt004.geometry} material={materials['Iron Touched.001']} position={[0.21, 0.45, -2.74]} rotation={[-Math.PI / 2, 0, 0]} scale={11.53} />
      <mesh geometry={nodes.Bolt003.geometry} material={materials['Iron Touched.001']} position={[-0.16, 0.45, -2.74]} rotation={[-Math.PI / 2, 0, 0]} scale={11.35} />
      <mesh geometry={nodes.Bolt002.geometry} material={materials['Iron Touched.001']} position={[0.2, 0.58, -2.74]} rotation={[-Math.PI / 2, 0, 0]} scale={11.35} />
      <mesh geometry={nodes.Bolt001.geometry} material={materials['Iron Touched.001']} position={[-0.16, 0.58, -2.74]} rotation={[-Math.PI / 2, 0, 0]} scale={11.29} />
      <group position={[1, 1.27, 1.83]} rotation={[2.97, 1.31, -0.32]} scale={[6.19, 6.48, 1.02]}>
        <mesh geometry={nodes.Mesh007.geometry} material={materials['glass_red.001']} />
        <mesh geometry={nodes.Mesh007_1.geometry} material={materials['CHROME.001']} />
        <mesh geometry={nodes.Mesh007_2.geometry} material={materials['Back_emit.001']} />
      </group>
      <mesh geometry={nodes.back.geometry} material={materials['Black plastic PL.002']} position={[0.05, 0.63, 2.44]} rotation={[Math.PI, 0, Math.PI]} scale={[0.79, 0.58, 0.58]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['cart white']} position={[0.02, 0.21, -0.9]} scale={[3.25, 3.23, 1.78]} />
      <mesh geometry={nodes.light.geometry} material={materials['Material.002']} position={[0.02, 1.36, -3.29]} />
      <mesh geometry={nodes.headlight002.geometry} material={materials.metal} position={[0.02, 1.36, -3.29]} />
      <mesh geometry={nodes.headlight001.geometry} material={materials['Material.013']} position={[0.02, 1.34, -3.18]} scale={0.99} />
      <mesh geometry={nodes.headllight_inside.geometry} material={materials['Material.016']} position={[0.02, 1.34, -3.18]} scale={0.99} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Black plastic PL']} position={[0.9, 0.99, -0.88]} rotation={[-Math.PI / 2, 0.38, -Math.PI / 2]} scale={[-0.07, -0.08, -0.08]} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.012']} position={[-0.25, 0.93, -1.68]} scale={0.07} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.003']} position={[-1.18, 0.88, 0.33]} rotation={[0, 0, Math.PI / 2]} scale={0.21} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.018']} position={[-1.18, 0.88, 0.34]} rotation={[0, 0, -Math.PI / 2]} scale={[0.07, 0.18, 0.19]} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.003']} position={[1.21, 0.88, 0.33]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={0.21} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.018']} position={[1.21, 0.88, 0.33]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.07, 0.18, 0.19]} />
       <group name="black-mirror" position={[0.01, 2.82, -1.87]} rotation={[0.22, 0, 0]} scale={0.07}>
        <mesh geometry={nodes.Mesh010.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Mesh010_1.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.007']} position={[0, 2.93, -1.77]} scale={0.23} />
      <group position={[0.03, 1.37, 0.34]} rotation={[Math.PI, 0, Math.PI]} scale={[0.38, 0.35, 0.39]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Material.024']} />
      </group>
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001'].geometry} material={materials['Material.020']} position={[0.02, 1.08, -3.08]} rotation={[1.95, 0, -Math.PI]} scale={0.18} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.018']} position={[0.02, 1, -3.29]} rotation={[1.94, 0, -Math.PI]} scale={0.19} />
      <group position={[-0.97, 1.27, 1.83]} rotation={[-0.23, 1.3, -0.33]} scale={[-6.19, -6.48, -1.02]}>
        <mesh geometry={nodes.Mesh011.geometry} material={materials['glass_red.001']} />
        <mesh geometry={nodes.Mesh011_1.geometry} material={materials['CHROME.001']} />
        <mesh geometry={nodes.Mesh011_2.geometry} material={materials['Back_emit.001']} />
      </group>
      <mesh geometry={nodes.Plane046.geometry} material={materials.rubber} position={[0.03, 1.59, 2.57]} />
      <mesh geometry={nodes.Plane048.geometry} material={materials.rubber} position={[0.02, 1.73, -1.94]} />
      <mesh geometry={nodes.Plane049.geometry} material={materials.rubber} position={[0, 1.2, -1.31]} scale={1.06} />
      <mesh geometry={nodes.Cube017.geometry} material={materials.rubber} position={[-0.76, 2.83, 1.74]} scale={0.07} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.rubber} position={[-0.77, 2.82, 0.29]} scale={0.07} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.rubber} position={[0.03, 0.98, 2.44]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.rubber} position={[0.81, 2.83, -1.05]} scale={0.07} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['cart white']} position={[-0.07, 1.12, 0.08]} scale={0.44} />
      <mesh geometry={nodes.Plane050.geometry} material={materials['Black plastic PL']} position={[-0.4, 1.3, -2.39]} scale={0.4} />
      <mesh geometry={nodes.Plane019.geometry} material={materials['Black plastic PL']} position={[0.45, 1.3, -2.39]} rotation={[-Math.PI, 0, 0]} scale={-0.4} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['cart white']} position={[-1.16, 0.88, 0.46]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['cart white']} position={[-1.16, 0.88, 0.31]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} position={[1.19, 0.88, 0.35]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} position={[1.19, 0.88, 0.2]} rotation={[0, 0, -Math.PI / 2]} scale={0.02} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.rubber} position={[-0.87, 2.95, 1.4]} />
      {/* <group name="steering" position={[-0.53, 2.14, -1.31]}>
        <mesh geometry={nodes.Mesh013.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Mesh013_1.geometry} material={materials['Material.019']} />
      </group> */}
     
      <mesh name="engine-cover" geometry={nodes.dashboard.geometry} material={materials['Material.022']} position={[-0.01, 1.73, -1.84]} rotation={[0, 1.57, 0]} scale={0.24} />
      <group position={[0.09, 1.68, -1.85]} scale={0.1}>
        <mesh geometry={nodes.Mesh015.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Mesh015_1.geometry} material={materials['Material.028']} />
      </group>
     <group position={[-0.09, 1.49, -1.79]} scale={0.12}>
        <mesh geometry={nodes.Mesh016.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Mesh016_1.geometry} material={materials['Material.029']} />
      </group>
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.030']} position={[0.09, 1.42, -1.7]} scale={0.02} />      {/* <mesh geometry={nodes.Cube032.geometry} material={materials['Material.030']} position={[0.04, 1.42, -1.7]} scale={0.02} /> */}
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.031']} position={[-0.02, 1.44, -1.71]} scale={0.02} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.032']} position={[-0.2, 1.64, -1.85]} scale={0.04} />
      <mesh geometry={nodes.Circle008.geometry} material={materials['Material.025']} position={[-0.57, 1.92, -1.52]} rotation={[0.52, 0, 0]} scale={0.03} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.033']} position={[-0.63, 1.9, -1.53]} rotation={[0.34, 0.27, 1.22]} scale={0.04} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.034']} position={[-0.58, 1.86, -1.48]} rotation={[2.02, 0, 0]} scale={0.06} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['cart white.001']} position={[0.02, 1.73, -1.99]} />
      <mesh geometry={nodes.WIPERS001.geometry} material={materials['Black plastic PL.003']} position={[0.44, 2.95, -1.81]} rotation={[0, 1.57, 0]} scale={[1, 1, 0.74]} />
      <mesh geometry={nodes.Circle010.geometry} material={materials['Black Plastic.001']} position={[0.49, 3.02, -1.77]} rotation={[1.77, 0, 0]} />
      <mesh geometry={nodes.ROOF001.geometry} material={materials['Dark Steel.001']} position={[0.02, 3.15, 0.84]} rotation={[Math.PI, 0, Math.PI]} scale={[1.34, 1.08, 1.58]} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Steel.002']} position={[0.64, 1.23, -2.99]} rotation={[-2.9, 0, 3.11]} scale={[0.13, 0.13, 0]} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Steel.002']} position={[-0.56, 1.2, -2.99]} rotation={[-2.86, 0, -2.05]} scale={[0.13, 0.13, 0]} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Dark Steel']} position={[0.01, 0.41, -3]} rotation={[Math.PI, 0, Math.PI]} scale={[0.35, 0.03, 0.03]} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials['Dark Steel']} position={[0.02, 1.22, -2.98]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.05, 1.14, 0.05]} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials['Dark Steel']} position={[0.02, 1.43, -2.97]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.02, 0.32, 0.02]} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials['Rough Iron Steel']} position={[0.02, 0.12, -1.58]} rotation={[Math.PI, 0, Math.PI]} scale={[3.1, 1.68, 1.68]} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Steel.002']} position={[0.03, 1.28, -2.99]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.52, 0.58, 0.01]} />
      <mesh geometry={nodes.Plane022.geometry} material={materials['Rough Iron Steel']} position={[0.02, 0.63, -2.98]} rotation={[Math.PI, 0, Math.PI]} scale={[0.36, 0.58, 0.06]}>
        <mesh geometry={nodes.Plane021_1.geometry} material={materials['Material.009']} position={[-0.08, 0.68, 1.2]} rotation={[2.07, 0, 0]} scale={[0.37, 1.85, 0.09]} />
      </mesh>
      <mesh geometry={nodes.Plane023.geometry} material={materials['Dark Steel']} position={[0.02, 0.4, -2.95]} rotation={[Math.PI, 0, Math.PI]} scale={[0.24, 0.57, 0.05]} />
    </group>
  )
}

useGLTF.preload('/models/kart.glb')
