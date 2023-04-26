var counter_widget = document.querySelector(".counter-widget")
var additionBtn = document.querySelector(".counter1")
var subtractingBtn = document.querySelector(".counter2")
var resetBtn = document.querySelector(".refresh")
var count = document.querySelector(".number")



let addition = 0;

function widgetCounter() {
    // let subtraction = 0;

    count.innerHTML = ++addition
    // counter2.innerHTML = btn2
    // refresh. innerHTML = btn3

    // alert(addition++)
    
}
additionBtn.addEventListener('click', widgetCounter)


let subtraction = 0;
function subtractCount(){

    count.innerHTML = --subtraction
    
}
subtractingBtn.addEventListener('click',subtractCount)