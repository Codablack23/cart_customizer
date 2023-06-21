/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Kart_Four_Seater2.glb --t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Feature4 } from './Feature'

type GLTFResult = GLTF & {
  nodes: {
    Cube086: THREE.Mesh
    Cube087: THREE.Mesh
    Cube090: THREE.Mesh
    Cylinder040: THREE.Mesh
    Cylinder041: THREE.Mesh
    Cylinder043: THREE.Mesh
    Plane020: THREE.Mesh
    Plane022: THREE.Mesh
    Plane021: THREE.Mesh
    Plane023: THREE.Mesh
    Cylinder010: THREE.Mesh
    Cylinder016: THREE.Mesh
    Object_0: THREE.Mesh
    Object_0_1: THREE.Mesh
    Cube014: THREE.Mesh
    Cube017: THREE.Mesh
    Cube020: THREE.Mesh
    Cube026: THREE.Mesh
    Cube027: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy001']: THREE.Mesh
    Cube034: THREE.Mesh
    Circle007: THREE.Mesh
    ['WhatsApp_Image_2023-05-06_at_95846_AM_copy002']: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder026: THREE.Mesh
    hub_rf004: THREE.Mesh
    hub_rf004_1: THREE.Mesh
    hub_rf004_2: THREE.Mesh
    suspension_rf004: THREE.Mesh
    suspension_rf004_1: THREE.Mesh
    Cylinder011: THREE.Mesh
    hub_rf005: THREE.Mesh
    hub_rf005_1: THREE.Mesh
    hub_rf005_2: THREE.Mesh
    suspension_rf005: THREE.Mesh
    suspension_rf005_1: THREE.Mesh
    Cylinder017: THREE.Mesh
    hub_rf006: THREE.Mesh
    hub_rf006_1: THREE.Mesh
    hub_rf006_2: THREE.Mesh
    suspension_rf006: THREE.Mesh
    suspension_rf006_1: THREE.Mesh
    Cylinder021: THREE.Mesh
    hub_rf007: THREE.Mesh
    hub_rf007_1: THREE.Mesh
    hub_rf007_2: THREE.Mesh
    suspension_rf007: THREE.Mesh
    suspension_rf007_1: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004']: THREE.Mesh
    Plane042: THREE.Mesh
    Plane041: THREE.Mesh
    Plane039: THREE.Mesh
    Plane031: THREE.Mesh
    Plane030: THREE.Mesh
    Plane029: THREE.Mesh
    Plane028: THREE.Mesh
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
    Cube082_1: THREE.Mesh
    Cube082_2: THREE.Mesh
    Cube080: THREE.Mesh
    Cube078: THREE.Mesh
    Cube076: THREE.Mesh
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
    Cube050: THREE.Mesh
    Cube046: THREE.Mesh
    Cube023: THREE.Mesh
    Cube018: THREE.Mesh
    Cube064_1: THREE.Mesh
    Cube064_2: THREE.Mesh
    Cube065: THREE.Mesh
    Cube065_1: THREE.Mesh
    Cube011: THREE.Mesh
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
    Circle001: THREE.Mesh
    Circle: THREE.Mesh
    Bolt021: THREE.Mesh
    Bolt007: THREE.Mesh
    Bolt005: THREE.Mesh
    Bolt004: THREE.Mesh
    Bolt003: THREE.Mesh
    Bolt002: THREE.Mesh
    Bolt001: THREE.Mesh
    Mesh027: THREE.Mesh
    Mesh027_1: THREE.Mesh
    Mesh027_2: THREE.Mesh
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
    Mesh030: THREE.Mesh
    Mesh030_1: THREE.Mesh
    Plane044: THREE.Mesh
    Cube085: THREE.Mesh
    Cube085_1: THREE.Mesh
    ['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001']: THREE.Mesh
    Plane045: THREE.Mesh
    Mesh031: THREE.Mesh
    Mesh031_1: THREE.Mesh
    Mesh031_2: THREE.Mesh
    Plane048: THREE.Mesh
    Plane049: THREE.Mesh
    Cube019: THREE.Mesh
    Cube021: THREE.Mesh
    Cube092: THREE.Mesh
    Cube092_1: THREE.Mesh
    Plane050: THREE.Mesh
    Plane019: THREE.Mesh
    Cylinder: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder006: THREE.Mesh
    Cube024: THREE.Mesh
    dashboard: THREE.Mesh
    Mesh035: THREE.Mesh
    Mesh035_1: THREE.Mesh
    Mesh036: THREE.Mesh
    Mesh036_1: THREE.Mesh
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
    Cube028: THREE.Mesh
    Circle014: THREE.Mesh
    Circle004: THREE.Mesh
    Circle006: THREE.Mesh
    Circle009: THREE.Mesh
    Plane016: THREE.Mesh
    Plane002: THREE.Mesh
    Plane001: THREE.Mesh
    Cube015: THREE.Mesh
    Cube007: THREE.Mesh
    Cube006: THREE.Mesh
    light: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    WindShield: THREE.Mesh
    Cube036: THREE.Mesh
  }
  materials: {
    ['Steel.005']: THREE.MeshStandardMaterial
    ['Dark Steel.002']: THREE.MeshStandardMaterial
    ['Rough Iron Steel.001']: THREE.MeshStandardMaterial
    ['Material.038']: THREE.MeshStandardMaterial
    shed: THREE.MeshStandardMaterial
    Concrete_Wall_vhjldck: THREE.MeshStandardMaterial
    ['Black Plastic.001']: THREE.MeshStandardMaterial
    ['Black plastic old scratched.001']: THREE.MeshStandardMaterial
    ['glass_red.002']: THREE.MeshStandardMaterial
    ['WhatsApp Image 2023-05-06 at 9.58.46 AM copy.001']: THREE.MeshStandardMaterial
    ['0black.001']: THREE.MeshStandardMaterial
    ['Black plastic PL.004']: THREE.MeshStandardMaterial
    ['Stainless Steel.001']: THREE.MeshStandardMaterial
    ['Black 1.002']: THREE.MeshStandardMaterial
    ['amg_nadbadge.001']: THREE.MeshStandardMaterial
    ['Steel.003']: THREE.MeshStandardMaterial
    ['Material.021']: THREE.MeshStandardMaterial
    ['Material.024']: THREE.MeshStandardMaterial
    ['Material.035']: THREE.MeshStandardMaterial
    ['Material.036']: THREE.MeshStandardMaterial
    ['Dark_metal.001']: THREE.MeshStandardMaterial
    ['BASE.001']: THREE.MeshStandardMaterial
    ['Material.037']: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    ['cart white.002']: THREE.MeshStandardMaterial
    ['Steel.004']: THREE.MeshStandardMaterial
    ['Material.039']: THREE.MeshStandardMaterial
    ['Material.040']: THREE.MeshStandardMaterial
    ['Material.042']: THREE.MeshStandardMaterial
    ['Matte Black.001']: THREE.MeshStandardMaterial
    ['Rubber.001']: THREE.MeshStandardMaterial
    ['Material.043']: THREE.MeshStandardMaterial
    ['Black plastic PL.005']: THREE.MeshStandardMaterial
    ['Dark Steel.003']: THREE.MeshStandardMaterial
    ['Tarp Sports Cherry Red Black Topstitch.002']: THREE.MeshStandardMaterial
    ['Glow Glass 02.001']: THREE.MeshStandardMaterial
    ['Iron Touched.003']: THREE.MeshStandardMaterial
    ['Iron Touched.004']: THREE.MeshStandardMaterial
    ['CHROME.002']: THREE.MeshStandardMaterial
    ['Back_emit.002']: THREE.MeshStandardMaterial
    ['metal.001']: THREE.MeshStandardMaterial
    ['Material.045']: THREE.MeshStandardMaterial
    ['Material.046']: THREE.MeshStandardMaterial
    ['Material.047']: THREE.MeshStandardMaterial
    ['Material.048']: THREE.MeshStandardMaterial
    ['Material.049']: THREE.MeshStandardMaterial
    ['Material.050']: THREE.MeshStandardMaterial
    ['Material.051']: THREE.MeshStandardMaterial
    ['rubber.001']: THREE.MeshStandardMaterial
    ['Material.052']: THREE.MeshStandardMaterial
    ['Material.055']: THREE.MeshStandardMaterial
    ['Material.056']: THREE.MeshStandardMaterial
    ['Material.057']: THREE.MeshStandardMaterial
    ['Material.058']: THREE.MeshStandardMaterial
    ['Material.059']: THREE.MeshStandardMaterial
    ['Material.060']: THREE.MeshStandardMaterial
    ['Material.061']: THREE.MeshStandardMaterial
    ['Material.062']: THREE.MeshStandardMaterial
    ['Material.063']: THREE.MeshStandardMaterial
    ['cart white.003']: THREE.MeshStandardMaterial
    ['Black plastic PL.006']: THREE.MeshStandardMaterial
    ['Black Plastic.002']: THREE.MeshStandardMaterial
    ['Material.064']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['Material.023']: THREE.MeshStandardMaterial
  }
}

export function FourSeaterModel2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/Kart_Four_Seater2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <Feature4/>
      <spotLight intensity={2717.571} angle={0.99} penumbra={1} decay={2} position={[-0.565, 5.068, 8.636]} rotation={[0.581, 0.002, -1.379]} scale={-1} />
      <spotLight intensity={8696.226} angle={0.99} penumbra={1} decay={2} position={[-11.722, 6.086, 0.738]} rotation={[1.782, -1.019, 0.197]} scale={-1} />
      <spotLight intensity={8696.226} angle={0.99} penumbra={1} decay={2} position={[11.404, 6.086, 0.738]} rotation={[-1.359, -1.019, 0.197]} />
      <spotLight intensity={27175.707} angle={0.577} penumbra={1} decay={2} position={[3.036, 3.77, 1.459]} rotation={[-0.761, 0.787, -0.352]} />
      <spotLight intensity={27175.707} angle={0.778} penumbra={1} decay={2} color="#e8fffe" position={[-4.397, 4.022, 4.811]} rotation={[-0.604, -0.74, 1.055]} />
      <spotLight intensity={27175.707} angle={0.884} penumbra={1} decay={2} color="#e8fffe" position={[-2.34, 4.973, -4.552]} rotation={[-2.091, -0.381, 0.057]} />
      <pointLight intensity={43481.13} decay={2} color="#e4ff6b" position={[14.929, 4.894, -19.195]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#89ffcd" position={[14.929, 4.894, 0.724]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#ffd368" position={[14.929, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#a0c9ff" position={[4.614, 7.581, 18.063]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#a0c9ff" position={[-5.996, 7.581, 19.978]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#e4ff6b" position={[-16.779, 4.894, -19.195]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={883.21} decay={2} position={[2.205, 2.524, -3.281]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#ffd368" position={[-16.779, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={54351.413} decay={2} position={[-5.989, 5.904, -1.005]} rotation={[-1.839, 0.602, 1.932]} />
      <pointLight intensity={12837.804} decay={2} color="#a0c9ff" position={[-5.996, 7.581, 19.978]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={12837.804} decay={2} color="#ffd368" position={[-16.779, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#a0c9ff" position={[4.614, 7.581, -19.24]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#a0c9ff" position={[-5.996, 7.581, -19.24]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#89ffcd" position={[-16.415, 4.894, 0.724]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#fcf2ff" position={[4.964, 7.581, 0.239]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={43481.13} decay={2} color="#fcf2ff" position={[-6.024, 7.581, 0.239]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight intensity={54351.413} decay={2} position={[4.076, 5.904, -1.005]} rotation={[-1.839, 0.602, 1.932]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['Black plastic old scratched.001']} />
      <mesh geometry={nodes.Cube026.geometry} material={materials['glass_red.002']} />
      <mesh geometry={nodes.Cube027.geometry} material={materials['glass_red.002']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy001'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy.001']} />
      <mesh geometry={nodes.Cube034.geometry} material={materials['0black.001']} />
      <mesh geometry={nodes.Circle007.geometry} material={materials['0black.001']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-05-06_at_95846_AM_copy002'].geometry} material={materials['WhatsApp Image 2023-05-06 at 9.58.46 AM copy.001']} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['Black plastic PL.004']} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)004'].geometry} material={materials['Material.021']} />
      <mesh geometry={nodes.Plane042.geometry} material={materials['Material.024']} />
      <mesh geometry={nodes.Plane041.geometry} material={materials['Material.035']} />
      <mesh geometry={nodes.Plane039.geometry} material={materials['Material.036']} />
      <mesh geometry={nodes.Plane031.geometry} material={materials['Dark_metal.001']} />
      <mesh geometry={nodes.Plane030.geometry} material={materials['Dark_metal.001']} />
      <mesh geometry={nodes.Plane029.geometry} material={materials['Dark_metal.001']} />
      <mesh geometry={nodes.Plane028.geometry} material={materials['Dark_metal.001']} />
      <mesh geometry={nodes.Plane014.geometry} material={materials['Black plastic old scratched.001']} />
      <mesh geometry={nodes.cart_floor.geometry} material={materials['BASE.001']} />
      <mesh geometry={nodes.front_headlight.geometry} material={materials['Material.037']} />
      <mesh geometry={nodes.interior_light002.geometry} material={materials['Black.001']} />
      <mesh geometry={nodes.interior_light001.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.interior_light.geometry} material={materials['Steel.003']} />
      <mesh geometry={nodes.front.geometry} material={materials['cart white.002']} />
      <mesh geometry={nodes.frame.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube089.geometry} material={materials['Material.039']} />
      <mesh geometry={nodes.Cube088.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube084.geometry} material={materials['Material.040']} />
      <mesh geometry={nodes.Cube080.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube078.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube076.geometry} material={materials['Matte Black.001']} />
      <mesh geometry={nodes.Cube069.geometry} material={materials['Rubber.001']} />
      <mesh geometry={nodes.Cube064.geometry} material={materials['Rubber.001']} />
      <mesh geometry={nodes.Cube063.geometry} material={materials['Rubber.001']} />
      <mesh geometry={nodes.Cube062.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube061.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube059.geometry} material={materials['Material.043']} />
      <mesh geometry={nodes.Cube058.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cube057.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cube055.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Cube054.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube053.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube050.geometry} material={materials['Dark Steel.003']} />
      <mesh geometry={nodes.Cube046.geometry} material={materials['Black plastic old scratched.001']} />
      <mesh geometry={nodes.Cube023.geometry} material={materials['Matte Black.001']} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Rubber.001']} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Matte Black.001']} />
      <mesh geometry={nodes.Cube010.geometry} material={nodes.Cube010.material} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Dark Steel.003']} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Steel.004']} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Black Plastic.001']} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Dark Steel.003']} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Dark Steel.003']} />
      <mesh geometry={nodes.Circle003.geometry} material={materials['Glow Glass 02.001']} />
      <mesh geometry={nodes.Circle002.geometry} material={materials['Black plastic old scratched.001']} />
      <mesh geometry={nodes.Circle001.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Bolt021.geometry} material={materials['Iron Touched.003']} />
      <mesh geometry={nodes.Bolt007.geometry} material={nodes.Bolt007.material} />
      <mesh geometry={nodes.Bolt005.geometry} material={materials['Iron Touched.004']} />
      <mesh geometry={nodes.Bolt004.geometry} material={materials['Iron Touched.004']} />
      <mesh geometry={nodes.Bolt003.geometry} material={materials['Iron Touched.004']} />
      <mesh geometry={nodes.Bolt002.geometry} material={materials['Iron Touched.004']} />
      <mesh geometry={nodes.Bolt001.geometry} material={materials['Iron Touched.004']} />
      <mesh geometry={nodes.Cube025.geometry} material={materials['cart white.002']} />
      <mesh geometry={nodes.headlight002.geometry} material={materials['metal.001']} />
      <mesh geometry={nodes.headlight001.geometry} material={materials['Material.045']} />
      <mesh geometry={nodes.headllight_inside.geometry} material={materials['Material.046']} />
      <mesh geometry={nodes.Circle005.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Plane032.geometry} material={materials['Material.047']} />
      <mesh geometry={nodes.Plane035.geometry} material={materials['Material.048']} />
      <mesh geometry={nodes.Plane037.geometry} material={materials['Material.036']} />
      <mesh geometry={nodes.Plane038.geometry} material={materials['Material.048']} />
      <mesh geometry={nodes.Plane043.geometry} material={materials['Material.036']} />
      <mesh geometry={nodes.Plane044.geometry} material={materials['Material.051']} />
      <mesh geometry={nodes['WhatsApp_Image_2023-03-19_at_11711_AM_(1)001'].geometry} material={materials['Material.021']} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['Material.036']} />
      <mesh geometry={nodes.Plane048.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.Plane049.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.Plane050.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Plane019.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['cart white.002']} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['cart white.002']} />
      <mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} />
      <mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} />
      <mesh geometry={nodes.Cube024.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.dashboard.geometry} material={materials['Material.055']} />
      <mesh geometry={nodes.Cube031.geometry} material={materials['Material.058']} />
      <mesh geometry={nodes.Cube032.geometry} material={materials['Material.058']} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['Material.059']} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.060']} />
      <mesh geometry={nodes.Circle008.geometry} material={materials['Material.061']} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.062']} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['Material.063']} />
      <mesh geometry={nodes.Plane051.geometry} material={materials['cart white.003']} />
      <mesh geometry={nodes.WIPERS001.geometry} material={materials['Black plastic PL.006']} />
      <mesh geometry={nodes.Circle010.geometry} material={materials['Black Plastic.002']} />
      <mesh geometry={nodes.ROOF001.geometry} material={materials['Dark Steel.003']} />
      <mesh geometry={nodes.Cube028.geometry} material={materials['rubber.001']} />
      <mesh geometry={nodes.Circle014.geometry} material={materials['Material.064']} />
      <mesh geometry={nodes.Circle004.geometry} material={materials['Material.064']} />
      <mesh geometry={nodes.Circle006.geometry} material={materials['Material.064']} />
      <mesh geometry={nodes.Circle009.geometry} material={materials['Material.064']} />
      <mesh geometry={nodes.Plane016.geometry} material={materials['Material.015']} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.light.geometry} material={materials.Glass} />
      <mesh geometry={nodes.WindShield.geometry} material={materials.Glass} />
      <mesh geometry={nodes.Cube036.geometry} material={materials['Material.023']} />
      <mesh geometry={nodes.Cube086.geometry} material={materials['Steel.005']} />
      <mesh geometry={nodes.Cube087.geometry} material={materials['Steel.005']} />
      <mesh geometry={nodes.Cube090.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials['Rough Iron Steel.001']} />
      <mesh geometry={nodes.Plane020.geometry} material={materials['Steel.005']} />
      <mesh geometry={nodes.Plane022.geometry} material={materials['Rough Iron Steel.001']}>
        <mesh geometry={nodes.Plane021.geometry} material={materials['Material.038']} />
      </mesh>
      <mesh geometry={nodes.Plane023.geometry} material={materials['Dark Steel.002']} />
      <mesh geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} />
      <mesh geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} />
      <mesh geometry={nodes.Object_0.geometry} material={materials.shed} />
      <mesh geometry={nodes.Object_0_1.geometry} material={materials.Concrete_Wall_vhjldck} />
      <mesh geometry={nodes.hub_rf004.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.hub_rf004_1.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.hub_rf004_2.geometry} material={materials['amg_nadbadge.001']} />
      <mesh geometry={nodes.suspension_rf004.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.suspension_rf004_1.geometry} material={materials['Steel.003']} />
      <mesh geometry={nodes.hub_rf005.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.hub_rf005_1.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.hub_rf005_2.geometry} material={materials['amg_nadbadge.001']} />
      <mesh geometry={nodes.suspension_rf005.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.suspension_rf005_1.geometry} material={materials['Steel.003']} />
      <mesh geometry={nodes.hub_rf006.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.hub_rf006_1.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.hub_rf006_2.geometry} material={materials['amg_nadbadge.001']} />
      <mesh geometry={nodes.suspension_rf006.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.suspension_rf006_1.geometry} material={materials['Steel.003']} />
      <mesh geometry={nodes.hub_rf007.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.hub_rf007_1.geometry} material={materials['Stainless Steel.001']} />
      <mesh geometry={nodes.hub_rf007_2.geometry} material={materials['amg_nadbadge.001']} />
      <mesh geometry={nodes.suspension_rf007.geometry} material={materials['Black 1.002']} />
      <mesh geometry={nodes.suspension_rf007_1.geometry} material={materials['Steel.003']} />
      <mesh geometry={nodes.Cube082_1.geometry} material={materials['Material.040']} />
      <mesh geometry={nodes.Cube082_2.geometry} material={materials['Material.042']} />
      <mesh geometry={nodes.Cube064_1.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Cube064_2.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.002']} />
      <mesh geometry={nodes.Cube065.geometry} material={materials['Black plastic PL.005']} />
      <mesh geometry={nodes.Cube065_1.geometry} material={materials['Tarp Sports Cherry Red Black Topstitch.002']} />
      <mesh geometry={nodes.Mesh027.geometry} material={materials['glass_red.002']} />
      <mesh geometry={nodes.Mesh027_1.geometry} material={materials['CHROME.002']} />
      <mesh geometry={nodes.Mesh027_2.geometry} material={materials['Back_emit.002']} />
      <mesh geometry={nodes.Mesh030.geometry} material={materials['Material.049']} />
      <mesh geometry={nodes.Mesh030_1.geometry} material={materials['Material.050']} />
      <mesh geometry={nodes.Cube085.geometry} material={materials['Material.040']} />
      <mesh geometry={nodes.Cube085_1.geometry} material={materials['Material.042']} />
      <mesh geometry={nodes.Mesh031.geometry} material={materials['glass_red.002']} />
      <mesh geometry={nodes.Mesh031_1.geometry} material={materials['CHROME.002']} />
      <mesh geometry={nodes.Mesh031_2.geometry} material={materials['Back_emit.002']} />
      <mesh geometry={nodes.Cube092.geometry} material={materials['cart white.002']} />
      <mesh geometry={nodes.Cube092_1.geometry} material={materials['Material.052']} />
      <mesh geometry={nodes.Mesh035.geometry} material={materials['Material.055']} />
      <mesh geometry={nodes.Mesh035_1.geometry} material={materials['Material.056']} />
      <mesh geometry={nodes.Mesh036.geometry} material={materials['Material.055']} />
      <mesh geometry={nodes.Mesh036_1.geometry} material={materials['Material.057']} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.011']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.015']} />
    </group>
  )
}

useGLTF.preload('/models/Kart_Four_Seater2.glb')