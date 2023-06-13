import { Canvas, useLoader, useThree,} from "@react-three/fiber"
import "../styles/customizer.scss"
import Customizer from "../components/Customizer"
import { Suspense, useContext, useEffect,} from "react"
import { Environment,PresentationControls, Stage,Box, useEnvironment, OrbitControls} from "@react-three/drei/web"
import { FeatureContext } from "../contexts/FeatureContext"
import SelectModel from "../components/SelectModel"
import { cart } from "../constants"
import { Texture, TextureLoader } from "three"

interface PlaneProps{
    texture?:Texture,
    position:[x:number,y:number,z:number],
    args:[x:number,y:number,z:number]
    name:string,
}

function Plane({texture,position,args,name}:PlaneProps){
  return(
  <Box name="right-side-view" args={args} position={position}>
  <meshStandardMaterial map={texture} color={texture?undefined:"#fff"} />
</Box>)
}

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
   const envMap = useEnvironment({files:"/environment/garage.hdr"})
    return (
        <div className="bg-gray-900 customizer-container md:h-screen overflow-y-auto">
          <div className="grid md:grid-cols-3">
            <div className="canvas-container relative top-0 h-80 md:h-screen p-5 md:col-span-2">
              <SelectModel/>
              <div className="top-0 absolute left-0 w-full h-full">
              <Suspense fallback={<Loader/>}>
            <Canvas dpr={[1,2]}>   
            <PresentationControls
                speed={1.5}
                global
                // polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
              >
               
              
                <Environment map={envMap}
                background
                 />
                <Stage adjustCamera intensity={0.6} castShadow={false}>
                <OrbitControls/>
                    {/* <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    /> */}
                  {/* <ActiveCart
                  activeCart={activeCart}
                  /> */}
                  
                </Stage> 
           
                {/* <mesh position={[0,-10,0]} rotation={[-Math.PI / 2, 0,0]}>
                  <planeGeometry args={[20, 40]} />
                  <meshStandardMaterial map={floorTexture}/>
                </mesh>   */}
            
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