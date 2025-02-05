document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous messages
    errorMessage.textContent = "";

    // Hardcoded username and password (for testing)
    if (username === "love" && password === "123") {
        alert("Login successful!");
        window.location.href = "main.html"; // Redirect to another page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});