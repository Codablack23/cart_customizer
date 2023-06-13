import { ReactNode, createContext, useEffect, useState } from "react";
import { allFeatures,cart } from "../constants";

interface Attributes{
   solar_panel:string | number | null ,
   steering:string | number | null,
   roof:string | number | null,
   rims:string | number | null
   basket:string | number | null,
}

interface FeatureContextInterface{
    activeCart:string,
    attributes:Attributes,
    environment:{
        name:string,
        src:string
    },
    actions?:{
        changeAttributes:(attributes:Attributes)=>void
        selectCart:(cart:string)=>void
        selectEnvr:(env:{name:string,src:string})=>void
    }
}
interface FeatureProps{
    children:ReactNode | ReactNode[]
}
export const FeatureContext = createContext<FeatureContextInterface>({
    activeCart:"",
    environment:{
        name:"Paul Lobe Haus",
        src:"/environment/garage.hdr"
    },
    attributes:{
        solar_panel:"",
        steering:"",
        roof:"",
        rims:"",
        basket:"",  
    },
})

export default function FeaturesContextProvider({children}:FeatureProps){
    const [activeCart,setActiveCart] = useState(cart[0].cartName)
    const [environment,setEnv] = useState({
        name:"Paul Lobe Haus",
        src:"/environment/garage.hdr"
    })
   const [attributes,setAttributes] = useState<Attributes>({
    solar_panel:allFeatures["solar_panel"][0].feature_name,
    steering:allFeatures["steering"][0].feature_name,
    roof:allFeatures["roof"][0].feature_name,
    rims:allFeatures["rims"][0].feature_name,
    basket:allFeatures["basket"][0].feature_name,  
})

useEffect(()=>{
    console.log(attributes)
},[attributes])

   return <FeatureContext.Provider  value={{
    activeCart,
    environment,
    attributes,
    actions:{
        changeAttributes(attributes) {
            setAttributes(attributes)
        }, 
        selectCart(cart) {
            setActiveCart(cart)
        },
        selectEnvr(env) {
            setEnv(env)
        },
    }
   }}>
     {children}
   </FeatureContext.Provider>
}