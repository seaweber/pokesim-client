import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import socketIO from 'socket.io-client';
import socketIoMiddleware from 'redux-socket.io-middleware';
import { applyMiddleware, createStore } from 'redux'

//import BrowserRouter from 'react-router-dom/BrowserRouter'
//https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github
const socket = socketIO.connect('localhost:8080');

const store = createStore( rootReducer, applyMiddleware( socketIoMiddleware( socket ) ) );

document.getElementById('root').style.height = '100%';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
