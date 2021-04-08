//Таблица
// function tabBoyer(arrSearch) {
//     var arrTab = [
//         [],
//         []
//     ];
//     var flag = 1;
//     var i = arrSearch.length - 1;
    
//     // заполнение таблицы
//     for (var j = 0; j < arrSearch.length; j++) {
//         arrTab[0][j] = arrSearch[i];
//         arrTab[1][j] = j;
//         i--;
//     }




//     //  console.log(arrTab);
//     //Удаленипе повторяющихся элементов 
//     for (var j = 0; j < arrSearch.length; j++) {

//         for (var m = j + 1; m < arrSearch.length; m++) {
//             if (arrTab[0][j] == arrTab[0][m]) {
//                 if (arrTab[0][0] == arrTab[0][m] && flag == 1) {
//                     arrTab[1][0] = arrTab[1][m];
//                     arrTab[0].splice(m, 1);
//                     arrTab[1].splice(m, 1);

//                     flag++;
//                 } else {
//                     arrTab[0].splice(m, 1);
//                     arrTab[1].splice(m, 1);
                    
//                 }

//             }
//         }

//     }
//     console.log(arrTab);
//     console.log(i);
//     //Последний элемент
//     // for (var j = 1; j < arrSearch.length ; j++) {
//     //     if (myArr[0][j] == arrTab[0][0]) {
//     //         arrTab[0].splice(j, 1); 
//     //         arrTab[1].splice(j, 1); 
//     //         arrTab[1][0]=j;
//     //         console.log(j);
//     //         if(arrTab[0][0]==)///прописать иф длля для удаления лишний копии 1 элемента

//     //         return arrTab;
//     //     }
//     // }

//     //console.log(arrTab);
//     //console.log(i);
//     if (flag == 1) {
//         arrTab[1][0] = arrSearch.length;
//         return arrTab;
//     } else {
//         return arrTab;
//     }


// }

function tabBoyer(arrSearch) {
    const arrMap = new Map();
    var arrReverse = arrSearch.split("").reverse().join("");

    for(var i = 1; i < arrReverse.length; i++){
        if(arrMap.get(arrReverse[i]) == undefined){
            arrMap.set(arrReverse[i], i);
        }
    }

    if(arrMap.get(arrReverse[0]) == undefined){
        arrMap.set(arrReverse[0], arrReverse.length)
    }

    return arrMap;
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

    var result = "";

    for (var [key, value] of tab) {
        result += key + ' = ' + value + "<br>";
    }

    strSerch.innerHTML = "<p>:" + result + "</p>"
}
///C