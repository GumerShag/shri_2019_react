## интеграционные тесты

запуск
выполните команду
 
`npm i` - установка всех зависимостей.
если в системе не установлены selenium и hermione устанавливаем
```
npm install selenium-standalobe --global
selenium-standalone install
npm install hermione --save-dev
``` 

если среде window при установке hermione произошла ошибка, смотрим сюда [node-gyp](https://github.com/nodejs/node-gyp#on-windows).

после установки всех зависимотей можно запустить тесты. 
сначала запускаем API сервер, UI и selenium командой
```
npm run start:env
```

После успешного запуска selenium можно запустить тесты командой
```$xslt
npm run test:i
```