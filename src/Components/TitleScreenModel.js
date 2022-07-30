import './TitleScreenModel.css';
import { Canvas } from 'react-three-fiber';
import MagnifyingGlass from './MagnifyingGlass'
import { Suspense } from 'react';

const TitleScreenModel = () => {
    return (
      <div className='title_screen__model'>
        <Canvas>
          <ambientLight intensity={1}/>
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Suspense fallback={null}>
            <MagnifyingGlass scale={[1.25,1.25,1.25]}/>
          </Suspense>
        </Canvas>
      </div>
    );
}

export default TitleScreenModel;