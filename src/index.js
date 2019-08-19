import React from 'react';
import ReactDOM from 'react-dom';
import Themeprovider from './App/Themeprovider';
import * as serviceWorker from './serviceWorker';

export const backendURL = process.env.NODE_ENV === 'development' ? 'localhost:5000' : 'postboard-backend.herokuapp.com'

ReactDOM.render(<Themeprovider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
