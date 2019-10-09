import Types from '../Types/Types'
import RepoAPI from '../api/RepoAPI';
import {ThunkAction} from 'redux-thunk';
import {Action} from "redux";

const fetchFilesFromRepository = (repositoryId: string): ThunkAction<void, null, null, Action<string>> => dispatch => {
    return RepoAPI.getFilesFromRepository(repositoryId).then((files: Array<object>) => {
        dispatch(setFilesListToTable(files));
    }).catch((error: string) => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const fetchFilesFromDirectory = (path: string): ThunkAction<void, null, null, Action<string>> => (dispatch) => {
    return RepoAPI.getFilesFromDirectory(path).then((files: Array<object>) => {
        dispatch(setFilesListToTable(files));
    }).catch((error: string) => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const fetchDataFromFile = (path: string): ThunkAction<void, null, null, Action<string>> => (dispatch) => {
    return RepoAPI.getDataFromFile(path).then((content: string) =>
            dispatch(setContentToViewer(JSON.parse(content)))
    ).catch((error: string) => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const setFilesListToTable = (files: Array<object>) => ({
    type: Types.SET_FILES,
    files
});

const setContentToViewer = (content: Array<string>) => ({
    type: Types.SET_CONTENT,
    content
});

const updateRoutes = (routes: Array<string>) => ({
   type: Types.UPDATE_ROUTES,
   routes
});

export  { fetchFilesFromRepository, fetchFilesFromDirectory, fetchDataFromFile, updateRoutes }

