import { searchById, searchByName, filterByAge } from "./search.js";

const validIdSearch = searchById(1);

const invalidIdSearch = searchById(6);

const nameSearch = searchByName("joLiVeT");

const ageSearch = filterByAge(21);
console.log(nameSearch);
console.log(invalidIdSearch);

console.log(ageSearch);

// QUESTION 11: Module-Based To-Do Manager

import { addTask, removeTask, listTasks } from "./todo.js";

console.log(addTask("Shopping"));
console.log(addTask("Cleaning"));
console.log(addTask("Journaling"));

console.log(removeTask());

console.log(listTasks());
