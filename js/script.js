// Variables
var calculate = document.getElementById("calculate");
var burgerName = document.getElementById("burger-name");


// 1. Adding the "click" event to the button (#calculate)
calculate.addEventListener("click",
 function () {
    // 2. Checking that user inserts burger name
    if ((burgerName.value != "") && (isNaN(burgerName.value))) {
    } else {
        alert("Please give a name to your burger! 🍔");
    }
 }
);