let nameInput = document.getElementById("name_input");
let addressTextArea = document.getElementById("address_textarea");
let emailInput = document.getElementById("email_input");
let passwordInput = document.getElementById("password_input");
let tncCheckbox = document.getElementById("tnc_input");

function isNameValid(name) {
    if (name.length < 5 || name.length > 30) {
        return false;
    }
    return true;
}

function isAddressValid(address) {
    if (address.endsWith(" Street") == true) {
        return true;
    }
    return false;
}

function isEmailValid(email) {
    if (email.includes("@") && email.endsWith(".com")) {
        return true;
    }
    return false;
}

function isPasswordValid(password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}

let registerButton = document.getElementById("register_button");
registerButton.onclick = function () {
    let nameValue = nameInput.value;
    let addressValue = addressTextArea.value;
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (isNameValid(nameValue) == false) {
        window.alert("Name must be between 5 - 30 characters!");
        return;
    }
    if (isAddressValid(addressValue) == false) {
        window.alert("Address must ends with Street!");
        return;
    }
    if (isEmailValid(emailValue) == false) {
        window.alert("Email must be valid! (includes @ and ends with .com)");
        return;
    }
    if (isPasswordValid(passwordValue) == false) {
        window.alert("Password must contain at least 8 characters!");
        return;
    }

    if (tncCheckbox.checked == false) {
        window.alert("Must agree to terms and condition!");
        return;
    }

    window.alert("Register successful!");
}