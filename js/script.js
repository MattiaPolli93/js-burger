// Variables
var calculate = document.getElementById("calculate");
var burgerName = document.getElementById("burger-name");
var addIngredients = document.getElementsByClassName("add-ingredients");
var total = document.getElementById("total");
// 1. Adding the "click" event to the button (#calculate)
calculate.addEventListener("click",
 function () {
    // 2. Checking that user inserts burger name
    if ((burgerName.value != "") && (isNaN(burgerName.value))) {
        // 3. Checking (selected) ingredients
        var i;
        var sum = 50; // 50 here matches the initial price of the burger in the footer section (i.e. 50€)
        
        for (i = 0; i < addIngredients.length; i++ ) {
            // 4. If an ingredient is selected, its value will be added
            if (addIngredients[i].checked) {
                sum += parseInt(addIngredients[i].value);
            }
        }
        // 5. Displaying cost
        total.innerHTML = sum + "€"; 
    } else {
        alert("Please give a name to your burger! 🍔");
    }
 }
);