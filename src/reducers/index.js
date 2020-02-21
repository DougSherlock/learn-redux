import counterReducer from './counter';
import loggedReducer from './isLogged';
import taskReducer from './taskReducer';
import {combineReducers}  from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    taskList: taskReducer
});

export default allReducers;