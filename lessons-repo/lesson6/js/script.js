
// *************Задание 1*************
/* Для пользователя работает корректно, но в консоль выдает ошибки,
 при отсутствии запрашиваемой картинки */

function galery(){
var leftArrow = document.getElementById('left-arrow-image'),
    rightArrow = document.getElementById('right-arrow-image'),
    image = document.getElementById('image-img'),
    i = 1;
    leftArrow.addEventListener("click", function() {
        if(i > 1){
        i--;
        
        } else {
            i = 7;
        }
        image.onerror = function(){
            image.src = 'img/img' + i-- + '.jpg';
        }
        image.src = 'img/img' + i + '.jpg';
        
      });
      
      rightArrow.addEventListener("click", function() {
        if(i < 6){
        i++;
        } else {
            i = 1;
        }
        image.onerror = function(){
            image.src = 'img/img' + i++ + '.jpg';
        }
        image.src = 'img/img' + i + '.jpg';
        
      });
      
};