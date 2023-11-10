import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppProfile from './AppProfile';
import AppCount from './AppCount';

// 1. 랜더링: id가 root인 요소를 만들어서 랜더링 한다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 2. strict mode: 자바스크립트의 strict 모드와 유사
  <React.StrictMode>
    {/* <AppProfile /> */}
    <AppCount />
    <AppCount />

  </React.StrictMode>
);

reportWebVitals();
