const taskReducer = (taskList = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('taskReducer: ' + action.type)
            return [...taskList, {
                    taskName: action.taskName,
                    isDone: false
                }]
        case 'SET_TASK_STATE':
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
            return taskList
    }
}

export default taskReducer