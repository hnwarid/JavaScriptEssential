let count = 0; // Initialize count 0

function increaseCount() {
    count++; // Increment count by 1 
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML 
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}


// Practice task: reset followers count button 
function resetCount() {
    count = 0;
    // document.getElementById('countDisplay').innerHTML = count; 
    displayCount();
    alert("Your followers count has been reset to 0.");
    console.log("Reset was successful.")
}