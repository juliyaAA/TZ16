// Задача 1. Создайте массив, содержащий строки, числа, булевы значения. Выведите его в консоль.
let block = ['line', 1, false];
console.log(block);

// Задача 2. Выведите на страницу элементы из массива a3, у которых ключ содержит больше 4 символов.

let a3 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};
for (let key in a3) {
    if (key.length > 4) {
        document.body.innerHTML += '<div >' + (a3[key]) + '</div>';
    }
}

//  Задача 3.Создайте ассоциативный массив a7, два input (u7-key input, u7-value input) и
// кнопку.  При  нажатии  кнопки  добавляйте  в  массив  новое  значение  с 
// соответствующим ключем. Выводите массив на страницу.

let newArray = new Map();
function addToArray() {
    let key = document.getElementById('u7-key');
    let value = document.getElementById('u7-value');
    newArray.set(key.value, value.value);
    console.log(newArray);
}

// Задача  4. Создайте  массив  a.  Выведите  длину  массива  a. const  a  =  ['Tor',  'Lokki',  'Odin', 34, 'privet']

const a = ['Tor', 'Lokki', 'Odin', 34, 'privet'];
console.log(a.length);

// Задача 5. Выполните перебор массива d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]. Четные элементы добавьте в массив a1, нечетные в a2. Выведите полученные массивы a1 и a2 на страницу.
let d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
let a1 = [];
let a2 = [];
for (var j = 0; j <= d.length; j++) {
    if ((d[j] % 2) == 0) {
        a1.push(d[j]);
    } else {
        a2.push(d[j]);
    }
}
document.body.innerHTML += '<div >' + a1 + '</div>';
document.body.innerHTML += '<div >' + a2 + '</div>';

// Задача 6. Используя d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78] и цикл - выведите значение из массива.

let dd = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
for (var i = 0; i < d.length; i++) {
    console.log(dd[i]);
}