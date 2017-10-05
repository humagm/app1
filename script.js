function validatePwd() {
    var invalid = " "; // Invalid character is a space
    var minLength = 8; // Minimum length
    var username = document.myForm.username.value;
    var pw1 = document.myForm.password.value;
    var pw2 = document.myForm.password2.value;
    // check for a value in both fields.
    if (pw1 == '' || pw2 == '') {
    alert('Please enter your password twice.');
    return false;
    }
    // check for minimum length
    if (document.myForm.password.value.length < minLength) {
    alert('Your password must be at least ' + minLength + ' characters long. Try again.');
    return false;
    }
    // check for correct username
    if (document.myForm.Username.value.indexOf(invalid)) {
    alert("Sorry, Username you typed is incorrect.");
    return false;
    }
    else {
    if (pw1 != pw2) {
    alert ("You did not enter the same new password twice. Please re-enter your password.");
    return false;
    }
    else {
    alert('Nice job.');
    return true;
          }
       }
    }
    //  End -->