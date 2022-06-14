document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Event listener: ", event);

});
//clears the screen
function clearScreen() {
    console.log("Klikket på klarer knapp");
    document.calculator.result.value = "";
}
//function over buttons
function myFunction(id) {
    document.calculator.result.value += id;
}


// Calculates input values
function calculate() {
    try {
        var input = eval(document.calculator.result.value);
        document.calculator.result.value = input;
    } catch (err) {
        document.calculator.result.value = "Error";
    }

}
//calculates the squareroot
function square() {
    var sqRoot = Math.sqrt(document.calculator.result.value);
    document.calculator.result.value = sqRoot;

}











//calculates the percentage off a number







