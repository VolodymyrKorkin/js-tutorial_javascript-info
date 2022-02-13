// Автоматическое тестирование означает, что тесты пишутся отдельно, в дополнение к коду. 
// Они по-разному запускают наши функции и сравнивают результат с ожидаемым.

// Behavior Driven Development (BDD)

// BDD – это три в одном: и тесты, и документация, и примеры использования.

// 1. Разработка функции возведения в степень — «pow»: спецификация

// Перед тем, как начать писать код функции pow, мы можем представить себе, что она должна делать, и описать её.
// Такое описание называется спецификацией (specification). 
// Она содержит описания различных способов использования и тесты для них, например:

// describe("pow", function() {
// 
//     it("возводит в степень n", function() {
//       assert.equal(pow(2, 3), 8);
//     });
//   
//   });

// Спецификация состоит из трёх основных блоков:

// - describe("заголовок", function() { ... })
// Какую функциональность мы описываем. В нашем случае мы описываем функцию pow. 
// Используется для группировки рабочих лошадок – блоков it.

// - it("описание", function() { ... })
// В первом аргументе блока it мы ЧЕЛОВЕЧЕСКИМ языком описываем конкретный способ использования функции, а 
// во втором – пишем функцию, которая тестирует данный случай.

// - assert.equal(value1, value2)
// Код внутри блока it, если функция работает верно, должен выполняться без ошибок.

// Функции вида assert.* используются для проверки того, что функция pow работает так, как мы ожидаем. 
// В этом примере мы используем одну из них – assert.equal, 
// которая сравнивает переданные значения и выбрасывает ошибку, если они не равны друг другу. 

// Существуют и другие типы сравнений и проверок, которые мы добавим позже.

// Спецификация может быть запущена, и при этом будет выполнена проверка, 
// указанная в блоке it, мы увидим это позднее.

// 2. Процесс разработки

// Процесс разработки обычно выглядит следующим образом:
// 2.1 Пишется начальная спецификация с тестами, проверяющими основную функциональность.
// 2.2 Создаётся начальная реализация.
// 2.3 Для запуска тестов мы используем фреймворк Mocha (подробнее о нём чуть позже). 
//     Пока функция не готова, будут ошибки. Вносим изменения до тех пор, пока всё не начнёт работать так, как нам нужно.
// 2.4 Теперь у нас есть правильно работающая начальная реализация и тесты.
// 2.5 Мы добавляем новые способы использования в спецификацию, возможно, ещё не реализованные в тестируемом коде. 
//     Тесты начинают «падать» (выдавать ошибки).
// 2.6 Возвращаемся на шаг 3, дописываем реализацию до тех пор, пока тесты не начнут завершаться без ошибок.
// 2.7 Повторяем шаги 3-6, пока требуемая функциональность не будет готова.

// Таким образом, разработка проходит итеративно. 
// Мы пишем спецификацию, реализуем её, проверяем, что тесты выполняются без ошибок, 
// пишем ещё тесты, снова проверяем, что они проходят и т.д.

// 3. Спецификация в действии

// JavaScript-библиотеками для тестов:

// Mocha – основной фреймворк. Он предоставляет общие функции тестирования, 
// такие как describe и it, а также функцию запуска тестов.

// Chai – библиотека, предоставляющая множество функций проверки утверждений. 
// Пока мы будем использовать только assert.equal.

// Sinon – библиотека, позволяющая наблюдать за функциями, эмулировать встроенные функции и многое другое. 
// Нам она пригодится позднее.

// Эти библиотеки подходят как для тестирования внутри браузера, так и на стороне сервера.

// Cуществуют более высокоуровневые фреймворки для тестирования, такие как karma и другие. 
// С их помощью легко сделать автозапуск множества тестов.

// Полная HTML-страница с этими библиотеками и спецификацией функции pow 
// см. indexTests.html папка 3.5_automatic_testing_Mocha_practice

// Условно страницу "indexTests.html" можно разделить на пять частей:

// 3.1 Тег <head> содержит сторонние библиотеки и стили для тестов.
// Тег <script> содержит тестируемую функцию, в нашем случае – pow.
// Тесты – в нашем случае внешний скрипт test.js, который содержит спецификацию describe("pow", ...), представленную выше.
// HTML-элемент <div id="mocha"> будет использован фреймворком Mocha для вывода результатов тестирования.
// Запуск тестов производится командой mocha.run().

