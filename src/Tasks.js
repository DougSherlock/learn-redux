import React, { useState } from 'react' //doug - useState is a React hook that enables function components to use state
import { useSelector, useDispatch } from 'react-redux'; //doug - useSelector provides access to the redux state
import { addTask, setTaskState, deleteTask } from './actions'; //doug - import statement for the actions we've defined

export const Tasks = () => {
    let taskNameInput = React.createRef(); //doug - a ref is a way to access an element without having to call 'getElementById'
    const [taskName, setTaskName] = useState(""); // define the state for the list of tasks uing the 'useState' hook
    const [selectedTask, setSelectedTask] = useState(-1);
    const taskList = useSelector(state => state.taskList); // define a local member that will subscribe to data from the store
    const dispatch = useDispatch(); //doug - useDispatch creates a dispatch which executes an action
    const onSubmit = (e) => { // event handler for a form element - MUST call 'preventDefault' to prevent page reload
        e.preventDefault();
        onAddTask(e);
    }
    const onDeleteTask = (e) => {
        if (selectedTask > -1
            && selectedTask <= taskList.length) {
            console.log('onDeleteTask - dispatching delete task action for index ' + selectedTask)
            dispatch(deleteTask(selectedTask))
            setSelectedTask(-1);
        }
        else {
            alert('onDeleteTask - index out of range: ' + selectedTask)
        }
    }
    const onTaskClicked = (index, newState, e) => {
        console.log('onTaskClicked')
        dispatch(setTaskState(index, newState))
        setSelectedTask(index)
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
                {/* assign reference for input */}
                <input ref={taskNameInput} placeholder="Description" onChange={(e) => setTaskName(e.target.value)}></input>
                <div><button onClick={onAddTask} >Add Task</button></div>
                <div><button onClick={onDeleteTask} >Delete Selected Task</button></div>
            </div>
            <div>
                {
                    // create element for each task
                    // add strikethrough if the task is done
                    // add an event handler to dispatch the 'SET_TASK_STATE' action when the element is clicked
                    taskList.map((task, index) => {
                        const sty = { 
                            textDecorationLine: task.isDone ? 'line-through' : '',
                            backgroundColor: index === selectedTask ? 'lightBlue' : ''
                        }
                        return <div key={index} 
                            style={sty} 
                            onClick={(e)=>{onTaskClicked(index, !task.isDone)}}>{task.taskName}
                            </div>
                    })
                }
            </div>
        </form>
    )
}
