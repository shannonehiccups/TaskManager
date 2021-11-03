const menu = `TASK MANAGER

What would you like to do (Please enter one on the options below:)
"TASKS"- Display all tasks
"NEW"- Add a New Task
"REMOVE"- Remove a Task
"CLOSE"- Close the Task Manager
`; 

// Array for storing tasks
const tasks = [
    `Charge Macbook`, 
    `Master Javascript`
]; 

// for displaying tasks to the user 
let showTasks =``; 

// for storing the value of the new task
let newTask; 

// for storing the number of the task to remove 
let num; 

// displays the menu for the user to select an option and sets the users response to the userInput variable
let userInput = prompt (menu); 

// loops and continues to display the menu until the user ends/closes the Task Manager 

while (userInput ===`TASKS`){
    if (userInput ===`TASKS`){
        for(task of tasks){
            showTasks += `${task}\n`;
        }
        alert (showTasks);
        showTasks = ""; 
    }
    if (userInput === "NEW"){
        newTask = prompt (`Please enter the new task:`);
        alert (`"${newTask}" has been added!`);
        tasks.
    }
    userInput = prompt(menu); 
}
alert (`Thank you for using the Task Manager`); 