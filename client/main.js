import './style.css'
import App from './src/components/App'
import { router } from './src/routes';

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#root').innerHTML = App();
    router.resolve();
});
