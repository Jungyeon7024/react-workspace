import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Count from './Count';
import ToggleButton from './ToggleButton';
import IndexExample from './IndexExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Count /> 
    <ToggleButton/> 
    <IndexExample/>
  </React.StrictMode>
);


reportWebVitals();
// 주석 표기는 {/* */} react에서는 이렇게 한다. 
//React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
//reportWebVitals  : react 성능을 측정하기 위한 메서드 
