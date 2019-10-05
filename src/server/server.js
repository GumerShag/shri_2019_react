const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');
const {exec} = require('child_process');
const bodyParser = require('body-parser');
const args = require('minimist')(process.argv.slice(2));
const app = express();
const repoPath = args.p;
const absoluteReposPath = path.resolve(__dirname, repoPath);
const cors = require('cors');
const {getRepositories} = require('./controllers/getRepositories');
const {getCommits} = require('./controllers/getCommits');
const { getFilesInDirectory} = require('./controllers/getFilesInDirectory');
const { getFileContent} = require('./controllers/getFileContent');

app.use(cors());
app.get('/api/repos/', async (req, res) => {
    let {start, limit} = req.query;
    start = start ? parseInt(start) : undefined;
    limit = limit ? parseInt(limit) : undefined;

    getRepositories(absoluteReposPath, start, limit).then(repos => {
        res.json(repos);
    }).catch(error => {
        res.status(500).json({error})
    });
});

app.get('/api/repo/search', (req, res) => {
    exec(
        `git ls-tree -r master --name-only`,
        {cwd: `${absoluteReposPath}`},
        (err, content) => {
            if (err) {
                res.status(500).json({error: err});
                return;
            }
            const contentList = content.split('\n');
            res.json(contentList.filter(name => name).map(name => {
                return {id: path.basename(name)}
            }));
        }
    );
});

app.get('/api/repos/:repositoryId/commits/:commitHash', async (req, res) => {
    const {repositoryId} = req.params;
    const {commitHash} = req.params;

    getCommits(commitHash, `${absoluteReposPath}/${repositoryId}`).then(commits => {
        res.json(commits);
    }).catch(error => {
        res.status(500).json({error})
    });
});

app.get('/api/repos/:repositoryId/commits/:commitHash/diff', (req, res) => {
    const {repositoryId} = req.params;
    const {commitHash} = req.params;

    exec(
        `git diff ${commitHash}~ ${commitHash}`,
        {cwd: `${absoluteReposPath}/${repositoryId}`},
        (err, diff) => {
            if (err) {
                res.status(500).json({error: err});
                return;
            }
            res.json({diff});
        }
    );
});

app.get('/api/repos/:repositoryId/tree/:commitHash*', async (req, res) => {
    const {repositoryId} = req.params;
    const {commitHash} = req.params;
    let path = req.params[0];

    getFilesInDirectory(commitHash, `${absoluteReposPath}/${repositoryId}`, path).then(filesList => {
        res.json(filesList);
    }).catch(error => {
        res.status(500).json({error})
    });
});

app.get('/api/repos/:repositoryId/blob/:commitHash*', async (req, res) => {
    const {repositoryId} = req.params;
    const {commitHash} = req.params;
    const pathToFile = req.params[0];

    getFileContent(commitHash, `${absoluteReposPath}/${repositoryId}`, pathToFile).then(fileContent => {
        res.json(fileContent);
    }).catch(error => {
        res.status(500).json({error})
    });
});

app.route('/api/repos/:repositoryId')
    .get((req, res) => {
        const {repositoryId} = req.params;

        exec(
            `git ls-tree HEAD --name-only`,
            {cwd: `${absoluteReposPath}/${repositoryId}`},
            (err, content) => {
                if (err) {
                    res.status(500).json({error: err});
                    return;
                }
                const contentList = content.split('\n');
                res.json(contentList.filter(name => name).map(id => ({
                    id,
                    path: id.match(/\.[\w]/g) ? `/blob/master/${id}` : `/tree/master/${id}`,
                    isDirectory: !id.match(/\.[\w]/g)
                })));
            }
        );
    })
    .delete((req, res) => {
        const {repositoryId} = req.params;
        const command = os.platform() === 'win32' ? 'rmdir /Q /S' : 'rm -rf';

        exec(
            `${command} ${repositoryId}`,
            {cwd: `${absoluteReposPath}`},
            err => {
                if (err) {
                    res.status(500).json({message: err});
                    return;
                }
                res.json({message: 'OK'});
            }
        );
    })
    .post(bodyParser.json(), (req, res) => {
        const {repositoryId} = req.params;
        const {url} = req.body;

        exec(
            `git clone ${url} ${repositoryId}`,
            {cwd: `${absoluteReposPath}`},
            err => {
                if (err) {
                    if (
                        err.message.indexOf(
                            'HttpRequestException encountered'
                        ) > -1
                    ) {
                        res.status(404).json({
                            message: "Repository doesn't exist"
                        });
                        return;
                    }
                    res.status(500).json({message: err});
                    return;
                }

                res.status(201).json({message: 'OK', id: repositoryId});
            }
        );
    });

app.listen(3000);

console.log("Server started on http://localhost:3000");
