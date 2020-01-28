import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers}  from 'redux';
import taskReducer from './taskReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    taskList: taskReducer
});

export default allReducers;