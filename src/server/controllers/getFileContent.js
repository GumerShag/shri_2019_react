const {exec} = require('child_process');

const getFileContent = (commitHash, repositoryPath, filePath) => {
    return new Promise((resolve, reject) => {
        exec(
            `git show ${commitHash}:${'.'.concat(filePath)}`,
            {cwd: repositoryPath},
            (err, content) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
               resolve(content.split('\n'));
            }
        );
    })
};
module.exports = {getFileContent};