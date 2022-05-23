export const increment = (num) => {
    return {
        type : 'increment',
        payload : num
    }
}

export const decrement = (num) => {
    return {
        type : 'decrement',
        payload : num,
    }
}

export const getUser = (email,password) => {
    return {
        type : 'getUser',
        payload : [email,password]
    }
}