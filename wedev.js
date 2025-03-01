//Date & Day Updat Function//

function updateDate() {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const dayName = days[today.getDay()];
    const date = today.toLocaleDateString(); // Format: MM/DD/YYYY or as per locale
    
    document.getElementById("dateDisplay").textContent = ` ${dayName}, ${date}`;
}

updateDate();





