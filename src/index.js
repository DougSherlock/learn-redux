import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; //doug - import the store
import allReducer from './reducers/index';
import { Provider } from 'react-redux'; //doug - Provider connects the global state to app

//------------------------------------------------------------
//doug - store is a global state -----------------------------
//------------------------------------------------------------
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  


//------------------------------------------------------------
//doug - Provider wraps the App compoent ---------------------
//------------------------------------------------------------
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
