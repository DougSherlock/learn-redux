import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { increment, decrement, login, addTask, setTaskState } from './actions';
/*---------------------------------------------------------------------------------------------
Reference: https://www.youtube.com/watch?v=CVpUuw9XSjY
---------------------------------------------------------------------------------------------*/
function App() {
  const counter = useSelector(state => state.counter); //doug - useSelector provides access to the redux state
  const isLogged = useSelector(state => state.isLogged);
  const taskList = useSelector(state => state.taskList);
  const [taskName, setTaskName] = useState("");
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
        <h2>Counter {counter}</h2>
        <button onClick={() => dispatch(increment(1))}>+</button> {/* doug - call dispatch to execute the action */}
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
      <hr />
      <div>
        <div>
          <h2>Tasks</h2>
        </div>
        <div>
          <input placeholder="Description" onChange={(e) => setTaskName(e.target.value)}></input>
          <div><button onClick={() => dispatch(addTask(taskName))} >Add Task</button></div>
        </div>
        <div>
          { 
            taskList.map((task, index) => {
              return <div key={index} style={{textDecorationLine: task.isDone ? 'line-through' : ''}} onClick={(e) => dispatch(setTaskState(index, !task.isDone))}>{task.taskName}</div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
