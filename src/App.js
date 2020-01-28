import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { increment, decrement, login } from './actions';

/*---------------------------------------------------------------------------------------------
Reference: https://www.youtube.com/watch?v=CVpUuw9XSjY
---------------------------------------------------------------------------------------------*/
function App() {
  const counter = useSelector(state => state.counter); //doug - useSelector provides access to the redux state
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(); //doug - useDispatch creates a dispatch which executes an action
  return (    
    <div className="App" style={{padding:"10px"}}>
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={()=> dispatch(increment(1))}>+</button> {/* doug - call dispatch to execute the action */}
        <button onClick={()=> dispatch(decrement(1))}>-</button>
      </div>
      <div>
      <div style={{marginTop:"10px"}}>
        <input type="checkbox" name="logged" onClick={() => dispatch(login())} />
        <label for="logged">Login</label>
      </div>
      <div>
        { isLogged ? <h3>Valuable information I should't see</h3> : ''}      
      </div>
      </div>
    </div>    
  );
}

export default App;
