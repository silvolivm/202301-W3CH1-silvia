import { Character } from './character';
import { King } from './king';
import { Fighter } from './fighter';
import { Adviser } from './adviser';
import { Squire } from './squire';

const kingJoffrey = new King('Joffrey', 'Baratheon', 55, 9);
const fighterJaime = new Fighter('Jaime', 'Lannister', 43, 'Mazo', 7);
const fighterDaenerys = new Fighter('Daenerys', 'Targaryen', 25, 'Dragon', 6);
const adviserTyrion = new Adviser('Tyrion', 'Lannister', 43, fighterDaenerys);
const squireBronn = new Squire('Bronn', '', 31, fighterJaime, 7);

export const characters: Character[] = [
  kingJoffrey,
  fighterJaime,
  fighterDaenerys,
  adviserTyrion,
  squireBronn,
];
// MockCharacters.push ( new Counselor( "tyrion", "lanniste", 34,mockCharacters[2])
// )
