/* 1 задание:
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2
Инкремент стоит до переменной, значит с= значение переменной а+1.
при этом значение переменной а меняется на а+1

d = b++; alert(d); // 1 
Инкремент стоит после переменной, значит с=b, 
и только потом b меняет значение на b+1 

c = (2+ ++a); alert(c); // 5
Инкремент стоит перед переменной, значит с= значение переменной
а+1, а так как переменная а была ранее переопределена,
то ее значение будет 1+2. с=2+3=5

d = (2+ b++); alert(d); // 4
Инкремент стоит после переменной b, значит d=2+b,
так как b была ранее переопределена, то d=2=2=4
и только потом b меняет значение на b+1 

alert(a); // 3, была два раза переопределена 
alert(b); // 3, была два раза переопределена
*/


/* 2 задание:
var a = 2;
var x = 1 + (a *= 2);
Решение: 1+(2*2)=5
Ответ: x=5, a=4 */ 

// 3 задание 

var a=+prompt('Введите число a');
var b=+prompt('Введите число b');
var c;
if (a>=0 && b>=0) {
    c = (a-b);
    alert(a + '-' + b + '=' + c);
} else if ((a<0 && b>=0) || (a>=0 && b<0)) {
    c = (a+b);
    alert(a + '+' + b + '=' + c);
} else {
    c = (a*b);
    alert(a + '*' + '(' + b + ')' + '=' + c);
} 
// 4 задание
var a=10;
switch (a) {
    case 10:
    a; 
    alert(a);
    case 11:
    a++;
    alert(a);
    case 12:
    a++;
    alert(a++);
    case 13:
    a++;
    alert(a);
    case 14:
    a++;
    alert(a);
    break;
}

// 5 задание выполнено в файле lesson2.js

// 6 задание выполнено в файле lesson2.js


/* 7 задание
null это ничего, т.е. не присвоено никакое значение,
 а 0 это числовой результат */ 

 // Задание 8
var val = +prompt('Введите число, которое хотите возвести в степень');
var pow = +prompt('Введите степень в которую хотите возвести число');

