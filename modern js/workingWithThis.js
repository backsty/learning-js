// /* 
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат. 
// */

// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },

//     summ() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert( calculator.summ() );
// alert( calculator.mul() );



// /* У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

//     let ladder = {
//         step: 0,
//         up() {
//             this.step++;
//         },
//         down() {
//             this.step--;
//         },
//         showStep: function() { // показывает текущую ступеньку
//             alert( this.step );
//         }
//     };
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

//     ladder.up();
//     ladder.up();
//     ladder.down();
//     ladder.showStep(); // 1
//     ladder.down();
//     ladder.showStep(); // 0
//     Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

//     ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript. */

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert( this.step );
//         return this;
//     }
// };

// ladder.up().up().down().showStep().down().showStep();
// // или
// ladder
//     .up()
//     .up()
//     .down()
//     .showStep()
//     .down()
//     .showStep();







// function Calculator() {
//     this.read() = function() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },

//     this.summ() = function()  {
//         return this.a + this.b;
//     },

//     this.mul() = function() {
//         return this.a * this.b;
//     }
// };


// let calc = new Calculator();
// calc.read();

// alert( "Sum=" + calc.sum() );
// alert( "Mul=" + calc.mul() );





// /*
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. 
// Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, 
// с учётом начального значения startingValue.
// */

// function Accumulator(startingValue) {
//     this.value = startingValue;
    
//     this.read() = function() {
//         this.value += +prompt('Сколько нужно добавить?', 0);
//     };

// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений





// arr = [-2, -21, 1, 2, 3, 4, 5, -3, 11];

// function searchMaxSum(arr) {
//     maxSum = 0;
//     partialSum = 0;

//     for (let value in arr) {
//         partialSum += value;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0; 
//     }

//     return maxSum;
// }


// function searchMaxSum(arr) {
//     maxSum = 0;

//     for (let i = 0; i < arr.lenght; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.lenght; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
    
//     return maxSum;
// }








// function filterRange(arr, a ,b) {
//     return arr.filter(item => (a <= item && item <= b)); 
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)






// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.lenght; i++) {
//         let value = arr[i];

//         if (value <= a || value >= b) {
//             arr.splice(i, 1);
//             i--
//         }
//     }
// }


// let arr2 = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]





// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10







// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)





// function Calculator() {
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     };

//     this.calculate = function(str) {
//         let splitArr = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.method[op](a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     }
// }


// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8




// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + users.age, 0) / users.lenght;
// }


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28









// function unique(arr) {
//     let result = [];

//     for (let str of arr) {
//         if (!result.includes(str)) {
//             result.push(str);
//         }
//     }

//     return result;
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O








let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
function groupById(array) {
    return array.reduce((abj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}


let usersById = groupById(users);
  
  /*
  после вызова у нас должно получиться:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */