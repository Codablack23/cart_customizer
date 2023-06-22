import { Canvas, useLoader, useThree,} from "@react-three/fiber"
import "../styles/customizer.scss"
import Customizer from "../components/Customizer"
// import {GarageModel} from "../components/models/Garage"
import { Suspense, useContext,useState} from "react"
import {PresentationControls, Stage,Box, OrbitControls, SpotLight} from "@react-three/drei/web"
import { FeatureContext } from "../contexts/FeatureContext"
import SelectModel from "../components/SelectModel"
import { cart } from "../constants"
import { Texture, } from "three"
// import { Model } from "../components/models/Kart6"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { FourSeaterModel2 } from "../components/models/Kart_Four_Seater2"
import { KartFourSeaterModel } from "../components/models/Kart_Four_Seater"
import Lighting from "./Light"

interface PlaneProps{
    texture?:Texture,
    position:[x:number,y:number,z:number],
    args:[x:number,y:number,z:number]
    name:string,
}

function GarageScene(){
  const {scene} = useLoader(GLTFLoader,"/models/Six_Seater_Kart.glb")
  scene.scale.set(5,5,5)
  scene.position.set(0,-1.5,0)
  return <primitive object={scene}/>
}

// function Plane({texture,position,args,name}:PlaneProps){
//   return(
//   <Box name="right-side-view" args={args} position={position}>
//   <meshStandardMaterial map={texture} color={texture?undefined:"#fff"} />
// </Box>)
// }

const Loader = ()=>{
  return (
    <div className="h-80 bg-gray-900 text-white md:h-screen flex items-center justify-center">
      <div className="text-center">
       <p>Loading Model....</p>
      </div>
    </div>
  )
}

function ActiveCart({activeCart}:{activeCart:string}){
  const selectedCart = cart.find((item=>item.cartName === activeCart))
  const Component = selectedCart?selectedCart.Component({}):<></>
  return Component
}

export default function CustomizerView(){
  const [env,setEnv] = useState("/environment/garage.hdr")
   const {environment,activeCart} = useContext(FeatureContext) 
    return (
        <div className="bg-gray-900 customizer-container md:h-screen overflow-y-auto">
          <div className="grid md:grid-cols-3">
            <div className="canvas-container relative top-0 h-80 md:h-screen p-5 md:col-span-2">
              <SelectModel/>
              <div className="top-0 absolute left-0 w-full h-full">
              <Suspense fallback={<Loader/>}>
              <Canvas frameloop="demand"> 
              <ambientLight color={"#000"} intensity={1}/>
              <Lighting/>
            
              <PresentationControls
              speed={1.5}
              global
              polar={[-0.1, Math.PI / 3]}
              rotation={[Math.PI / 8,Math.PI / 4, 0]}
              >
                <OrbitControls
                minDistance={4}
                minZoom={0.002}
                maxDistance={8}
                maxZoom={0.007}
                enableRotate={false}
                />
                      <ActiveCart
                  activeCart={activeCart}
                  />
            </PresentationControls>  
            </Canvas>
            </Suspense>
              </div>
            </div>
            <div className="customizer-sidebar md:col-span-1">
                <Customizer />
            </div>
          </div>
        </div>
    )
}
