import './style.css'
import App from './src/components/App'
import { router } from './src/routes';

document.querySelector('#root').innerHTML = App();
router.resolve();

