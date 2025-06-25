import React from 'react';

function Sidebar() {
  return (
    <div className='sidebar'>
      <h4>📘 Éléments SysML</h4>
      <button onClick={() => window.addBlock()}>+ Bloc</button>
      <button onClick={() => window.addState()}>+ État</button>
      <button onClick={() => window.addTransition()}>+ Transition</button>
    </div>
  );
}

export default Sidebar;