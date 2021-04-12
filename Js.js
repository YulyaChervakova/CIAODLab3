//Таблица
function tabBoyer(arrSearch) {
    const arrMap = new Map();
    var arrReverse = arrSearch.split("").reverse().join("");

    for (var i = 1; i < arrReverse.length; i++) {
        if (arrMap.get(arrReverse[i]) == undefined) {
            arrMap.set(arrReverse[i], i);
        }
    }

    if (arrMap.get(arrReverse[0]) == undefined) {
        arrMap.set(arrReverse[0], arrReverse.length)
    } else {
        arrMap.set('*', arrReverse.length)
    }

    return arrMap;
}
//Поиск Бойера-Мура
function boyer(arrSearch, arrMap, arrOutput) {
    var i = arrSearch.length - 1;

    while (i < arrOutput.length) {
        if (arrMap.get(arrOutput[i]) == undefined) {
            if (arrMap.get('*') == undefined) {
                i += arrMap.get(arrSearch[arrSearch.length - 1]);

            } else {
                i = i + arrMap.get('*');
            }
        } else {
            if (arrOutput[i] == arrSearch[arrSearch.length - 1]) {
                var k = arrSearch.length - 1;
                for (var j = i; j > i - arrSearch.length - 1; j--) {
                    if (arrOutput[j] == arrSearch[k] && k >= 0) {
                        k--;
                    } else {
                        if (k == -1) {
                            return i;
                        } else {
                            i += arrMap.get(arrSearch[k]);
                            break;
                        }
                    }
                }
            } else {
                i += arrMap.get(arrOutput[i]);
            }
        }
    }
    return -1;
}
var strOutput = document.getElementById('strOutput');
strOutput.value = "Оценка времени работы метода поиска Бойера-Мура и Стандартной функции поиска.";

var inputStr = document.getElementById('inputStr');



//Добавление строк
AddStr1.onclick = function () {
    strOutput.value += inputStr.value;
    inputStr.value = '';

}


//Поиск -Упрощенный Бойера-Мура+ Стандарный поиск // с учетом регистра 


SearchStr.onclick = function () {
    var strSerch = document.getElementById('strSerch');

    if (inputStr.value.length <= strOutput.value.length) {
        var tab = tabBoyer(inputStr.value);
        var result = "";
        var start = new Date().getTime();
        for (var i = 0; i < 10000; i++) {
            result = boyer(inputStr.value, tab, strOutput.value);
        }
        var end = new Date().getTime();
        if (result == -1) {
            strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура:<br>Подстрака не найдена</p></div>"
        } else {
            //Вывод
            var textFull, textFull2, textSearch;
            textFull = strOutput.value.slice(0, result - inputStr.value.length + 1);
            textSearch = strOutput.value.slice(result + 1 - inputStr.value.length, result + 1);
            textFull2 = strOutput.value.slice(result + 1, strOutput.value.length);
            strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура</p><p>" + textFull + "<s>" + textSearch + "</s>" + textFull2 + "</p>" + "<p>Время работы:" + (end - start) / 10000 + "ms</p></div>";
        }

    } else {
        strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура:<br>Подстрока не найдена</p></div>";
    }
    // Стандартный поиск 
    start = new Date().getTime();
    for (var i = 0; i < 10000; i++) {
        var standartSearch = strOutput.value.indexOf(inputStr.value, 0);
    }
    end = new Date().getTime();
    //Вывод
    if (standartSearch >= 0 && inputStr.value!='') {
        textFull = strOutput.value.slice(0, standartSearch);
        textSearch = strOutput.value.slice(standartSearch, standartSearch + inputStr.value.length);
        textFull2 = strOutput.value.slice(standartSearch + inputStr.value.length, strOutput.value.length);
        strSerch.innerHTML += "<div><p>Cтандартнаяй функция поиска</p><p>" + textFull + "<s>" + textSearch + "</s>" + textFull2 + "</p>" + "<p>Время работы:" + (end - start) / 10000 + "ms</p></div>";
    } else {
        strSerch.innerHTML += "<div><p>Cтандартной функции поиска:<br> Подстрока не найдена</p></div>";

    }

}
//Поиск -Упрощенный Бойера-Мура+ Стандарный поиск // без учетом регистра 
SearchStr2.onclick = function () {
    var strSerch = document.getElementById('strSerch');
 var strOutputCaps=strOutput.value.toUpperCase();
    var strCaps = inputStr.value.toUpperCase();
 
    if (inputStr.value.length <= strOutput.value.length) {
        var tab = tabBoyer(strCaps);
        var result = "";
        var start = new Date().getTime();
        for (var i = 0; i < 10000; i++) {
            result = boyer(strCaps, tab, strOutputCaps);
        }
        var end = new Date().getTime();
        if (result == -1) {
            strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура:<br>Подстрака не найдена</p></div>"
        } else {
            //Вывод
            var textFull, textFull2, textSearch;
            textFull = strOutput.value.slice(0, result - inputStr.value.length + 1);
            textSearch = strOutput.value.slice(result + 1 - inputStr.value.length, result + 1);
            textFull2 = strOutput.value.slice(result + 1, strOutput.value.length);
            strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура</p><p>" + textFull + "<s>" + textSearch + "</s>" + textFull2 + "</p>" + "<p>Время работы:" + (end - start) / 10000 + "ms</p></div>";
        }

    } else {
        strSerch.innerHTML = "<div><p>Упрощенный Бойера-Мура:<br>Подстрока не найдена</p></div>";
    }
    // Стандартный поиск 
    start = new Date().getTime();
    for (var i = 0; i < 10000; i++) {
        var standartSearch = strOutputCaps.indexOf(strCaps, 0);
    }
    end = new Date().getTime();
    //Вывод
    if (standartSearch >= 0) {
        textFull = strOutput.value.slice(0, standartSearch);
        textSearch = strOutput.value.slice(standartSearch, standartSearch + inputStr.value.length);
        textFull2 = strOutput.value.slice(standartSearch + inputStr.value.length, strOutput.value.length);
        strSerch.innerHTML += "<div><p>Cтандартнаяй функция поиска</p><p>" + textFull + "<s>" + textSearch + "</s>" + textFull2 + "</p>" + "<p>Время работы:" + (end - start) / 10000 + "ms</p></div>";
    } else {
        strSerch.innerHTML += "<div><p>Cтандартной функции поиска:<br> Подстрока не найдена</p></div>";

    }

}