function validateForm() {

    // NAME
    let name = document.getElementById("name").value.trim();
    let namePattern = /^[A-Za-z]+$/;

    if (name.length < 6 || !namePattern.test(name)) {
        alert("Name must contain alphabets only and be at least 6 characters.");
        return false;
    }

    // PASSWORD
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    // EMAIL
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Enter a valid email (example: name@domain.com).");
        return false;
    }

    // PHONE
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    // GENDER
    if (!document.querySelector('input[name="sex"]:checked')) {
        alert("Please select your gender.");
        return false;
    }

    // LANGUAGES
    if (document.querySelectorAll('input[name="language"]:checked').length === 0) {
        alert("Please select at least one language.");
        return false;
    }

    // ADDRESS
    let address = document.getElementById("address").value.trim();
    if (address.length < 5) {
        alert("Please enter a valid address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}