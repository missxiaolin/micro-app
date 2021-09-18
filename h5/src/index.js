import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';






let instance = null

const render = () => {
  instance = ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


if (!window.__MICRO_WEB__) {
  render()
}


// 开始加载结构
export const bootstrap = () => {
  console.log('加载成功')
}

// 渲染成功
export const mount = () => {
  render()
  console.log('渲染成功')
}

// 卸载成功
export const unmount = () => {
  console.log('卸载', instance)
}