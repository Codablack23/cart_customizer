import { Canvas,} from "@react-three/fiber"
import "../styles/customizer.scss"
import Customizer from "../components/Customizer"
import { Suspense, useContext, useEffect,} from "react"
import { MeshReflectorMaterial, PresentationControls, Stage} from "@react-three/drei/web"
import { FeatureContext } from "../contexts/FeatureContext"
import {KartModel} from '../components/Kart.js'
import { FourSeaterOppositeCart } from "../components/models/4_Seater_Opposite"
import { FourSeaterCart } from "../components/models/4_Seater"
import SelectModel from "../components/SelectModel"
import { cart } from "../constants"

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
  const {attributes,activeCart} = useContext(FeatureContext)
   useEffect(()=>{

   },[attributes])   
    return (
        <div className="bg-gray-900 customizer-container md:h-screen overflow-y-auto">
          <div className="grid md:grid-cols-3">
            <div className="canvas-container relative top-0 h-80 md:h-screen p-5 md:col-span-2">
              <SelectModel/>
              <div className="top-0 absolute left-0 w-full h-full">
              <Suspense fallback={<Loader/>}>
            <Canvas dpr={[1,2]}>
            <color attach="background" args={["#213547"]} />
            <fog attach="fog" args={["#213547", 10, 20]} />
            <PresentationControls
                speed={1.5}
                global
                polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
              >
             {/* <OrbitControls/> */}
                <Stage adjustCamera environment={"city"} intensity={0.6} castShadow={false}>
                  <ActiveCart
                  activeCart={activeCart}
                  />
                  {/* <KartModel/> */}
                  {/* <FourSeaterCart/> */}
                </Stage>  
                <mesh position={[0,-1.7,0]} rotation={[-Math.PI / 2, 0,0]}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5} mirror={0}               
                  />
              </mesh>
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