// import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    // ------- One way of doing it -----------

    // useEffect(() => {
    //     mount(ref.current);
    // }, []);

    // ------------ Other way, the better way to handle if the micro FE's are down ----------
    useEffect(() => {
        import('marketing/MarketingApp')
            .then(marketingModule => {
                const { onParentNavigate } = marketingModule.mount(ref.current, {
                    initialpath: history.location.pathname, // pass the whatever value currently at the path
                    // We are providing this callback function back to the marketing asking whenever route changes notify me
                    // From child to parent CHILD -> PARENT
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
                ReactDOM.findDOMNode(ref.current).innerHTML = `<h2>Marketing App is down</h2>`
            })
    }, [])


    return <div ref={ref} />
}