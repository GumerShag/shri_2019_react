const {exec} = require('child_process');

const getFilesInDirectory = (commitHash, repositoryPath, filePath) => {
    return new Promise((resolve, reject) => {
        exec(
            `git show ${commitHash}:${'.'.concat(filePath)}`,
            {cwd: repositoryPath},
            (err, content) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
                const contentList = content.split('\n\n')[1].split('\n');
                resolve(contentList.filter(id => id).map(id => {
                        id = id.lastIndexOf('/') > -1 ? id.slice(0, id.lastIndexOf('/')) : id;
                        return {
                            id,
                            path: `/${id}`,
                            isDirectory: !id.match(/\.[\w]/g)
                        }
                    }
                    )
                );
            }
        );
    })
};
module.exports = {getFilesInDirectory};