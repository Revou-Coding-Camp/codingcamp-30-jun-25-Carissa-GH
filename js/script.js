

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


  // Time
  function updateTime() {
    const timeNow = new Date().toString();
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      timeEl.textContent = timeNow;
    }
  }
  setInterval(updateTime, 1000);
  updateTime();

