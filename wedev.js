function updateDate() {
    const today = new Date();
    const days = ["Sun", "Mon", "Tues", "Wedn", "Thurs", "Fri", "Satur"];
    
    const dayName = days[today.getDay()];
    const date = today.toLocaleDateString(); 
    
    document.getElementById("dateDisplay").textContent = ` ${dayName}, ${date}`;
}
updateDate();
document.getElementById("clearHistory").addEventListener("click", function () {
document.getElementById("activityLog").innerHTML = ""; 
});




