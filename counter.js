var counter_widget = document.querySelector(".counter-widget")
var additionBtn = document.querySelector(".counter1")
var subtractingBtn = document.querySelector(".counter2")
var resetBtn = document.querySelector(".refresh")
var multiplicationBtn = document.querySelector(".multiply")
var textboxElement = document.querySelector(".textbox")
var count = document.querySelector(".number")






function subtractCount() {

    if (addition > 0) {
        count.innerHTML = --addition
    }


}

subtractingBtn.addEventListener('click', subtractCount)

let addition = 0;

function widgetCounter() {


    count.innerHTML = ++addition


}

additionBtn.addEventListener('click', widgetCounter)

let reset = 0;

function resetCount() {


    count.innerHTML = 0;
    location.reload()



}

resetBtn.addEventListener('click', resetCount)



function multiplicationCount() {
    let times = textboxElement.value

    count.innerHTML = addition * times

}
console.log(addition);
multiplicationBtn.addEventListener('click', multiplicationCount)

