# enot-draft
A pet-project to practice full-stack RESTful web service development.

Frontend находится в директориях js и resourses - здесь моя работа.
В директории java находится код сервера - автор этого кода не я.

После 'git clone/pull' необходимо сделать следующие шаги:

1. В стартовом окне Intellij IDEA нажать <b>'Import project'</b>
2. В директории проекта выбрать <b>pom.xml</b>
3. Нажать ОК затем Next, Next
4. В окне Please select project sdk выбрать <b>Java 1.8</b>, затем Next, Finish
5. После этого подтянутся все библиотеки Java и проект проиндексируется
<br>(может занять некоторое время)
6. В правой части Idea зайти в меню <b>Maven -> plugins -> frontend</b>
7. Двойным кликом запустить <b>"node and npm"</b>
8. Двойным кликом запустить <b>"npm"</b>
<br>(подтянутся все фронтенд-зависимости в директорию node_modules)
<br>8.5. Ввести Google Maps API-key в файл <b>secret.js</b>*
9. Двойным кликом запустить <b>"webpack"</b> (соберется bundle.js)
10. Для запуска сервера нажать Shift + F10 или <b>Run->Run 'EnotApplication'</b>
<br>(запуск займет некоторое время)
11. Для просмотра сайта в браузере ввести <b>localhost:8080</b>
<br>(настроки порта в файле src/main/resources/application.properties)
<p>* Для корректной работы Google Map необходимо ввести API-key. Ключ вводится в файле js/secret.js, но сейчас там пустая строка, т.к. хранить ключи в открытом доступе нежелательно. Можно оставить ключ пустым, но тогда карта покажет диалог "This page cannot load Google Maps correctly" и после нажатия кнопки Ok продолжит работать в "режиме разработчика" (затенение + watermark поверх тайлов).</p>