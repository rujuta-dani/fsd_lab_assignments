const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;


    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");


    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;

    if (name === "") {

        nameError.textContent = "Name is required.";
        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent = "Phone number is required.";
        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        isValid = false;
    }


    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        isValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        isValid = false;
    }

    if (isValid) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }

});