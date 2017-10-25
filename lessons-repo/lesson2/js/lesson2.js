// 5 задание
function addition(a, b) {
    var addit = a + b;
    return(addit);
}
function subtraction(a, b) {
    var subtra = a - b;
    return(subtra);
}
function multiplication(a, b) {
    var multi = a * b;
    return(multi);
}
function division(a, b) {
    var divis = a / b;
    return(divis);
}
// Задание 6
function mathOperation(a, b, operation) {
    switch(operation) {
        case '-': 
        return(subtraction(a, b));
        break;
        case '+':
        return(addition(a, b));
        break;
        case '*':
        return(multiplication(a, b));
        break;
        case '/':
        return(division(a, b).toFixed(2));
        break;
    }
}
// задание 8
    function power(val, pow) {
    if (pow != 1) { 
      return val * power(val, pow - 1);
    } else {
      return val;
    }
}  
