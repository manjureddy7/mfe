import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import App from './App';

// Mount function to start the app
const mount = (el) => {
    ReactDOM.render(
       <App />,
        el
    );
}
  
// Case: 1 Development & Isolation mount immediately

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#marketing');
    if(el) {
      mount(el);
    }
}

// Case: 2 If we running inside a container, we should export the mount function

export { mount }