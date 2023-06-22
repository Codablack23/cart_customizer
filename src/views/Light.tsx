export default function Lighting(){
    return <>
     <spotLight castShadow  angle={0.99} penumbra={1} decay={2} position={[-0.565, 5.068, 8.636]} rotation={[0.581, 0.002, -1.379]} scale={-1} />
     <pointLight castShadow color="#ffd368" position={[-16.779, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
     <spotLight castShadow angle={0.884} penumbra={1} decay={2} color="#e8fffe" position={[-2.34, 4.973, -4.552]} rotation={[-2.091, -0.381, 0.057]} />
     <spotLight castShadow  angle={0.778} penumbra={1} decay={2} color="#e8fffe" position={[-4.397, 4.022, 4.811]} rotation={[-0.604, -0.74, 1.055]} />
     {/* <spotLight castShadow angle={0.577} penumbra={1} decay={2} position={[3.036, 3.77, 1.459]} rotation={[-0.761, 0.787, -0.352]} /> */}
     {/* <pointLight castShadow  decay={2} position={[2.205, 2.524, -3.281]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <spotLight castShadow  angle={0.99} penumbra={1} decay={2} position={[-11.722, 6.086, 0.738]} rotation={[1.782, -1.019, 0.197]} scale={-1} />
      <spotLight castShadow   angle={0.99} penumbra={1} decay={2} position={[11.404, 6.086, 0.738]} rotation={[-1.359, -1.019, 0.197]} />
      
      
    
    //   <pointLight castShadow   decay={2} color="#e4ff6b" position={[14.929, 4.894, -19.195]} rotation={[-Math.PI / 2, 0, 0]} />
    //   <pointLight castShadow decay={2} color="#89ffcd" position={[14.929, 4.894, 0.724]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#ffd368" position={[14.929, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow decay={2} color="#a0c9ff" position={[4.614, 7.581, 18.063]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow decay={2} color="#a0c9ff" position={[-5.996, 7.581, 19.978]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#e4ff6b" position={[-16.779, 4.894, -19.195]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      {/* 
      
      <pointLight castShadow decay={2} position={[-5.989, 5.904, -1.005]} rotation={[-1.839, 0.602, 1.932]} />
      <pointLight castShadow   decay={2} color="#a0c9ff" position={[-5.996, 7.581, 19.978]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#ffd368" position={[-16.779, 4.894, 19.789]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#a0c9ff" position={[4.614, 7.581, -19.24]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#a0c9ff" position={[-5.996, 7.581, -19.24]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#89ffcd" position={[-16.415, 4.894, 0.724]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#fcf2ff" position={[4.964, 7.581, 0.239]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow  decay={2} color="#fcf2ff" position={[-6.024, 7.581, 0.239]} rotation={[-Math.PI / 2, 0, 0]} />
      {/* <pointLight castShadow decay={2} position={[4.076, 5.904, -1.005]} rotation={[-1.839, 0.602, 1.932]} /> */}
    </>
}