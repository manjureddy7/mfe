import React from 'react';
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from './App';

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory, initialpath }) => {

    // In isolation we want BroswerHistory & in under container we want MemoryHistory
    // MemoryHistory doesn't show anything on the browser when the url changes
    // If we use BroswerHistory we will see the changes in the url path

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialpath]
    });

    if(onNavigate) {
        history.listen(onNavigate) // Call the calback fn when history changes, CHILD -> PARENT
    };

    ReactDOM.render(
        <App history={history} />,
        el
    );
    
    // onParentNavigate will get called whenever the shell/container updates it's url 
    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location;
            if(pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}
  
// Case: 1 Development & Isolation mount immediately

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#auth-dev');
    if(el) {
      mount(el, {
          defaultHistory: createBrowserHistory()
      });
    }
}

// Case: 2 If we running inside a container, we should export the mount function

export { mount }