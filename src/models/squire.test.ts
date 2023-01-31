import { Fighter } from './fighter';
import { Squire } from './squire';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const fighter = new Fighter('Jaime', 'Lannister', 43, 'Mazo', 7);
    const squire = new Squire('Bronn', '', 23, fighter, 5);
    test('Then it values should be filled', () => {
      expect(squire).toHaveProperty('whoServes');
      expect(squire).toHaveProperty('service');
    });
    test('Then if you call the die function', () => {
      squire.die();
      expect(squire.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(squire.greetings()).toBe('Bronn de la familia : Soy un loser');
    });
  });
});
