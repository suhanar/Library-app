import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import App1 from './App1';
import { Auth0Provider } from '@auth0/auth0-react';

//const domain = 'dev-m7exo78yn3r8z3go.us.auth0.com';
//const clientId = 'mf0fZSrR9MagQxByuvR1tuFukNftilHu';
//const demo = process.env.REACT_APP_DEMO;

const credential={
  domain : process.env.REACT_APP_AUTH0_DOMAIN ,
  clientId : process.env.REACT_APP_AUTH0_CLIENTID 

 
}



//console.log("domain",credential.domain);
//console.log('demo',demo);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Auth0Provider domain={credential.domain} clientId={credential.clientId} redirectUri={window.location.origin}>
        <App1 />
    </Auth0Provider>
 
   
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

