document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        let nameParts = name.split(" ").filter(part => part.length > 0);
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorDiv = document.getElementById("form-error");
        let errorMsg = "";

        if (nameParts.length < 2) {
            errorMsg = "Please enter your full name (first and last).";
        }
        else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMsg = "Please enter a valid email address.";
        }
        else if (subject.length < 3) {
            errorMsg = "Please enter a subject (at least 3 characters).";
        }
        else if (message.length < 10) {
            errorMsg = "Please enter a message (at least 10 characters).";
        }

        if (errorMsg) {
            errorDiv.textContent = errorMsg;
            e.preventDefault();
        } else {
            errorDiv.textContent = "";
        }
    });
});