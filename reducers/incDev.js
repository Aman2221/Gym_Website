const initialState = {
    number : 0,
    user : null
};

export const incDev = (state = initialState.number, action) => {
    switch(action.type){
        case 'increment' : return state + 1; 
        case 'decrement' : return state - 1;
        default : return state;
    }
}