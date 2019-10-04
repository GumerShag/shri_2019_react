import Types from "../Types/Types";

const reducer = (state = {loading: false, data: []}, action) => {
    switch (action.type) {
        case Types.FETCH_DATA:
            return {...state, data: action.data};
         case Types.SET_FILES:
            return {...state, files: action.files, currentView: 'table'};
        case Types.SET_CONTENT:
            return {...state, content: action.content, currentView: 'fileDetails'};
        default:
            return state
    }
};
export default reducer;