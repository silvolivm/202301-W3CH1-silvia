import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  constructor(
    charName: string,
    family: string,
    age: number,
    // eslint-disable-next-line no-unused-vars
    public whoServes: Fighter,
    // eslint-disable-next-line no-unused-vars
    public service: number
  ) {
    super(charName, family, age, true);
  }

  greetings(): string {
    return super.greetings() + 'Soy un loser';
  }
}
