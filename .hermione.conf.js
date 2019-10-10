module.exports = {
    baseUrl: 'http://localhost:8080',
    gridUrl: 'http://localhost:4444/wd/hub',
    waitTimeout: 5000,
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            path: './report'
        }
    }
};