import Types from "../Types/Types";
const reducer = (state = {loading: false, data: []}, action) => {
    debugger
    switch (action.type) {
        case Types.FETCH_DATA:
            return {...state, data: action.data};
         case Types.SET_FILES:
            return {...state, files: action.files};
        default:
            return state
    }
};
export default reducer;