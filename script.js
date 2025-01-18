// Login Form Handler
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real submission
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
});

// Logout Button Handler
document.getElementById("logout").addEventListener("click", function () {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
});
