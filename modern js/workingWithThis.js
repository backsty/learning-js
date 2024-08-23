/* 
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. 
*/

let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    summ() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.summ() );
alert( calculator.mul() );



/* У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

    let ladder = {
        step: 0,
        up() {
            this.step++;
        },
        down() {
            this.step--;
        },
        showStep: function() { // показывает текущую ступеньку
            alert( this.step );
        }
    };
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showStep(); // 1
    ladder.down();
    ladder.showStep(); // 0
    Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

    ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Такой подход широко используется в библиотеках JavaScript. */

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
// или
ladder
    .up()
    .up()
    .down()
    .showStep()
    .down()
    .showStep();







function Calculator() {
    this.read() = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    this.summ() = function()  {
        return this.a + this.b;
    },

    this.mul() = function() {
        return this.a * this.b;
    }
};


let calc = new Calculator();
calc.read();

alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() );





/*
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. 
Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, 
с учётом начального значения startingValue.
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read() = function() {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений