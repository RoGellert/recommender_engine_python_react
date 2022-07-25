import './Bot.css';
import { Canvas } from 'react-three-fiber';
import BotModel from './BotModel'
import { Suspense } from 'react';

const Bot = () => {
    return (
      <div className='bot'>
        <Canvas>
          <ambientLight intensity={0.5}/>
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Suspense fallback={null}>
            <BotModel/>
          </Suspense>
        </Canvas>
      </div>
    );
}

export default Bot;