import Types from '../Types/Types'
import RepoAPI from '../api/RepoAPI';

const fetchFilesFromRepository = ({repositoryId}) => dispatch => {
    return RepoAPI.getFilesFromRepository(repositoryId).then(files => {
        dispatch(setFilesListToTable(files));
    }).catch(error => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const fetchFilesFromDirectory = (path) => dispatch => {
    return RepoAPI.getFilesFromDirectory(path).then(files => {
        dispatch(setFilesListToTable(files));
    }).catch(error => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const fetchDataFromFile = (path) => dispatch => {
    return RepoAPI.getDataFromFile(path).then(content =>
            dispatch(setContentToViewer(JSON.parse(content)))
    ).catch(error => {
        //dispatch some unsuccessful action
        throw(error);
    });
};

const setFilesListToTable = files => ({
    type: Types.SET_FILES,
    files
});

const setContentToViewer = content => ({
    type: Types.SET_CONTENT,
    content
});

export  { fetchFilesFromRepository, fetchFilesFromDirectory, fetchDataFromFile }

