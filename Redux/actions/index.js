export const increment = (num) => {
    return {
        type: 'increment',
        payload : num
    }
}

export const decrement = (num) => {
    return {
        type : 'decrement',
        payload : num
    }
}