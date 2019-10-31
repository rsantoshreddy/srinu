import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Parent } from './comp';

ReactDOM.render(<Parent />, document.getElementById('root'));

serviceWorker.unregister();
