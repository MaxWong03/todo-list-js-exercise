// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, descriptions) => {
  const task = {
    title: title,
    complete: false,
    taskDescriptions: descriptions,
    markCompleted: function() {
      this.complete = true;
    },
    logsState: function() {
      console.log(`${this.title} has ${this.complete ? "" : "not"} been completed`);
    }
  };
  return task;
};


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logsState();
task1.markCompleted();
task1.logsState();

task2.logsState();
task2.markCompleted();
task2.logsState();


console.log(tasks);