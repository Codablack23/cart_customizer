import { FourSeaterCart } from "./components/models/4_Seater"
import { Model } from "./components/models/Kart6"
import { FourSeaterOppositeCart } from "./components/models/4_Seater_Opposite"

interface Attributes{
    id:string | null | number,
    feature_name:string | null | number,
    model:string | null | number,
}

interface AllFeature{
    steering:Attributes[],
    rims:Attributes[],
    solar_panel:Attributes[],
    basket:Attributes[],
    roof:Attributes[],
}


export const cart = [
  {id:1,cartName:"Four Seater Cart",Component:FourSeaterCart},
  {id:2,cartName:"Four Seater Cart Opposite Each Other",Component:FourSeaterOppositeCart},
  {id:2,cartName:"Six Seater Cart",Component:Model},
  // {id:3,cartName:""},
]
export const allFeatures:AllFeature = {
    steering:[
    {id:1,feature_name:"Steering 1",model:"/models/steerings/Steering 1.glb",},
    {id:2,feature_name:"Steering 2",model:"/models/steerings/Steering 2.glb",},
    {id:3,feature_name:"Steering 3",model:"/models/steerings/Steering 3.glb",},
    {id:4,feature_name:"Steering 4",model:"/models/steerings/Steering 4.glb",},
    {id:5,feature_name:"Steering 5",model:"/models/steerings/Steering 5.glb",},
    ],  
    rims:[
    {id:1,feature_name:"Rim 1",model:"/models/rims/Rim 1.glb",},
    {id:2,feature_name:"Rim 2",model:"/models/rims/Rim 2.glb",},
    {id:3,feature_name:"Rim 3",model:"/models/rims/Rim 3.glb",},
    {id:4,feature_name:"Rim 4",model:"/models/rims/Rim 4.glb",},
    {id:5,feature_name:"Rim 5",model:"/models/rims/Rim 5.glb",},
    {id:6,feature_name:"Rim 6",model:"/models/rims/Rim 6.glb",},
    {id:7,feature_name:"Rim 7",model:"/models/rims/Rim 7.glb",},
    {id:8,feature_name:"Rim 8",model:"/models/rims/Rim 8.glb",},
    {id:9,feature_name:"Rim 9",model:"/models/rims/Rim 9.glb",},
    {id:10,feature_name:"Rim 10",model:"/models/rims/Rim 10.glb",},
 
    ], 
    solar_panel:[
    {id:null,feature_name:"None",model:null,},
    {id:1,feature_name:"Solar Panel ",model:"/models/others/Solar Panel.glb",},
    ], 
    basket:[
      {id:null,feature_name:"None",model:null,},
      {id:1,feature_name:"Basket ",model:"/models/others/basket.glb",},
    ],  
    roof:[
      {id:null,feature_name:"None",model:null,},
      {id:1,feature_name:"Roof",model:"/models/others/Top Roof Carrier.glb",},
    ],
    
}