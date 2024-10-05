function performOperation() {
    // Get user input from input fields 
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Practice task multiple operation 
    let operation = document.getElementById('operation').value;

    //Check if inputs are valid numbers 
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;

    // Perform the operation
        if (operation === 'multiply') {
            result = multiply(num1, num2)
        } else if (operation === 'divide') {
            result = divide(num1, num2)
        } else if (operation === 'add') {
            result = add(num1, num2)
        } else if (operation === 'substract') {
            result = substract(num1, num2)
        }

        // Display the result 
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a dbugger statement to pause execution
    debugger;

    // Multiply the numbers 
    return a * b;
}

// Practice task: multiple operation 
function divide(a, b) {
    debugger;
    return a/b;
}

function add(a, b) {
    debugger;
    return a+b;
}

function substract(a,b) {
    debugger;
    return a-b;
}

function displayResult(result) {
    // Display the result in the paragraph format
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is ${result}`;
}


