// 1) Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д.
//     Все це із замиканнями, наприклад:
//
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
function getSum() {
    let res = 0;
    return function(i) {
        res+=i;
        return res;
    }
}
const sum = getSum();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));

// 2) Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
//     Функція повинна повертати результат (у середині функції не має бути консоль лога!)
function name(a) {
    return(b) => {
        return a * b;
    }
}
console.log(name(5)(2));

// 3) Напишіть функцію, яка запускає цикл. Цикл на кожній ітерації пропонує через prompt ввести число більше 100
// (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
// то функція виводить в консоль останній введення користувача і завершує функцію.
function inputNumber() {
    let lastInput;
    for (let i = 0; i<10; i++) {
        const num = prompt('Enter a number greater than 100');
        if (num===null) {
            console.log('You canceled');
            alert('You canceled')
        } else if (num>100) {
            console.log('You enter a number greater than 100: ' + num);
            return;
        } else {
            console.log('Number is less than 100: ' + num + ' Try again.');
            lastInput = num;
            alert('Number is less than 100. Try again.')
        }
    }
    if (lastInput !== undefined) {
        console.log ('You have reached the maximum number of attempts. Last value: ' + lastInput)
    }
}
inputNumber();







