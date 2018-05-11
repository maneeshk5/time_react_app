import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TimersDashboard from './TimersDashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TimersDashboard />, document.getElementById('content'));
registerServiceWorker();
