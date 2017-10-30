// Задание 1

var body = {
    // *******Имя приложения********
    appName: 'Определение кол-ва сотен, десятков и едениц в заданном числе' + '<br><br><br><br><br>',

    // ********Метод распознавания сотен, десятков и едениц*********
    HTU: function () {

        //*******Инициализация ответа*********
        var valueHTU = {hundreds: null, tens: null, units: null};
        var answer = null;

        //********Запрос числа*********
        var valueFromUser = +prompt('введите число от 0 до 999');

        //********Вычисляем сколько сотен**********
        if(valueFromUser >= 0 && valueFromUser <= 999) {        
                if(valueFromUser > 99) {
                    valueHTU.hundreds = ('сотен - ' + (Math.floor(valueFromUser / 100)) + ',');
                } else {
                    valueHTU.hundreds = '';
                }
        //*********Вычисляем сколько десятков***********
                if(valueFromUser > 9) {
                    valueHTU.tens = (' десятков - ' + Math.floor((valueFromUser % 100) / 10) + ',');
                } else {
                    valueHTU.tens = '';
                }
        //**********Вычисляем сколько едениц*************
                if((valueFromUser % 10) != 0) {
                    valueHTU.units = (' едениц - ' + (valueFromUser % 10) + ',');
                } else {
                    valueHTU.units = '';
                }

        //**********Выводим Сотни, десятки, еденицы**********
            answer = (' Число - ' + valueFromUser + ' содержит: ' + valueHTU.hundreds + valueHTU.tens + valueHTU.units);

        //*******Выводим если введено не число*********
        } else if(isNaN(valueFromUser)){
            answer = 'Вы ввели не число';

        //********Выводим, если введено число не из диапазона от 0 до 999***********
        } else {
            answer = 'Вы ввели число не из диапазона от 0 до 999';
        }
        return(answer);
    }

};
document.write(body.appName);
document.write(body.HTU());