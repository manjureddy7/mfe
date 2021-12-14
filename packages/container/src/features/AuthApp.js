import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

export default () => {
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
                    }
                });
                history.listen(onParentNavigate);
            })
            .catch((error) => {
                ReactDOM.findDOMNode(ref.current).innerHTML = `<h2>Auth App is down</h2>`
            })
    }, [])


    return <div ref={ref} />
}