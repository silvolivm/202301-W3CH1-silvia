import { Character } from './character';
import { King } from './king';
import { Fighter } from './fighter';
import { Adviser } from './adviser';
import { Squire } from './squire';

const kingJoffrey = new King('Joffrey', 'Baratheon', 55, true, 9);
const fighterJaime = new Fighter('Jaime', 'Lannister', 43, true, 'Mazo', 7);
const fighterDaenerys = new Fighter(
  'Daenerys',
  'Targaryen',
  25,
  true,
  'Dragon',
  6
);
const adviserTyrion = new Adviser('Tyrion', 'Lannister', 43, fighterDaenerys);
const squireBronn = new Squire('Bronn', '', 31, fighterJaime, 7);

export const characters: Character[] = [
  kingJoffrey,
  fighterJaime,
  fighterDaenerys,
  adviserTyrion,
  squireBronn,
];
