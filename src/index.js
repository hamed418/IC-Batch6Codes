import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Components/App';
import StudentProvider from './Components/Context/Student';
//import  Router  from './ReactRouterDom-LiveVlass-13/Router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <StudentProvider>
    <App/>
   </StudentProvider>
     {/* <Router/> */}


     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
