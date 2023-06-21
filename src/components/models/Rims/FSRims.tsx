import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Rim1(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 1.glb")
    return <primitive object={scene} />
}
export function Rim2(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 2.glb")
    return <primitive object={scene} />
}
export function Rim3(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 3.glb")
    return <primitive object={scene} />
}
export function Rim4(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 4.glb")
    return <primitive object={scene} />
}
export function Rim5(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 5.glb")
    return <primitive object={scene} />
}
export function Rim6(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 6.glb")
    return <primitive object={scene} />
}
export function Rim7(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 7.glb")
    return <primitive object={scene} />
}
export function Rim8(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 8.glb")
    return <primitive object={scene} />
}
export function Rim9(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 9.glb")
    return <primitive object={scene} />
}
export function Rim10(){
    const {scene} = useLoader(GLTFLoader,"/models/rims/fs/Rim 10.glb")
    return <primitive object={scene} />
}