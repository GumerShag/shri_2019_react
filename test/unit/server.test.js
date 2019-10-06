const assert = require('assert');
const path = require('path');
const fs = require('fs-extra');
const AdmZip = require('adm-zip');
const BASE_PATH = path.resolve(__dirname, `stub_repositories`);

const {
    getRepositories
} = require('../../src/server/controllers/getRepositories');
const { getCommits } = require('../../src/server/controllers/getCommits');
const {
    getFilesInDirectory
} = require('../../src/server/controllers/getFilesInDirectory');
const { getFileContent } = require('../../src/server/controllers/getFileContent');

before(() => {
    console.log('Unzipping');
    const zip = new AdmZip('test/stub_repositories.zip');
    zip.extractAllTo('test/unit', true);
});
after(() => {
    fs.remove('test/unit/stub_repositories', err => {
        console.log('Removing stub repository');
    });
});
describe('Список репозиториев', async () => {
    it('Можем получить список всех репозиториев', done => {
        getRepositories(BASE_PATH)
            .then(repositories => {
                assert.deepStrictEqual(repositories, [
                    {
                        id: 'repo_1'
                    },
                    {
                        id: 'repo_2'
                    }
                ]);
            })
            .then(done, done)
            .catch();
    });

    it('Список репозиторев это массив', done => {
        getRepositories(BASE_PATH)
            .then(repositories => {
                assert.ok(Array.isArray(repositories));
            })
            .then(done, done)
            .catch();
    });

    it('Вернем ошибку если путь к репозиториям не существует', done => {
        getRepositories('FAKE_PATH')
            .then(
                resolve => {},
                reject => {
                    assert.deepStrictEqual(reject, {
                        error: 'Wrong path to repositories folder.'
                    });
                }
            )
            .then(done, done)
            .catch();
    });
});
describe('Список коммитов', async () => {
    it('Можем получить список всех коммитов', done => {
        getCommits('master', `${BASE_PATH}/repo_1`)
            .then(commits => {
                assert.deepStrictEqual(commits, [
                    {
                        commitHash: 'c1db5b1da22a2ad1636eac51e3fe4541ddfb9e11',
                        date: 'Sun Oct 6 02:35:21 2019 +0300',
                        message: 'Add crumbs bar'
                    },
                    {
                        commitHash: '536cbaad5893050c04ec2e0225e92b551fc7bbc5',
                        date: 'Sun Oct 6 02:29:08 2019 +0300',
                        message: 'Third commit'
                    },
                    {
                        commitHash: 'd6013da4140eb54b1b5670c5e85341f40d38a169',
                        message: 'Second commit',
                        date: 'Sun Oct 6 01:15:57 2019 +0300'
                    },
                    {
                        commitHash: '57085bf76cee770e10d21b528e9fc2f024913398',
                        message: 'First commit',
                        date: 'Sun Oct 6 01:15:03 2019 +0300'
                    }
                ]);
            })
            .then(done, done)
            .catch();
    });

    it('Список коммитов это массив', done => {
        getCommits('master', `${BASE_PATH}/repo_1`)
            .then(commits => {
                assert.ok(Array.isArray(commits));
            })
            .then(done, done)
            .catch();
    });

    it('Вернем ошибку если не существует commitHash', done => {
        getCommits('FAKE', `${BASE_PATH}/repo_1`)
            .then(
                resolve => {},
                reject => {
                    assert.deepStrictEqual(reject, { error: 'Error' });
                }
            )
            .then(done, done)
            .catch();
    });
});
describe('Содержимое файла', async () => {
    it('Можем получить содержимое файла', done => {
        getFileContent('master', `${BASE_PATH}/repo_1`, '/src/data/file.js')
            .then(fileContent => {
                assert.deepStrictEqual(fileContent, ['const answer = 42;']);
            })
            .then(done, done)
            .catch();
    });
});
describe('Список файлов и директории в папке', async () => {
    it('Можем получить список файлов и папок в определенной директории', done => {
        getFilesInDirectory('master', `${BASE_PATH}/repo_1`, '/src/data')
            .then(contentList => {
                assert.deepStrictEqual(contentList, [
                    {
                        id: 'file.js',
                        path: '/file.js',
                        isDirectory: false
                    }
                ]);
            })
            .then(done, done)
            .catch();
    });

    it('Список файлов и директорий это массив', done => {
        getFilesInDirectory('master', `${BASE_PATH}/repo_1`, '/src/data')
            .then(contentList => {
                assert.ok(Array.isArray(contentList));
            })
            .then(done, done)
            .catch();
    });

    it('Вернем ошибку если не существует commitHash', done => {
        getFilesInDirectory('FAKE', `${BASE_PATH}/repo_1`, '/src/data')
            .then(
                resolve => {},
                reject => {
                    assert.deepStrictEqual(reject, { error: 'Error' });
                }
            )
            .then(done, done)
            .catch();
    });
});
