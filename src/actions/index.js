export const increment = (delta) => {
    return {
        type: 'INCREMENT',
        amount: delta
    }
}

export const decrement = (delta) => {
    return {
        type: 'DECREMENT',
        amount: delta
    }
}

export const login = () => {  //doug
    return {
        type: 'SIGN_IN'
    }
}

export const addTask = (taskName) => {
    console.log('addTask')
    return {
        type: 'ADD_TASK',
        taskName: taskName
    }
}

export const setTaskState = (index, isDone) => {
    console.log('setTaskState');
    return {
        type: 'SET_TASK_STATE',
        payload: {
            index: index,
            isDone: isDone    
        }
    }
}

