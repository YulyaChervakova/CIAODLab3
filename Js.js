//Таблица
function tabBoyer(arrSearch) {
    var arrTab = [[],[]];

    var i = arrSearch.length-1;
    // заполнение таблицы
    for (var j = 0; j < arrSearch.length; j++) {
        arrTab[0][j] = arrSearch[i];
        arrTab[1][j] = j; 
        i--;
    }
    var myArr = JSON.parse(JSON.stringify(arrTab));
  //  console.log(arrTab);
    //Удаленипе повторяющихся элементов 
    for (var j = 1; j < arrSearch.length; j++) {
        
        for (var m = j + 1; m < arrSearch.length; m++) {
            if (arrTab[0][j] == arrTab[0][m]) {
                arrTab[0].splice(m, 1);   
                arrTab[1].splice(m, 1);
            }
        }
      
    }
    console.log(arrTab);
    console.log(i);
    //Последний элемент
    for (var j = 1; j < arrSearch.length ; j++) {
        if (myArr[0][j] == arrTab[0][0]) {
            arrTab[0].splice(j, 1); 
            arrTab[1].splice(j, 1); 
            arrTab[1][0]=j;
            console.log(j);
            if(arrTab[0])///прописать иф длля для удаления лишний копии 1 элемента
            
            return arrTab;
        }
    }

    //console.log(arrTab);
    //console.log(i);
    arrTab[1][0] = arrSearch.length ;
    return arrTab;

}


var strOutput = document.getElementById('strOutput');
strOutput.value = "Оценить время работы";

var inputStr = document.getElementById('inputStr');
var str = strOutput.value; //удалить


//Добавление строк
AddStr1.onclick = function () {
    strOutput.value += inputStr.value;
    inputStr.value = '';
    str = strOutput.value; //удалить
}


//Поиск -Упрощенный Бойера-Мура
SearchStr.onclick = function () {
    var strSerch = document.getElementById('strSerch');
    var tab = tabBoyer(inputStr.value);

    strSerch.innerHTML = "<p>:" + tab + "</p>"
}
///C