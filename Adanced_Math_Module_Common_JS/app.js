import { searchById, searchByName, filterByAge } from "./search.js";

const validIdSearch = searchById(1);

const invalidIdSearch = searchById(6);

const nameSearch = searchByName("joLiVeT");

const ageSearch = filterByAge(21);
console.log(nameSearch);
console.log(invalidIdSearch);

console.log(ageSearch);
