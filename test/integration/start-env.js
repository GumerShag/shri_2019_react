const {exec, spawn} = require('child_process');
const AdmZip = require('adm-zip');
const path = require('path');
const FOLDER_NAME = 'stub_repositories';
const TARGET_PATH = `test/integration/`;
const workDirectoryPath = path.resolve(__dirname, '../../src/server');
const ROOT_PATH = path.join(__dirname, '../../');

(async function () {
    console.log("Starting integration test");

    const zip = new AdmZip('test/stub_repositories.zip');
    zip.extractAllTo(TARGET_PATH, true);
    const repositoriesFolderPath = path.join(__dirname, FOLDER_NAME);

    await startUi();
    await startApiServer(repositoriesFolderPath, workDirectoryPath);
    await startSelenium(ROOT_PATH);
})();

async function startSelenium(workDirectoryPath) {
    console.log('Starting selenium');
    return new Promise((resolve, reject) => {
        const logs = spawn(/^win/.test(process.platform) ? `selenium-standalone.cmd` : `selenium-standalone`, ['start'], {cwd: workDirectoryPath});
        logs.stdout.on('data', (data) => {
            if (data.includes('Selenium started\n') > -1) {
                console.log('Selenium started');
                resolve(data);
            }
        });

        logs.stderr.on('data', (data) => {
            console.error(`error : ${data}`);
            reject(data);
        });
    })
}
async function startApiServer(repositoriesFolderPath, workDirectoryPath) {
    console.log('Starting API server');
    return new Promise((resolve, reject) => {
        const logs = spawn(`node`, ['server.js', '-p', repositoriesFolderPath], {cwd: workDirectoryPath});

        logs.stdout.on('data', (data) => {
            console.log(`${data}`);
            if (data.includes('Server started on') > -1) {
                resolve(data);
            }
        });

        logs.stderr.on('data', (data) => {
            console.error(`error : ${data}`);
            reject(data);
        });
    })
}
async function startUi() {
    console.log('Starting UI');
    return new Promise((resolve, reject) => {
        const uiLogs = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'start:ui']);
        uiLogs.stdout.on('data', (data) => {
            if (data.includes('Compiled successfully') > -1) {
                resolve(data);
            }
        });

        uiLogs.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            reject(data);
        });

        uiLogs.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    })
}