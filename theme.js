//Function to Toggle Theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let isDarkMode = document.body.classList.contains("dark-mode");

    // Change Button Text & Icon
    const themeButton = document.getElementById("themeButton");
    themeButton.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Save theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Event Listener for Button Click
document.getElementById("themeButton").addEventListener("click", toggleTheme);

// Apply Stored Theme on Page Load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("themeButton").textContent = "☀️ Light Mode";
}