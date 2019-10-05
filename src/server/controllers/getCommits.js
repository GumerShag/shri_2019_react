const {exec} = require('child_process');

const getCommits = (commitHash, repositoryPath) => {
    return new Promise((resolve, reject) => {
        exec(
            'git --no-pager log ' +
            commitHash +
            ' --pretty=format:"{@commitHash@: @"%H"@,@message@: @"%s"@,@date@: @"%cd"@}"',
            {cwd: repositoryPath},
            (err, logData) => {
                if (err) {
                    reject({error: 'Error'});
                    return;
                }
                let commitsArray = logData.replace(/@/g, '"').split('\n');
                resolve(
                    commitsArray.map(commit => {
                        return JSON.parse(`${commit}`);
                    })
                );
            }
        );
    })
};
module.exports = {getCommits};