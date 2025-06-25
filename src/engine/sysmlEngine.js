import * as joint from 'jointjs';

export function initCanvas() {
  const graph = new joint.dia.Graph();
  const paper = new joint.dia.Paper({
    el: document.getElementById('paper-container'),
    model: graph,
    width: 1000,
    height: 600,
    gridSize: 10,
    drawGrid: true,
    background: { color: '#f8f9fa' }
  });

  window.addBlock = () => {
    const block = new joint.shapes.standard.Rectangle();
    block.position(100, 100);
    block.resize(100, 40);
    block.attr({ body: { fill: '#007bff' }, label: { text: 'Bloc', fill: 'white' } });
    block.addTo(graph);
  };

  window.addState = () => {
    const state = new joint.shapes.standard.Ellipse();
    state.position(200, 200);
    state.resize(100, 40);
    state.attr({ body: { fill: '#28a745' }, label: { text: 'État', fill: 'white' } });
    state.addTo(graph);
  };

  window.addTransition = () => {
    const link = new joint.shapes.standard.Link();
    link.source({ x: 150, y: 150 });
    link.target({ x: 300, y: 300 });
    link.attr({ line: { stroke: 'black', strokeWidth: 2 } });
    link.addTo(graph);
  };
}