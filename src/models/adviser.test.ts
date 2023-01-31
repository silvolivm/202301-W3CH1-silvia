import { Adviser } from './adviser';
import { King } from './king';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const king = new King('Joffrey', 'Baratheon', 55, true, 9);
    const adviser = new Adviser('Tyrion', 'Lannister', 43, king);
    test('Then it values should be filled', () => {
      expect(adviser).toHaveProperty('whoToAdvise');
    });
    test('Then if you call the die function', () => {
      adviser.die();
      expect(adviser.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(adviser.greetings()).toMatch(
        'Tyrion de la familia Lannister: No sé por qué, pero creo que voy a morir pronto'
      );
    });
  });
});
