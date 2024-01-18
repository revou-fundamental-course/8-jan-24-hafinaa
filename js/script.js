let resultBox = document.querySelector('#result-box');
let kside1 = document.querySelector('#keliling .s-input');
let lside1 = document.querySelector('#luas .s-input');
let kside2 = document.querySelector('#keliling .answer');
let lside2 = document.querySelector('#luas .answer');
let kside3 = document.querySelector('#keliling .answer2');
let lside3 = document.querySelector('#luas .answer2');

const calBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
var side;
var keliling;
var luas;
const inputBox = document.getElementById('input-box');

function clearAll(){
    resultBox.style.display = "none";
    inputBox.value="";
}

clearAll();

function calkeliling(){
    keliling = 4 * side;
    kside1.innerHTML="K = 4 x "+side;
    kside2.innerHTML="K = "+keliling;
    kside3.innerHTML="Keliling persegi adalah "+keliling+" cm.";
}
function calluas(){
    luas = side * side;
    lside1.innerHTML="L = "+side+" x "+side;
    lside2.innerHTML="L = "+luas;
    lside3.innerHTML="Luas persegi adalah "+luas+" cm2";
}

calBtn.addEventListener('click', function(){
    side = inputBox.value;
    calkeliling();
    calluas();
    resultBox.style.display = "flex";
})

resetBtn.onclick = clearAll;