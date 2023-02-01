import { King } from './king';
import { Fighter } from './fighter';

const king1 = new King('Joffrey', 'Baratheon', 55, true, 9);
const fighter1 = new Fighter('Jaime', 'Lannister', 43, true, 'Mazo', 7);

console.log(king1.greetings());
console.log(fighter1.greetings());
