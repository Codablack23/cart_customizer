import { useContext } from "react"
import { BasketModel } from "./Basket"
import { RimModel1 } from "./Rims/Rim1"
import { RimModel10 } from "./Rims/Rim10"
// import { RimModel2 } from "./Rims/Rim2"
import { RimModel3 } from "./Rims/Rim3"
import { RimModel4 } from "./Rims/Rim4"
import { RimModel5 } from "./Rims/Rim5"
import { RimModel6 } from "./Rims/Rim6"
import { RimModel7 } from "./Rims/Rim7"
import { RimModel8 } from "./Rims/Rim8"
import { RimModel9 } from "./Rims/Rim9"
import { KartSixRoofModel } from "./RC/RC6"
import { RoofModel40 } from "./RC/RC4"
import { KartSixSolarPanelModel } from "./SP/SP6"
import { SolarPanelModel40 } from "./SP/SP4"
import { SteeringModel1 } from "./Steerings/Steering1"
import { SteeringModel2 } from "./Steerings/Steering2"
import { SteeringModel3 } from "./Steerings/Steering3"
import { SteeringModel4 } from "./Steerings/Steering4"
import { SteeringModel5 } from "./Steerings/Steering5"
import { FeatureContext } from "../../contexts/FeatureContext"
import { FSRim1 } from "./Rims/FSRims/1"
import { FSRim2 } from "./Rims/FSRims/2"
import { FSRim10 } from "./Rims/FSRims/10"
import { FSRim3 } from "./Rims/FSRims/3"
import { FSRim4 } from "./Rims/FSRims/4"
import { FSRim5 } from "./Rims/FSRims/5"
import { FSRim6 } from "./Rims/FSRims/6"
import { FSRim7 } from "./Rims/FSRims/7"
import { FSRim8 } from "./Rims/FSRims/8"
import { FSRim9 } from "./Rims/FSRims/9"
import { RimModel2 } from "./Rims/RIm2"



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
const fsrims = [
    {name:"Rim 1",Component:<FSRim1/>},
    {name:"Rim 2",Component:<FSRim2/>},
    {name:"Rim 3",Component:<FSRim3/>},
    {name:"Rim 4",Component:<FSRim4/>},
    {name:"Rim 5",Component:<FSRim5/>},
    {name:"Rim 6",Component:<FSRim6/>},
    {name:"Rim 7",Component:<FSRim7/>},
    {name:"Rim 8",Component:<FSRim8/>},
    {name:"Rim 9",Component:<FSRim9/>},
    {name:"Rim 10",Component:<FSRim10/>}
  ] 
const wheels = []
const solarPanel = [{name:"Solar Panel", Component:<KartSixSolarPanelModel/>}]
const solarPanel4 = [{name:"Solar Panel", Component:<SolarPanelModel40/>}]
const basket = [{name:"Basket", Component:<BasketModel/>}]
const roof = [{name:"Roof", Component:<KartSixRoofModel/>}]
const roof4 = [{name:"Roof", Component:<RoofModel40/>}]
const steerings = [
    {name:"Steering 1",Component:<SteeringModel1/>},
    {name:"Steering 2",Component:<SteeringModel2/>},
    {name:"Steering 3",Component:<SteeringModel3/>},
    {name:"Steering 4",Component:<SteeringModel4/>},
    // {name:"Steering 5",Component:<SteeringModel5/>},
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
  return activeModel?activeModel.Component:null
}
const FSRims=({name}:FeatureProps)=>{

  const activeModel = fsrims.find((rim)=>rim.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  return activeModel?activeModel.Component:null
}
const SolarPanel=({name}:FeatureProps)=>{
  const activeModel = solarPanel.find((panel)=>panel.name.toLowerCase().trim() === (name as string).toLowerCase().trim())
  return activeModel?activeModel.Component:null
}
const SolarPanel4=({name}:FeatureProps)=>{
  const activeModel = solarPanel4.find((panel)=>panel.name.toLowerCase().trim() === (name as string).toLowerCase().trim())
  return activeModel?activeModel.Component:null
}
const Basket=({name}:FeatureProps)=>{
  const activeModel = basket.find((item)=>item.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  return activeModel?activeModel.Component:null
}
const Roof=({name}:FeatureProps)=>{
  const activeModel = roof.find((item)=>item.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
  return activeModel?activeModel.Component:null
}
const Roof4=({name}:FeatureProps)=>{
  const activeModel = roof4.find((item)=>item.name.toLowerCase().trim() === (name as string).toLowerCase().trim() )
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
export  function Feature4(){
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
     <SolarPanel4
     name={attributes.solar_panel}
     />  
     <Roof4
     name={attributes.roof}
     />
    </>
  )
}
export function FeatureFS(){
  const {attributes} = useContext(FeatureContext)
  return (
    <>
     <Basket
     name={attributes.basket}
     />  
     <Steering
     name={attributes.steering}
     /> 
     <FSRims
     name={attributes.rims}
     />   
     <SolarPanel4
     name={attributes.solar_panel}
     />  
     <Roof4
     name={attributes.roof}
     />
    </>
  )
}
