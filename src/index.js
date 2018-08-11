import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MOUNT = document.getElementById('root');
const renderApp = Comp => ReactDOM.render(Comp, MOUNT)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
