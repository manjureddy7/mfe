import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default () => {
    
    const ref = useRef(null);

    useEffect(() => {
        import('dashboard/DashboardApp')
            .then(dashboardModule => {
                dashboardModule.mount(ref.current)
            })
            .catch((error) => {
                ReactDOM.findDOMNode(ref.current).innerHTML = `<h2>Dashboard App is down</h2>`
            })
    }, [])

    return <div ref={ref} />
}