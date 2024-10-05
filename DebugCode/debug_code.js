function performOperation() {
    // Get user input from input fields 
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    let result = calculateOperation(num1, num2, operation);

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
    
    // Handle additional numbers and operations 
    let numInputs = document.getElementsByClassName('numInput');
    let operationSelects = document.getElementsByClassName('operationSelect');
    for (let i = 0; i < numInputs.length; i++) {
        let currentNum = parseInt(numInputs[i].value);
        let currentOperation = operationSelects[i].value;
        result = calculateOperation(result, currentNum, currentOperation)
    }

    // Display the result 
    displayResult(result);
}

function calculateOperation(num1, num2, operation) {
    switch (operation) {
        case 'add': 
            return num1 + num2;
        case 'substract': 
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide': 
            return num1 / num2;
        default:
            return num1;
    }
}

function addNumberOperation() {
    const container = document.getElementById('additionalInputs');

    const numInput = document.createElement('input');
    numInput.type = 'number';
    numInput.className = 'numInput';
    container.appendChild(numInput);

    const operationSelect = document.createElement('select');
    operationSelect.className = 'operationSelect';
    operationSelect.innerHTML = `
        <option value="add">Add</option>
        <option value="substract">Substract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
    `;
    container.appendChild(operationSelect);
    container.appendChild(document.createElement('br')); 
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


