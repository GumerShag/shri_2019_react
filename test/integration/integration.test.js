const assert = require('assert');
const BASE_URL = '/SHRI_Task_1';

describe('Элементы страницы', () => {
    it('Открывается страница c заголовком', function () {
        return this.browser
            .url(BASE_URL)
            .getTitle().then(title => assert.strictEqual(title, 'Arcanum'))
    });

    it('Отображается список файлов', function () {
        return this.browser
            .url(BASE_URL).pause(1000)
            .isExisting('.table-list-items')
            .then((exists) => assert.ok(exists, 'Cписок файлов отобразился'));
    });

    it('Отображается crumbs панель', function () {
        return this.browser
            .url(BASE_URL)
            .isExisting('.crumbs-bar__link')
            .then((exists) => assert.ok(exists, 'Отобразилась crumbs панель'));
    });
});

describe('Работа с файлами и папками', function () {
    it('При клике на файл открываем содержимое и меняем url', async function () {
        const fileLink = this.browser.url(BASE_URL).pause(1000).$('span=.babelrc');
        return fileLink
            .click()
            .getUrl()
            .then((url) => assert.strictEqual(url, `http://localhost:8080${BASE_URL}/blob/master/.babelrc`));
    });

    it('При клике на папку проваливаемся внутрь и меняем url', async function () {
        const folderLink = this.browser.url(BASE_URL).pause(1000).$('span=src');
        return folderLink
            .click()
            .getUrl()
            .then((url) => assert.strictEqual(url, `http://localhost:8080${BASE_URL}/tree/master/src`));
    });

});