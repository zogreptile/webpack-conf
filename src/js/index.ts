import desktopCssInjector from './desktop-css-injector';
import registerSW from './register-service-worker';
import '../css/styles.css';

desktopCssInjector();
registerSW();

const h1 = document.createElement('h1');
h1.textContent = 'Hello OTR!';

document.body.appendChild(h1);
