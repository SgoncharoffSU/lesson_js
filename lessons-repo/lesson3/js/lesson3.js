// 1 задание
var a = 0;
while(a<100) {
    a++;
    if(a>3 && (a % 2 == 0 || a % 3 ==0)) {
     continue;
    } else if(a <= 1){
        continue;
    } else {
        document.write(a+' '); 
    }
}

// 2 задание
var a = 0;
do {
    if(a == 0){
        document.write('<br>' + a + '-это ноль<br/>');
    } else if (a % 2 == 0) {
        document.write(a + '-четное число<br/>');
    } else {
        document.write(a + '-нечетное число<br/>');
    }
    a++;
} while (a <= 10);

// 3 задание 
for (var a = 0; a < 10; document.write(a++ + ' ')) {}

// 4 задание
for(var a = 1, b = ''; a <= 20; a++){
    b += 'x';
    console.log(b);
}

/* Обратная пирамида (Делал для себя, что бы понять как это работает)
 Очень помог Рашид, без него бы не разобрался */
for(var a = 21, b = 'xxxxxxxxxxxxxxxxxxxx'; a <= 40; a++){
    b = b.slice(0, -1)
    console.log(b);
}
