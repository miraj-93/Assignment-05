function todaysDate() {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    const dayName = days[today.getDay()];
    const date = today.toLocaleDateString(); 
    
    document.getElementById("dateDisplay").innerHTML = ` ${dayName}  ${date}`;
}
todaysDate();


document.getElementById("clearHistory").addEventListener("click", function () {
document.getElementById("activityLog").innerHTML = ""; 
});




