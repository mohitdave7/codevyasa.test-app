import { NameActions } from "../Actions"
type NameState = {
name: string;
}
const initialState: NameState = {
name: '',
}
const TestReducer = (state: NameState = initialState, action: NameActions) => {
    switch(action.type) {
        case 'SET_QUOTES':
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state;
    }
}
export default TestReducer;