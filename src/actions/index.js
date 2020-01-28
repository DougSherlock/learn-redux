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