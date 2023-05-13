interface Attributes{
    id:string | null | number,
    feature_name:string | null | number,
    model:string | null | number,
}

interface AllFeature{
    wheels:Attributes[],
    steering:Attributes[],
    rims:Attributes[],
    solar_panel:Attributes[],
    basket:Attributes[],
    roof:Attributes[],
}

export const allFeatures:AllFeature = {
    wheels:[
    // {id:2,feature_name:"Wheel 1 ",model:"",},
    // {id:3,feature_name:"Attribute 3",momdel:"",},
    ], 
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