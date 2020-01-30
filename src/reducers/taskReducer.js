const taskReducer = (taskList = [], action) => { 
    // a reducer's parameters are a state and an action 
    // a reducer returns a new state and MUST not modify the existing state
    switch (action.type) { // handle each type of action
        case 'ADD_TASK':
            console.log('taskReducer: ' + action.type)
            return [...taskList, {
                    taskName: action.taskName,
                    isDone: false
                }] // return a new array of tasks comprised of the current array plus one new task
        case 'SET_TASK_STATE':
            // this handler calls the 'map' function 
            // if the current item is not the one to be updated, we just return it
            // if the current item IS the one, we return a new item with updated attributes
            console.log('taskReducer: ' + action.type)
            return taskList.map((item, index) => {
                if (index !== action.payload.index) {
                  // This isn't the item we care about - keep it as-is
                  console.log('taskReducer: returning existing task');
                  return item
                }
                // Otherwise, this is the one we want - return an updated value
                console.log('taskReducer: returning task with new properties');
                return {
                  taskName: item.taskName,
                  isDone: action.payload.isDone
                }
              })              
        default:
            // if no handler is found, just return the existing state to be safe
            return taskList
    }
}

export default taskReducer // must export so other files can see it