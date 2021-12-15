import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn: onUserAuthenticate }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        import('auth/AuthApp')
            .then(authModule => {
                const { onParentNavigate } = authModule.mount(ref.current, {
                    initialpath: history.location.pathname,
                    onNavigate: ({ pathname: nextPathname }) => {
                        const { pathname } = history.location;
                        if(pathname !== nextPathname) {
                            history.push(nextPathname);
                        }
                    },
                    // Callback we are sending to the Auth app, authApp will call this and notify the container
                    onSignIn: () => {
                        onUserAuthenticate(); // here we are setting the internal state of App.js to communicate that value to Dashboard
                        console.log("user signed in")
                    },
                    // Or we can directly pass the callback onsignlike
                    // onSignIn -> Anyway this fn will be called from auth micro FE
                });
                history.listen(onParentNavigate);
            })
            .catch((error) => {
                ReactDOM.findDOMNode(ref.current).innerHTML = `<h2>Auth App is down</h2>`
            })
    }, [])


    return <div ref={ref} />
}