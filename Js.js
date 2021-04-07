

var strOutput = document.getElementById('strOutput');
strOutput.value="Оценить время";

var inputStr=document.getElementById('inputStr');
var str = strOutput.value;//удалить
//Добавление строк
AddStr1.onclick = function (){
strOutput.value+=inputStr.value;
inputStr.value = '';
str = strOutput.value;//удалить
}
console.log(strOutput.value.length);
//Поиск -Упрощенный Бойера-Мура
SearchStr.onclick = function (){
    var m = document.getElementById('strSerch');
    
    m.innerHTML="<p>колво"+strOutput.value.length+"</p>"
}
///C



