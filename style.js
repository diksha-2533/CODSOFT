// Get the input box and all buttons
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

// Variable to hold the current expression
let expression = "";

// Add event listener to every button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;

    if (buttonValue === "AC") {
      // Clear everything
      expression = "";
      inputBox.value = "0";
    } 
    else if (buttonValue === "DEL") {
      // Delete last character
      expression = expression.slice(0, -1);
      inputBox.value = expression || "0";
    } 
    else if (buttonValue === "=") {
      // Evaluate the expression safely
      try {
        // Replace % with /100 for percentage calculation
        expression = expression.replace(/%/g, "/100");
        const result = eval(expression);
        inputBox.value = result;
        expression = result.toString(); // Allow further calculations
      } catch (error) {
        inputBox.value = "Error";
        expression = "";
      }
    } 
    else {
      // Append pressed button to expression
      expression += buttonValue;
      inputBox.value = expression;
    }
  });
});
