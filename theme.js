document.getElementById("themeButton").addEventListener("click", function () {
    const themes = ["light", "dark", "blue", "green", "red","olive","lime","teal","tomato","skyblue","gold"];
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];

    document.body.className = "";
    document.body.classList.add(randomTheme + "-mode");

    localStorage.setItem("theme", randomTheme);
});
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme + "-mode");
    }
};
