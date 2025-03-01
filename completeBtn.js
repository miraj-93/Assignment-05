function updateTaskStatus() {
    const taskCountElement = document.getElementById("taskCount");
    const marksElement = document.getElementById("marks");
    const activityLog = document.getElementById("activityLog");
    const completeButtons = document.getElementsByClassName("complete-btn");

    let taskCount = parseInt(taskCountElement.textContent);
    let marks = parseInt(marksElement.textContent);

    for (let i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener("click", function() {
            if (taskCount > 0) {
                taskCount--;  // Decrease task count
                marks += 10;  // Increase marks by 10

                // Update UI
                taskCountElement.textContent = taskCount;
                marksElement.textContent = marks;

                // Log Activity
                let logEntry = document.createElement("p");
                logEntry.textContent = `Task ${i + 1} completed. Remaining tasks: ${taskCount}`;
                activityLog.appendChild(logEntry);

                // Disable the button
                this.disabled = true;
            }
        });
    }
}

updateTaskStatus();  // Initialize function