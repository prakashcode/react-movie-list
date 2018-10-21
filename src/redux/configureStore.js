import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

// Axios: https://github.com/svrcekmichal/redux-axios-middleware

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    responseType: 'json'
});

export default function configureStore(initialState = {}) {
    return createStore(reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, axiosMiddleware(client)))
    );
}