import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { increment, decrement, login, addTask, setTaskState } from './actions'; // actions are imported for use in this file
import { Tasks } from './Tasks'; // import for child component

/*---------------------------------------------------------------------------------------------
Reference: https://www.youtube.com/watch?v=CVpUuw9XSjY
---------------------------------------------------------------------------------------------*/
function App(props) {
  const counter = useSelector(state => state.counter); // access 'counter' in the redux store
  const isLogged = useSelector(state => state.isLogged); // access 'isLogged' in the redux store
  const dispatch = useDispatch(); // access 'dispatch' to execute actions on the redux store
  return (
    <div className="App" style={{ padding: "10px" }}>
      <div><h1>My Redux App</h1></div>
      <div>
        <div style={{ margin: "10px" }}>
          {/* when the 'Login' checkbox is clicked, call 'dispatch' to toggle the 'isLogin' state in the store */}
          <input type="checkbox" name="logged" onClick={() => dispatch(login())} />
          <label for="logged">Login</label>
        </div>
        <div>
          {isLogged ? <h3>You are logged in</h3> : ''}
        </div>
      </div>
      <hr />
      <div>
        {/* access 'counter' in the redux store using the 'counter' hook created here */}
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
