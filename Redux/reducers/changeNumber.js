const initialState = {
    number : 0, 
    user : null,
    itTrue : false
}

export const changeNumber = (state = initialState.number, action) => {
    switch(action.type){
        case 'increment' : return state + action.payload;
        case 'decrement' : return state - action.payload;
        case 'getUser' :  return {...state + user};
        default : return state;
    }
}