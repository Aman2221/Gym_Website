import { rootReducer } from './reducers/main'
import { createStore } from 'redux'

const store = createStore(rootReducer);

export default store