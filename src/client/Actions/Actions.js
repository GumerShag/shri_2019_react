import Types from '../Types/Types'
const fetchFilesFromRepository = ({repositoryId}) => dispatch => {
    //fixme: URL to some global env
    return fetch(`http://localhost:3000/api/repos/${repositoryId}`)
        .then(response => {
            return response.json();
        })
        .then(files => {
            dispatch(setFilesListToTable(files));
        });
};

const fetchFilesFromDirectory = (path) => dispatch => {
    //fixme: URL to some global env
    return fetch(`http://localhost:3000/api/repos${path}`)
        .then(response => {
            return response.json();
        })
        .then(files => {
            debugger
            dispatch(setFilesListToTable(files));
        });
};

const fetchDataFromFile = (path) => dispatch => {
    //fixme: URL to some global env
    return fetch(`http://localhost:3000/api/repos${path}`)
        .then(response => {
            return response;
        })
        .then(content => {
            dispatch(setContentToViewer(data));
        });
};

const setFilesListToTable = files => ({
    type: Types.SET_FILES,
    files
});

const setContentToViewer = content => ({
    type: Types.SET_FILES,
    content
});

export  { fetchFilesFromRepository, fetchFilesFromDirectory, fetchDataFromFile }

