import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// observe is set a subscription and watch for state changes
import { observe } from './components/Game';

observe(knightPosition => {
  ReactDOM.render(
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <App knightPosition={knightPosition} />
      </DndProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
