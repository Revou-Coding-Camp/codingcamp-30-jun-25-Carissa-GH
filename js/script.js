

// Function to validate form inputs
function validateform() {

    // Get the input element for name
    const nameinput = document.getElementById('name-input');

    if(nameinput.value === '') {
        //if the input is empty, alert the user
        alert('Please enter your name!');
    } else {
        //if the input is valid, display the name in the result form
        document.getElementById('result-form').innerHTML = nameinput.value;
    }
    console.log(nameinput.value);

    // Get the input element for birthdate
    const birthdateinput = document.getElementById('birthdate-input');

    if(birthdateinput.value === '') {
        //if the input is empty, alert the user
        alert('Please enter your birthdate!');
    } else {
        //if the input is valid, display the birthdate in the result form
        document.getElementById('result-form').innerHTML = birthdateinput.value;
    }
    console.log(birthdateinput.value);

    // Get the input element for gender
    const genderinput = document.getElementById('gender-input');

    if(genderinput.value === '') {
        //if the input is empty, alert the user
        alert('Please enter your gender!');
    } else {
        //if the input is valid, display the gender in the result form
        document.getElementById('result-form').innerHTML = genderinput.value;
    }
    console.log(genderinput.value);

    // Get the input element for email
    const emailinput = document.getElementById('email-input');

    if(emailinput.value === '') {
        //if the input is empty, alert the user
        alert('Please enter your email!');
    } else {
        //if the input is valid, display the email in the result form
        document.getElementById('result-form').innerHTML = emailinput.value;
    }
    console.log(emailinput.value);

    const messageinput = document.getElementById('message-input');

    if(messageinput.value === '') {
        //if the input is empty, alert the user
        alert('Please enter your message!');
    } else {
        //if the input is valid, display the message in the result form
        document.getElementById('result-form').innerHTML = messageinput.value;
    }
    console.log(messageinput.value);
}

// Function to clear the form inputs
function clearform() {
    document.getElementById('name-input').value = '';
    document.getElementById('birthdate-input').value = '';
    document.getElementById('gender-input').value = '';
    document.getElementById('email-input').value = '';
    document.getElementById('message-input').value = '';
}

// Function to display the result form
function displayResult() {
    const resultForm = document.getElementById('result-form');
    resultForm.style.display = 'block'; // Show the result form
    resultForm.innerHTML = ''; // Clear previous content

    // Get the input values
    const name = document.getElementById('name-input').value;
    const birthdate = document.getElementById('birthdate-input').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    // Display the input values in the result form
    resultForm.innerHTML = `
        <h2>Form Results</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birthdate:</strong> ${birthdate}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
}

