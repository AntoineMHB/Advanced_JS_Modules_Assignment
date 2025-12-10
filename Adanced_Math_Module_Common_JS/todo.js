import { array } from "./storage.js";

let newArray = array;
export function addTask(newTask) {
  newArray = array.push(newTask);
  return array;
}

console.log(addTask("Jogging"));

export function removeTask() {
  newArray = array.pop();
  return array;
}

console.log(removeTask());

export function listTasks() {
  let listOfTasks = array.map((task) => console.log(task));
  return listOfTasks;
}

console.log(listTasks());
