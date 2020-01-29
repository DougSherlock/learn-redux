import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { addTask, setTaskState } from './actions';

export const Tasks = () => {
    let taskNameInput = React.createRef();
    const [taskName, setTaskName] = useState("");
    const taskList = useSelector(state => state.taskList);
    const dispatch = useDispatch(); //doug - useDispatch creates a dispatch which executes an action
    const onSubmit = (e) => {
        e.preventDefault();
        onAddTask(e);
    }
    const onAddTask = (e) => {
        dispatch(addTask(taskName))
        setTaskName('')
        taskNameInput.current.value = ""
        console.log('onAddTask done')
      }
        return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <h3>Tasks</h3>
                </div>
                <div>Hint: click on a task to change its state</div>
            </div>
            <div>
                <input ref={taskNameInput} placeholder="Description" onChange={(e) => setTaskName(e.target.value)}></input>
                <div><button onClick={onAddTask} >Add Task</button></div>
            </div>
            <div>
                {
                    taskList.map((task, index) => {
                        return <div key={index} style={{ textDecorationLine: task.isDone ? 'line-through' : '' }} onClick={(e) => dispatch(setTaskState(index, !task.isDone))}>{task.taskName}</div>
                    })
                }
            </div>
        </form>
    )
}
