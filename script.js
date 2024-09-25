// Script to handle the support email click and show a message
document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const successMessage = document.getElementById("successMessage");

    contactButton.addEventListener("click", function() {
        // Simulate the email being sent by showing a message
        successMessage.style.display = "block";

        // Redirect the user to their default email client
        window.location.href = "mailto:support@yourapp.com";
    });
});
