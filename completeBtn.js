function updateTaskStatus() {
    const taskCountElement = document.getElementById("taskCount");
    const marksElement = document.getElementById("marks");
    const activityLog = document.getElementById("activityLog");
    const completeButtons = document.getElementsByClassName("complete-btn");
    let taskCount = parseInt(taskCountElement.textContent) || 0;
    let marks = parseInt(marksElement.textContent) || 0;
    for (let i = 0; i < completeButtons.length; i++) {
        if (!completeButtons[i].dataset.listenerAdded) {
            completeButtons[i].addEventListener("click", function () {
                if (taskCount > 0) {
                    taskCount--;  
                    marks += 20;  
        taskCountElement.textContent = taskCount;
        marksElement.textContent = marks;
                    let logEntry = document.createElement("p");
                    logEntry.textContent = `✅ Your Task No. ${i + 1} completed. You have to complete more  ${taskCount} tasks`;
                    activityLog.appendChild(logEntry);
                    this.disabled = true;
                    this.classList.add("opacity-90", "cursor-not-allowed");
 
             if (taskCount === 0) {
                  setTimeout(() => {
              alert("You have done all tasks successfully!");
                }, 500); 
            }


                }
            });

         
            completeButtons[i].dataset.listenerAdded = "true";
        }
    }
}

document.addEventListener("DOMContentLoaded", updateTaskStatus);

document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-btn");

    completeButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            alert(`✅ Task ${index + 1} completed successfully!`);
        });
    });
});