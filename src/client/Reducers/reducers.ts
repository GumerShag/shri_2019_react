import {ActionType, SET_CONTENT, SET_FILES, UPDATE_ROUTES} from '../Types/Types'
//todo: use combineReducers
const reducer = (state = {loading: false, data: []}, action: ActionType) => {
    switch (action.type) {
         case SET_FILES:
            return {...state, files: action.files, currentView: 'table'};
        case SET_CONTENT:
            return {...state, content: action.content, currentView: 'fileDetails'};
        case UPDATE_ROUTES:
            return {...state, routes: action.routes};
        default:
            return state
    }
};
export default reducer;