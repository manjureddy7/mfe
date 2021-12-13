// import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default () => {
    const ref = useRef(null);

    // One way of doing it

    // useEffect(() => {
    //     mount(ref.current);
    // }, []);

    // Other way, the better way to handle if the micro FE's are down
    useEffect(() => {
        import('marketing/MarketingApp')
            .then(marketingModule => {
                marketingModule.mount(ref.current)
            })
            .catch((error) => {
                ReactDOM.findDOMNode(ref.current).innerHTML = `<h2>Marketing App is down</h2>`
            })
    }, [])


    return <div ref={ref} />
}