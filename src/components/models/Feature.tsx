import { useContext } from "react"
import { BasketModel } from "./Basket"
import { RimModel1 } from "./Rim1"
import { RimModel10 } from "./Rim10"
import { RimModel2 } from "./Rim2"
import { RimModel3 } from "./Rim3"
import { RimModel4 } from "./Rim4"
import { RimModel5 } from "./Rim5"
import { RimModel6 } from "./Rim6"
import { RimModel7 } from "./Rim7"
import { RimModel8 } from "./Rim8"
import { RimModel9 } from "./Rim9"
import { RoofModel } from "./Roof"
import { SolarPanelModel } from "./SolarPanel"
import { SteeringModel1 } from "./Steering1"
import { SteeringModel2 } from "./Steering2"
import { SteeringModel3 } from "./Steering3"
import { SteeringModel4 } from "./Steering4"
import { SteeringModel5 } from "./Steering5"
import { FeatureContext } from "../../contexts/FeatureContext"

const rims = [
    {name:"Rim 1",Component:<RimModel1/>},
    {name:"Rim 2",Component:<RimModel2/>},
    {name:"Rim 3",Component:<RimModel3/>},
    {name:"Rim 4",Component:<RimModel4/>},
    {name:"Rim 5",Component:<RimModel5/>},
    {name:"Rim 6",Component:<RimModel6/>},
    {name:"Rim 7",Component:<RimModel7/>},
    {name:"Rim 8",Component:<RimModel8/>},
    {name:"Rim 9",Component:<RimModel9/>},
    {name:"Rim 10",Component:<RimModel10/>}
  ] 
const wheels = []
const solarPanel = [{name:"Solar Panel", Component:<SolarPanelModel/>}]
const basket = [{name:"Basket", Component:<BasketModel/>}]
const roof = [{name:"Roof", Component:<RoofModel/>}]
const steerings = [
    {name:"Steering 1",Component:<SteeringModel1/>},
    {name:"Steering 2",Component:<SteeringModel2/>},
    {name:"Steering 3",Component:<SteeringModel3/>},
    {name:"Steering 4",Component:<SteeringModel4/>},
    {name:"Steering 5",Component:<SteeringModel5/>},
]

interface FeatureProps{
    name:string | number | null
}
const Steering=({name}:FeatureProps)=>{
  const activeModel = steerings.find((steering)=>steering.name.toLowerCase().trim() === (name as string).toLowerCase().trim())
  return activeModel?activeModel.Component:null
}
const Rims=({name}:FeatureProps)=>{

  const activeModel = rims.find((rim)=>rim.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  console.log(activeModel)
  return activeModel?activeModel.Component:null
}
const SolarPanel=({name}:FeatureProps)=>{
  const activeModel = solarPanel.find((panel)=>panel.name.toLowerCase().trim() === (name as string).toLowerCase().trim())
  console.log(activeModel)
  return activeModel?activeModel.Component:null
}
const Basket=({name}:FeatureProps)=>{
  const activeModel = basket.find((item)=>item.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  console.log(activeModel)

  return activeModel?activeModel.Component:null
}
const Roof=({name}:FeatureProps)=>{
  const activeModel = roof.find((item)=>item.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  console.log(activeModel)
  return activeModel?activeModel.Component:null
}
export default function Features(){
  const {attributes} = useContext(FeatureContext)
  return (
    <>
     <Basket
     name={attributes.basket}
     />  
     <Steering
     name={attributes.steering}
     /> 
     <Rims
     name={attributes.rims}
     />   
     <SolarPanel
     name={attributes.solar_panel}
     />  
     <Roof
     name={attributes.roof}
     />
    </>
  )
}