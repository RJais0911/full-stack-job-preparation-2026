let tasks = []; // for storing the tasks
let running = true;
while (running) {
    let choice = prompt(
        "To-Do List Menu:\n" +
        "1 → Add task\n" +
        "2 → Show tasks\n" +
        "3 → Remove task\n" +
        "4 → Exit\n" +
        "Enter choice b/w(1-4):"
    );
    let option = Number(choice);
    switch (option) {
        case 1:
            // Add task
            let newTask = prompt("Enter task to add:");
            if (newTask.trim() !== "") {
                tasks.push(newTask);   
            } else {
                alert("Empty task not added!");
            }
            break;
        case 2:
            // Display tasks 
            if (tasks.length === 0) {               
                alert("No tasks yet!");
            } else {
                let listDisplay = "Your Tasks:\n";
                for (let i = 0; i < tasks.length; i++) {
                    listDisplay += `${i + 1}. ${tasks[i]}\n`;
                    
                }
                alert(listDisplay);
            }
            break;
        case 3:
            // Remove task
            if (tasks.length === 0) {                  
                alert("No tasks to remove!");
            } else {
                let removeIndex = prompt("Enter task number to remove:");
                let idx = Number(removeIndex) - 1;
                if (idx >= 0 && idx < tasks.length) {
                    tasks.splice(idx, 1);   
                    alert("Task removed!");
                } else {
                    alert("Invalid task number!");
                }
            }
            break;
        case 4:
            alert("Goodbye!");
            running = false;
            break;

        default:
            alert("Invalid choice! Try again.");
            break;
    }
}
