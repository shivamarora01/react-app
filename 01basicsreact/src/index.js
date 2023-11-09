//core foundational library
import React from 'react';
//react implementation on web 
import ReactDOM from 'react-dom/client';
import App from './App';

//const varibale ka naam badla jaaskta
//root naam ki id ka div index.html mai hai
const hunter = ReactDOM.createRoot(document.getElementById('treat'));
hunter.render(
  //strictmode hataya jaaskta hai
  <React.StrictMode>
    <App />
  </React.StrictMode>
);