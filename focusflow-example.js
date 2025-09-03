// =======================
// FocusFlow Sample Code
// Unit 0 Skill Examples
// =======================

// 1. VALUES, DATA TYPES, AND OPERATIONS
// Declaring and using variables with different data types
let taskDuration = 25; // Number
let taskName = "Write reflection essay"; // String
let isTaskCompleted = false; // Boolean

console.log("Task duration is:", taskDuration + " minutes"); // Operation with numbers and string

// 2. STRINGING CHARACTERS TOGETHER
// Using string concatenation and template literals
console.log("You started the task: " + taskName);
console.log(`Task "${taskName}" is currently ${isTaskCompleted ? "done" : "in progress"}`);

// 3. CONTROL STRUCTURES AND LOGIC
// Using if/else to control the timer logic
let timer = 25;

if (timer > 0) {
  console.log("Timer is running. Time left:", timer);
} else {
  console.log("Time's up! Take a break.");
}

// 4. BUILDING ARRAYS
// Creating an array to store task names
let tasks = []; // Empty array to store tasks
tasks.push("Finish coding assignment");
tasks.push("Read JavaScript article");

console.log("Current tasks:", tasks);

// 5. USING ARRAYS
// Loop through the tasks and print each one
tasks.forEach(function(task, index) {
  console.log(`Task ${index + 1}: ${task}`);
});

// Remove a task
tasks.splice(0, 1); // Remove first task
console.log("Tasks after removing first one:", tasks);

// 6. CREATING AND USING OBJECTS
// Representing a task as an object
let taskObject = {
  name: "Submit project worksheet",
  category: "School",
  completed: false
};

// Accessing object properties
console.log("Task name:", taskObject.name);
console.log("Task category:", taskObject["category"]);

// Updating object property
taskObject.completed = true;
console.log("Updated task:", taskObject);
