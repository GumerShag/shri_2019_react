const assert = require('assert');
const BASE_URL = '/repo_1';

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

    it('Отображается crumbs панель и можно перейти нажав на элемент', function () {
        const crumbsLink = this.browser.url(BASE_URL).pause(1000).$('a=repo_1');
        return crumbsLink
            .click()
            .getUrl()
            .then((url) => assert.strictEqual(url, `http://localhost:8080${BASE_URL}`));
    });
});

describe('Работа с файлами и папками', function () {
    it('При клике на файл открываем содержимое и меняем url', async function () {
        const fileLink = this.browser.url(BASE_URL).pause(1000).$('span=style.scss');
        return fileLink
            .click()
            .getUrl()
            .then((url) => assert.strictEqual(url, `http://localhost:8080${BASE_URL}/blob/master/style.scss`));
    });


    it('При клике на папку проваливаемся внутрь и меняем url', async function () {
        const folderLink = this.browser.url(BASE_URL).pause(1000).$('span=src');
        return folderLink
            .click()
            .getUrl()
            .then((url) => assert.strictEqual(url, `http://localhost:8080${BASE_URL}/tree/master/src`));
    });

    it('При клике на файл открываем содержимое', async function () {
        this.browser.url(BASE_URL).pause(1000).$('span=src').click();
        this.browser.url(BASE_URL).pause(1000).$('span=data').click();
        const fileLink = this.browser.url(BASE_URL).pause(1000).$('span=file.js');
        fileLink
            .click()
            .pause(1000).isExisting('content-viewer__row-content=const answer = 42;')
            .then((exists) => assert.ok(exists, 'Отобразилось содержимое'));
    });


});