import { useContext, useEffect, useRef, useState } from "react"
import { allFeatures } from "../constants"
import { FeatureContext } from "../contexts/FeatureContext"

type FeatureType = {
    name:string,
    id:number,
    key:"steering"|"solar_panel"|"rims"|"basket"|"roof",
}

interface FeatureProps{
   feature:FeatureType,
}

const Feature = ({feature}:FeatureProps)=>{
  const {actions,attributes} = useContext(FeatureContext)
  const [active,setActive] = useState<string|number|null>(null)
  const handleClick=()=>{
    collapseRef.current?.classList.toggle("hidden")
  }
  const collapseRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
      const att = allFeatures[feature.key][0]
      setActive(att?att.id:null)
  },[])
  function selectAttribute(model:string|number|null,id:string|number|null){
     return ()=>{
     
      const att = {...attributes}
      console.log(att)
      setActive(id)
      att[feature.key] = model 
      actions?.changeAttributes(att)
     }
  }
  return (
  <div className="bg-white text-gray-900 rounded-md p-2 mx-2 my-5 mb-2">
     <header className="flex items-center justify-between">
      <div className="flex">
       <div>
          <p>{feature.name}</p>
       </div>
      </div>
      <button className="h-8 w-8 flex items-center justify-center rounded-md" onClick={handleClick}>
         <i className="bi bi-chevron-down"></i>       
      </button>
    </header>
    <div ref={collapseRef} className="p-2 rounded-md mt-3 hidden">
        <ul className="grid grid-cols-2 gap-4">
            {allFeatures[feature.key].map((att)=>
              <li key={`${feature.key}-${att.id?att.id:0}`} className="px-2 py-4  flex items-center justify-between border-b border-gray-900">
                <div>
                <p>{att.feature_name}</p>
                </div>
                <button 
                onClick={selectAttribute(att.feature_name,att.id)}
                className={`rounded-full border ${active==att.id?"bg-gray-900":""} border-gray-900 h-4 w-4 cursor-pointer`}></button>
            </li>)}
        </ul>
    </div>
 </div>
)
}
export default function Customizer(){
    const features:FeatureType[]= [
        {name:"Steering Wheels",id:1,key:"steering"},
        {name:"Rims",id:1,key:"rims"},
        {name:"Solar Panel",id:1,key:"solar_panel"},
        {name:"Basket",id:1,key:"basket"},
        {name:"Top Roof Carrier",id:1,key:"roof"},
    ]
    return (
        <div className="bg-white text-gray-900 md:h-screen overflow-y-auto p-4">
          <p className="text-xl font-semibold text-center">Customize Your Golf Cart</p>
          <div className="gap-1">
          {features.map(feature=>(
               <Feature 
               feature={feature}
               />
            ))
          }
          </div>
        </div>
    )
}