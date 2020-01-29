import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { increment, decrement, login, addTask, setTaskState } from './actions';
import { Tasks } from './Tasks';
/*---------------------------------------------------------------------------------------------
Reference: https://www.youtube.com/watch?v=CVpUuw9XSjY
---------------------------------------------------------------------------------------------*/
function App(props) {
  const counter = useSelector(state => state.counter); //doug - useSelector provides access to the redux state
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(); //doug - useDispatch creates a dispatch which executes an action
  return (
    <div className="App" style={{ padding: "10px" }}>
      <div><h1>My Redux App</h1></div>
      <div>
        <div style={{ margin: "10px" }}>
          <input type="checkbox" name="logged" onClick={() => dispatch(login())} />
          <label for="logged">Login</label>
        </div>
        <div>
          {isLogged ? <h3>You are logged in</h3> : ''}
        </div>
      </div>
      <hr />
      <div>
        <h3>Counter {counter}</h3>
        <button onClick={() => dispatch(increment(1))}>+</button> {/* doug - call dispatch to execute the action */}
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
      <hr />
      <Tasks />
    </div>
  );
}

export default App;
