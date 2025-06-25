import React, { useEffect } from 'react';
import { initCanvas } from '../engine/sysmlEngine';

function Canvas() {
  useEffect(() => {
    initCanvas();
  }, []);

  return (
    <div className='canvas' id='paper-container'>
      <p>🧠 Zone de dessin SysML</p>
    </div>
  );
}

export default Canvas;