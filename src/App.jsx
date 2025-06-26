import React from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import '../styles/style.css';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Canvas />
    </div>
  );
}

export default App;
