## Интеграционные тесты

Запуск

Выполните команду
 
`npm i` - установка всех зависимостей.

Если в системе не установлены selenium и hermione устанавливаем
```
npm install selenium-standalobe --global
selenium-standalone install
npm install hermione --save-dev
``` 

Если среде windows при установке hermione произошла ошибка, смотрим сюда [node-gyp](https://github.com/nodejs/node-gyp#on-windows).

После установки всех зависимотей можно запустить тесты.
 
Сначала запускаем _API сервер, UI и selenium_ командой

```
npm run start:env
```

После успешного запуска selenium можно запустить тесты командой

```$xslt
npm run test:i
```