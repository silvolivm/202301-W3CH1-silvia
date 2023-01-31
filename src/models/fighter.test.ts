import { Fighter } from './fighter';

describe('Given the king class extend from the character', () => {
  describe('When you create a new king', () => {
    const fighter = new Fighter('Jaime', 'Lannister', 43, true, 'Mazo', 7);
    test('Then it values should be filled', () => {
      expect(fighter).toHaveProperty('weapon');
      expect(fighter).toHaveProperty('dexterity');
    });
    test('Then if you call the die function', () => {
      fighter.die();
      expect(fighter.isAlive).toBe(false);
    });
    test('Then if you call the die function', () => {
      expect(fighter.greetings()).toBe(
        'Jaime de la familia Lannister: Primero pego y luego pregunto'
      );
    });
  });
});
