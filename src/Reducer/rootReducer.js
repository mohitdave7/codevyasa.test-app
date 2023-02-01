import { combineReducers } from 'redux'
import TestReducer from '.';
const rootReducer = combineReducers({
    count: TestReducer,
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;