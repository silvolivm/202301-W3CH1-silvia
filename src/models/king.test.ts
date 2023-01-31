import { King } from './king';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const kingJoffrey = new King('Joffrey', 'Baratheon', 55, true, 9);
    const king = new King('Joffrey', 'Baratheon', 55, true, 9);
    test('Then it values should be filled', () => {
      expect(king).toHaveProperty('kingdomYears');
    });
    test('Then if you call the die function', () => {
      king.die();
      expect(king.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(king.greetings()).toBe(
        'Joffrey de la familia Brathon: Vais a morir todos'
      );
    });
  });
});
