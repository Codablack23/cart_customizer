import { ReactNode, createContext, useEffect, useState } from "react";
import { allFeatures } from "../constants";

interface Attributes{
   solar_panel:string | number | null ,
   steering:string | number | null,
   roof:string | number | null,
   wheels:string | number | null,
   rims:string | number | null
   basket:string | number | null,
}

interface FeatureContextInterface{
    attributes:Attributes
    actions?:{
        changeAttributes:(attributes:Attributes)=>void
    }
}
interface FeatureProps{
    children:ReactNode | ReactNode[]
}
export const FeatureContext = createContext<FeatureContextInterface>({
    attributes:{
        solar_panel:allFeatures["solar_panel"][0].model,
        steering:allFeatures["steering"][0].model,
        roof:allFeatures["roof"][0].model,
        wheels:allFeatures["wheels"][0]?allFeatures["wheels"][0].model:null,
        rims:allFeatures["rims"][0].model,
        basket:allFeatures["basket"][0].model,  
    },
})

export default function FeaturesContextProvider({children}:FeatureProps){
   const [attributes,setAttributes] = useState<Attributes>({
    solar_panel:allFeatures["solar_panel"][0].feature_name,
    steering:allFeatures["steering"][0].feature_name,
    roof:allFeatures["roof"][0].feature_name,
    wheels:allFeatures["wheels"][0]?allFeatures["wheels"][0].feature_name:null,
    rims:allFeatures["rims"][0].feature_name,
    basket:allFeatures["basket"][0].feature_name,  
})

useEffect(()=>{
    console.log(attributes)
},[attributes])

   return <FeatureContext.Provider  value={{
    attributes,
    actions:{
        changeAttributes(attributes) {
            setAttributes(attributes)
        },
    }
   }}>
     {children}
   </FeatureContext.Provider>
}