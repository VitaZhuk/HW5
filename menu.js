// Обработчик событий, который отслеживает событие ввода в текстовое поле. Если слово введено, то вызывается функция, 
// которая проверяет на наличие указанных гласных букв и подсчитывает их (если имеются)

document.getElementById('textInput').addEventListener('input', function () {
    var word = document.getElementById('textInput').value;
    var letters = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var count=0;
    var resultDiv = document.getElementsByClassName('result');

    for (i=0; i < word.length; i++){
        if (letters.includes(word[i])){
            count++;
        }
    }

// Установка стилевых свойств

    for (let i = 0; i<resultDiv.length; i++){
        if (count>4){
            resultDiv[i].style.color = 'red';
        } else{
            resultDiv[i].style.color = 'blue';
        }
        
// Изменим содержимое HTML-элемента, добавив информацию о количестве символов и гласных букв
        resultDiv[i].innerHTML = `Всего символов: ${word.length} <br> Гласных букв: ${count}`;
    }

});
