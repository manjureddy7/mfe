import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';


const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el)
}
  
// Case: 1 Development & Isolation mount immediately

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-dashboard');
    if(el) {
      mount(el);
    }
}

// Case: 2 If we running inside a container, we should export the mount function

export { mount }