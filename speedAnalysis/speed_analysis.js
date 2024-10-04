let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text 
    document.getElementById('inputText').value = testText;

    // Reset result and timer, start the timer 
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime()

    // Functionality fix, clear and enable typing field when starting
    document.getElementById('userInput').value = ""; 
    document.getElementById('userInput').readOnly = false;

    // Change button text and functionality 
    var button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}


function endTest() {
    endTime = new Date().getTime();

    // Disable user input 
    document.getElementById('userInput').readOnly = true;

    // Calcualte time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds 
    var userTypedText = document.getElementById('userInput').value;

    // Practice task add Total Length 
    var totalLength = userTypedText.length;

    // Split the text using regex to count words correctly 
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value 

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords/timeElapsed) * 60);
    }

    // Display the results. Practice task: added total length to the html
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
        "<p>Total Length: " + totalLength + "</p>" +
        "<p>Words typed: " + typedWords + "</p>" + 
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" + 
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById('btn');
    button.innerHTML = "Start test";
    button.onclick = startTest;
}
 