/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/models/Kartsixseat.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Features from './Feature'

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh
    Object_0_1: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder016: THREE.Mesh
    Plane016: THREE.Mesh
    Cube015: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy001']: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy']: THREE.Mesh
    Cube001: THREE.Mesh
    Circle014: THREE.Mesh
    Circle004: THREE.Mesh
    Circle006: THREE.Mesh
    Cylinder026: THREE.Mesh
    hub_rf010: THREE.Mesh
    hub_rf010_1: THREE.Mesh
    hub_rf010_2: THREE.Mesh
    suspension_rf009: THREE.Mesh
    suspension_rf009_1: THREE.Mesh
    Cylinder011: THREE.Mesh
    hub_rf001: THREE.Mesh
    hub_rf001_1: THREE.Mesh
    hub_rf001_2: THREE.Mesh
    suspension_rf001: THREE.Mesh
    suspension_rf001_1: THREE.Mesh
    Cylinder017: THREE.Mesh
    hub_rf002: THREE.Mesh
    hub_rf002_1: THREE.Mesh
    hub_rf002_2: THREE.Mesh
    suspension_rf002: THREE.Mesh
    suspension_rf002_1: THREE.Mesh
    Cylinder021: THREE.Mesh
    hub_rf003: THREE.Mesh
    hub_rf003_1: THREE.Mesh
    hub_rf003_2: THREE.Mesh
    suspension_rf003: THREE.Mesh
    suspension_rf003_1: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004']: THREE.Mesh
    Plane042: THREE.Mesh
    Plane041: THREE.Mesh
    Plane039: THREE.Mesh
    Plane031: THREE.Mesh
    Plane030: THREE.Mesh
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
    Cylinder004: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cube089: THREE.Mesh
    Cube088: THREE.Mesh
    Cube084: THREE.Mesh
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
    Cube002: THREE.Mesh
    Cube: THREE.Mesh
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
    Cylinder001: THREE.Mesh
    Cylinder003: THREE.Mesh
    Mesh007: THREE.Mesh
    Mesh007_1: THREE.Mesh
    Mesh007_2: THREE.Mesh
    back: THREE.Mesh
    Cube025: THREE.Mesh
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
    Cube003_1: THREE.Mesh
    Cube003_2: THREE.Mesh
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
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cube024: THREE.Mesh
    dashboard: THREE.Mesh
    Mesh015: THREE.Mesh
    Mesh015_1: THREE.Mesh
    Mesh016: THREE.Mesh
    Mesh016_1: THREE.Mesh
    Cube031: THREE.Mesh
    Cube032: THREE.Mesh
    Cylinder008: THREE.Mesh
    Cylinder009: THREE.Mesh
    Circle008: THREE.Mesh
    Cylinder012: THREE.Mesh
    Cube033: THREE.Mesh
    Plane051: THREE.Mesh
    WIPERS001: THREE.Mesh
    ROOF001: THREE.Mesh
    Cube034: THREE.Mesh
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
    light: THREE.Mesh
    Circle012: THREE.Mesh
    Circle013: THREE.Mesh
    Windshield: THREE.Mesh
    Cube007: THREE.Mesh
    Curve: THREE.Mesh
    Curve001: THREE.Mesh
    mojo: THREE.Mesh
    mojo001: THREE.Mesh
  }
  materials: {
    shed: THREE.MeshStandardMaterial
    Concrete_Wall_vhjldck: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']: THREE.MeshStandardMaterial
    ['0black']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Stainless Steel']: THREE.MeshStandardMaterial
    ['Black 1.001']: THREE.MeshStandardMaterial
    ['amg_nadbadge.002']: THREE.MeshStandardMaterial
    ['Steel.001']: THREE.MeshStandardMaterial
    ['Material.020']: THREE.MeshStandardMaterial
    ['Material.027']: THREE.MeshStandardMaterial
    ['Material.026']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
    Dark_metal: THREE.MeshStandardMaterial
    ['Tarp Sports Cherry Red Black Topstitch']: THREE.MeshStandardMaterial
    ['Black plastic old scratched']: THREE.MeshStandardMaterial
    BASE: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    ['cart white']: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    ['Black plastic PL']: THREE.MeshStandardMaterial
    ['Black Plastic']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Matte Black']: THREE.MeshStandardMaterial
    ['Material.014']: THREE.MeshStandardMaterial
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
    metal: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshPhysicalMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    rubber: THREE.MeshStandardMaterial
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
    ['Material.044']: THREE.MeshStandardMaterial
    ['Glass.001']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    mojo: THREE.MeshStandardMaterial
  }
}

export function SixSeaterKartModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Kartsixseat.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <Features/>
      <mesh geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} />
      <mesh geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} />
      <mesh geometry={nodes.Plane016.geometry} material={materials['Material.015']} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy001'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy']} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['0black']} />
      <mesh geometry={nodes.Circle014.geometry} material={materials['0black']} />
      <mesh geometry={nodes.Circle004.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Circle006.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004'].geometry} material={materials['Material.020']} />
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.027']} />
      <mesh geometry={nodes.Plane041.geometry} material={materials['Material.026']} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Plane031.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane030.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane027.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane026.geometry} material={materials.Dark_metal} />
      <mesh geometry={nodes.Plane025.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} />
      <mesh geometry={nodes.Plane024.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch']} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Black plastic old scratched']} />
      <mesh geometry={nodes.cart_floor.geometry} material={materials.BASE} />
      <mesh geometry={nodes.front_headlight.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.interior_light002.geometry} material={materials.Black} />
      <mesh geometry={nodes.interior_light001.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.interior_light.geometry} material={materials['Steel.001']} />
      <mesh geometry={nodes.front.geometry} material={materials['cart white']} />
      <mesh geometry={nodes.frame.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Cube088.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube080.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Matte Black']} />
      <mesh geometry={nodes.Cube072.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube069.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube064.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube063.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube062.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube061.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube054.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube053.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube051.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Dark Steel.001']} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['Black plastic old scratched']} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube027.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['Black plastic PL.001']} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Matte Black']} />
      <mesh geometry={nodes.Cube018.geometry} material={materials.Rubber} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Matte Black']} />
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Dark Steel.001']} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Steel} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Black Plastic']} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Dark Steel.001']} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Dark Steel.001']} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Glow Glass 02']} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Black plastic old scratched']} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Bolt021.geometry} material={materials['Iron Touched.002']} />
      <mesh geometry={nodes.Bolt019.geometry} material={materials['Iron Touched.002']} />
      <mesh geometry={nodes.Bolt007.geometry} material={nodes.Bolt007.material} />
      <mesh geometry={nodes.Bolt005.geometry} material={materials['Iron Touched.001']} />
      <mesh geometry={nodes.Bolt004.geometry} material={materials['Iron Touched.001']} />
      <mesh geometry={nodes.Bolt003.geometry} material={materials['Iron Touched.001']} />
      <mesh geometry={nodes.Bolt002.geometry} material={materials['Iron Touched.001']} />
      <mesh geometry={nodes.Bolt001.geometry} material={materials['Iron Touched.001']} />
      <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
      <mesh geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} />
      <mesh geometry={nodes.back.geometry} material={materials['Black plastic PL.002']} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['cart white']} />
      <mesh geometry={nodes.headlight002.geometry} material={materials.metal} />
      <mesh geometry={nodes.headlight001.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.headllight_inside.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.009']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001'].geometry} material={materials['Material.020']} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.018']} />
      <mesh geometry={nodes.Plane046.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Plane048.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Plane049.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube017.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube022.geometry} material={materials['cart white']} />
      <mesh geometry={nodes.Plane050.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Plane019.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['cart white']} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['cart white']} />
      <mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} />
      <mesh geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.rubber} />
      <mesh geometry={nodes.dashboard.geometry} material={materials['Material.022']} />
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.030']} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['Material.030']} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.031']} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.032']} />
      <mesh geometry={nodes.Circle008.geometry} material={materials['Material.025']} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials['Material.033']} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.034']} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['cart white.001']} />
      <mesh geometry={nodes.WIPERS001.geometry} material={materials['Black plastic PL.003']} />
      <mesh geometry={nodes.ROOF001.geometry} material={materials['Dark Steel.001']} />
      <mesh geometry={nodes.Cube034.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Steel.002']} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Steel.002']} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials['Rough Iron Steel']} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Steel.002']} />
      <mesh geometry={nodes.Plane022.geometry} material={materials['Rough Iron Steel']}>
        <mesh geometry={nodes.Plane021_1.geometry} material={materials['Material.044']} />
      </mesh>
      <mesh geometry={nodes.Plane023.geometry} material={materials['Dark Steel']} />
      <mesh geometry={nodes.light.geometry} material={materials['Glass.001']} />
      <mesh geometry={nodes.Circle012.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Circle013.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Windshield.geometry} material={materials['Glass.001']} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Curve.geometry} material={materials['Material.017']} />
      <mesh geometry={nodes.Curve001.geometry} material={materials['Material.017']} />
      <mesh geometry={nodes.mojo.geometry} material={materials.mojo} />
      <mesh geometry={nodes.mojo001.geometry} material={materials.mojo} />
      <mesh geometry={nodes.Object_0.geometry} material={materials.shed} />
      <mesh geometry={nodes.Object_0_1.geometry} material={materials.Concrete_Wall_vhjldck} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.015']} />
      <mesh geometry={nodes.hub_rf010.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.hub_rf010_1.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.hub_rf010_2.geometry} material={materials['amg_nadbadge.002']} />
      <mesh geometry={nodes.suspension_rf009.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.suspension_rf009_1.geometry} material={materials['Steel.001']} />
      <mesh geometry={nodes.hub_rf001.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.hub_rf001_1.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.hub_rf001_2.geometry} material={materials['amg_nadbadge.002']} />
      <mesh geometry={nodes.suspension_rf001.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.suspension_rf001_1.geometry} material={materials['Steel.001']} />
      <mesh geometry={nodes.hub_rf002.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.hub_rf002_1.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.hub_rf002_2.geometry} material={materials['amg_nadbadge.002']} />
      <mesh geometry={nodes.suspension_rf002.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.suspension_rf002_1.geometry} material={materials['Steel.001']} />
      <mesh geometry={nodes.hub_rf003.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.hub_rf003_1.geometry} material={materials['Stainless Steel']} />
      <mesh geometry={nodes.hub_rf003_2.geometry} material={materials['amg_nadbadge.002']} />
      <mesh geometry={nodes.suspension_rf003.geometry} material={materials['Black 1.001']} />
      <mesh geometry={nodes.suspension_rf003_1.geometry} material={materials['Steel.001']} />
      <mesh geometry={nodes.Cube082_1.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube082_2.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube074_1.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube074_2.geometry} material={materials['Material.014']} />
      <mesh geometry={nodes.Cube071_1.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube071_2.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube045.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube045_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      <mesh geometry={nodes.Cube040.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube040_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['Black plastic PL']} />
      <mesh geometry={nodes.Cube044_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.001']} />
      <mesh geometry={nodes.Mesh007.geometry} material={materials['glass_red.001']} />
      <mesh geometry={nodes.Mesh007_1.geometry} material={materials['CHROME.001']} />
      <mesh geometry={nodes.Mesh007_2.geometry} material={materials['Back_emit.001']} />
      <mesh geometry={nodes.Mesh010.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Mesh010_1.geometry} material={materials['Material.007']} />
      <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Mesh011.geometry} material={materials['glass_red.001']} />
      <mesh geometry={nodes.Mesh011_1.geometry} material={materials['CHROME.001']} />
      <mesh geometry={nodes.Mesh011_2.geometry} material={materials['Back_emit.001']} />
      <mesh geometry={nodes.Mesh015.geometry} material={materials['Material.022']} />
      <mesh geometry={nodes.Mesh015_1.geometry} material={materials['Material.028']} />
      <mesh geometry={nodes.Mesh016.geometry} material={materials['Material.022']} />
      <mesh geometry={nodes.Mesh016_1.geometry} material={materials['Material.029']} />
    </group>
  )
}

useGLTF.preload('/models/Kartsixseat.glb')
