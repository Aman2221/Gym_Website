const initialState = {
    number : 10,
    user : null,
    isValid : false
}

const changeNumber = (state = initialState.number, action) => {
    switch(action.type){
        case 'increment' : return state + action.payload; 
        case 'decrement' : return state - action.payload; 
        default : return state
    }
}

export default changeNumber