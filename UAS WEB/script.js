document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Placeholder logic for login (replace with real authentication)
        if (email === "test@example.com" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Invalid email or password.");
        }

        // Reset form fields
        loginForm.reset();
    });
});
