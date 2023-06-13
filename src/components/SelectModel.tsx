import { useState,useContext } from "react"
import { FeatureContext } from "../contexts/FeatureContext"
import { cart,environments } from "../constants"

interface SelectModelProps{
    open:boolean,
    closeModal:()=>any
}

function SelectEnvModal(props:SelectModelProps){
  const {environment,actions} = useContext(FeatureContext)

   function selectEnv(env:{name:string,src:string}){
    return ()=>{
      console.log(environment)
      console.log(env)
      actions?.selectEnvr(env)
      closeModal()
    }
   }
    const {open,closeModal} = props
   return (
    <div className={`${open?"opacity-100 z-30":"opacity-0 z-0"} absolute w-full h-full top-0 left-0 modal`}>
        <div className="mx-auto max-w-md flex-1 modal-dialogue bg-white">
           <header className="flex items-center justify-between p-3">
            <h3 className="text-lg font-medium">Pick Cart Model</h3>
            <button onClick={closeModal}><i className="bi bi-x-lg"></i></button>
           </header>
           <ul className="">
             {environments.map(item=>(
                <li onClick={selectEnv(item)} className="cursor-pointer m-4 flex items-center justify-between border-b border-gray-200" key={item.name}>
                    <p>{item.name}</p>
                   {environment.name === item.name? <i className="bi text-blue-500 bi-check-circle-fill"></i>:null}
                </li>
             ))}
           </ul>
        </div>
    </div>
   )
}
function SelectModelModal(props:SelectModelProps){
  const {activeCart,actions} = useContext(FeatureContext)

   function selectCart(cart:string){
    return ()=>{
      actions?.selectCart(cart)
      closeModal()
    }
   }
    const {open,closeModal} = props
   return (
    <div className={`${open?"opacity-100 z-30":"opacity-0 z-0"} absolute w-full h-full top-0 left-0 modal`}>
        <div className="mx-auto max-w-md flex-1 modal-dialogue bg-white">
           <header className="flex items-center justify-between p-3">
            <h3 className="text-lg font-medium">Pick Cart Model</h3>
            <button onClick={closeModal}><i className="bi bi-x-lg"></i></button>
           </header>
           <ul className="">
             {cart.map(item=>(
                <li onClick={selectCart(item.cartName)} className="cursor-pointer m-4 flex items-center justify-between border-b border-gray-200" key={item.id}>
                    <p>{item.cartName}</p>
                   {activeCart === item.cartName? <i className="bi text-blue-500 bi-check-circle-fill"></i>:null}
                </li>
             ))}
           </ul>
        </div>
    </div>
   )
}

export default function SelectModel(){
    const [isOpen,setIsOpen] = useState(false)
    const {activeCart} = useContext(FeatureContext)

    return (
        <>
         <div className="select-model absolute flex items-center text-white p-3 px-6 z-20">
           <p>{activeCart}</p>
           <button onClick={()=>{setIsOpen(true)}} className="cursor-pointer ml-2"><i className="bi bi-chevron-down"></i></button>
        </div>
        <SelectModelModal 
        open={isOpen}
        closeModal={()=>{setIsOpen(false)}}
        />
        </>
       
    )
}
export function SelectEnvironemt(){
    const [isOpen,setIsOpen] = useState(false)
    const {environment} = useContext(FeatureContext)

    return (
        <>
         <div className="select-model right-3 absolute flex items-center text-white p-3 px-6 z-20">
           <p>{environment.name}</p>
           <button onClick={()=>{setIsOpen(true)}} className="cursor-pointer ml-2"><i className="bi bi-chevron-down"></i></button>
        </div>
        <SelectEnvModal 
        open={isOpen}
        closeModal={()=>{setIsOpen(false)}}
        />
        </>
       
    )
}
