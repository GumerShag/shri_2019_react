import Types from '../Types/Types'
const fetchFiles = () => dispatch => {
    return fetch('http://localhost:3000/api/repos')
        .then(response => {
            return response.json();
        })
        .then(files => {
            const filteredFilesList = files.filter(file => {
                return file.id.toLowerCase().includes(name.toLowerCase());
            });
            dispatch(setFilesAction(filteredFilesList));
        });
};

const setFilesAction = files => ({
    type: Types.SET_FILES,
    files: files
});

export  { fetchFiles }

