let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let grocery1;
let grocery2;
let grocery3;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('grocery-1').value);
    grocery2 = parseFloat(document.getElementById('grocery-2').value);
    grocery3 = parseFloat(document.getElementById('grocery-3').value);

    total = grocery1 + grocery2 + grocery3;

    document.getElementById('groceriesTotal').innerText = `The total amount is: ${total}`;
}