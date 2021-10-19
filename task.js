// TASK MANAGER 

const menu=`TASK MANAGER 

What would you like to do (Please enter one of the options below):
"TASKS"-Display all tasks
"NEW"-Add A New Task
"REMOVE"- Remove a Task
"CLOSE"- Close the task manager
`; 

// Array for storing tasks 
const tasks = [
    `Charge Macbook`, 
    `Master JavaScript`
];

// for displaying tasks to the user (empty string)
let showTasks = ``; 

// Displays the menu for the user to select an option. Sets the user's response to the userInput variable
let userInput =prompt(menu);

// Loops and continues to display the menu until the user ends/closes the task manager-AKA enters `close`
while (userInput !== `CLOSE`){

    // checks to see if user entered TASKS 
    // if (userInput ===`TASKS`){
    //     // The for of loop is used here to concatenate each task in the tasks array to the showTasks string variable 
    //     for (task of tasks) {
    //         // runs this code for each item of the array, /n is used to creat a new line after each task, 
    //         showTasks = showTasks +`${task}\n';
    //     }
    //     alert (showTasks);
    //     // Sets the value of showTasks back to an empty string 
    //     showTasks= ""; 
    // }

    if  (userInput === `NEW`){
        let newTask = prompt(`Please enter the new task:`); 
    }
    userInput = prompt(menu);
    };

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager`);