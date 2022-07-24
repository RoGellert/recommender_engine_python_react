import './Bot.css'
import { Canvas } from 'react-three-fiber';


const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  );
};


const Bot = () => {
    return (
      <div className='bot'>
        <Canvas>
          <ambientLight intensity={0.5}/>
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Box/>
        </Canvas>
      </div>
    );
}

export default Bot;