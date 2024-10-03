function submitFeedback() {
    // Get values from the form inputs
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperience').value; // practice task

     // Display thank-you alert
    alert('Thank you for your valuable feedback');

    // Display user information in the designated fields
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML= age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userProductExperience').innerHTML= experience;

    // Make the user info section visible
    document.getElementById('userInfo').style.display = 'block';
}


// Attach event listener for submit button click
const submitButton=document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
// document.getElementById('submitBtn').onclick = submitFeedback;  // simplification to one line

// Attach event listener for "Enter" key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});