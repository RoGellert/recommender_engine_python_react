import './TitleScreenModel.css';
import { Canvas } from 'react-three-fiber';
import MagnifyingGlass from './MagnifyingGlass'
import { Suspense } from 'react';
//import Triangle from './Triangle'

const TitleScreenModel = () => {
    return (
      <div className='title_screen__model'>
        <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
          <ambientLight intensity={1}/>
          <Suspense fallback={null}>
            <MagnifyingGlass scale={[1.20,1.20,1.20]}/>
          </Suspense>
        </Canvas>
      </div>
    );
}

export default TitleScreenModel;