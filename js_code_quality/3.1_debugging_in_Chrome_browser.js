// 1. Команда Debugger

// Выполнение кода можно также приостановить с помощью команды 
// debugger прямо изнутри самого кода:

// function hello(name) {
//   let phrase = `Привет, ${name}!`;
// 
//   debugger;  // <-- здесь выполнение прерывается
// 
//   say(phrase);
// }

// Способ удобен тем, что можно продолжить работать в редакторе кода 
// без необходимости переключения в браузер для выставления точки останова.

// 2. Логирование
// Если нужно что-то вывести в консоль из кода, применяется функция console.log.
// чтобы увидеть результат, сначала откройте консоль

// К примеру, выведем в консоль значения от нуля до четырёх:
// for (let i = 0; i < 5; i++) {
//   console.log("value,", i);
// }

// Обычный пользователь сайта не увидит такой вывод, так как он в консоли.

// 2. Итого

// Приостановить выполнение скрипта можно тремя способами:
// Точками останова.
// Использованием в коде команды debugger.
// При ошибке (если инструменты разработчика открыты и опция  включена).

