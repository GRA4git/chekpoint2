// Создай файл remember.js

// В самом начале файле напиши многострочный комментарий, в котором дается небольшое описание языка JavaScript
/*JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация)*/

// В отдельном однострочном комментарии перечисли через запятую названия всех типов данных, которые ты сможешь вспомнить. По ходу выполнения чекпоинта можешь возвращаться к этому заданию и дополнять его новыми названиями, если вдруг вспомнишь.
// типы данных number, string, boolean, null, undefined, Nan, object, biglnt

// Создай переменную с именем emptyList, в которой будет пустой 
//массив.
let emptyList = [];

// Создай переменную с именем dataTypes, в которой будет массив с названиями типов данных.
let dataTypes =['number', 'string', 'boolean', null]


// Создай переменную с именем dataTypesExample, в которой будет массив со значениями из разных типов данных.
let dataTypesExample = [1, 'ruslan', 'true', null ];

// Создай переменную с именем booleanDataType, в которой будет массив с двумя значениями логического типа.
booleanDataType [true, false];

// Создай переменную с именем collection, в которой будет три пустых объекта.
let collection = [{}, {}, {}];

// Создай переменную с именем application и опиши в нём приложение, в котором проводишь больше всего времени. Постарайся использовать как можно больше типов данных, вложенный объект и массив (ниже есть пример).
const application = {
    name: "Duolingo",
    isItFree: folse,
    developer: {
      name: 'Luis fo Van',
      location: 'USA'
    },
    realisedYear: 2011,
    functions: ["доступ к обучению яыков", "Бесплатное обучение языкам",],
  };

// Приведи пример использования условных выражений (if-else).
function adult(age){
    if(age > 18){
        return 'заходи'
    }else{
        return 'пошел вон'
    }
}

// Создай функцию с именем startGame, которая принимает параметр с именем playersCount и возвращает текст "Игра началась. Количество игроков: playersCount".
function startGame(playersCount){
        return 'Игра началась. Количество игроков: playersCount';
}
// Создай новый репозиторий на GitHub и выгрузи туда работу.
