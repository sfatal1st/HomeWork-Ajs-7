import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Magician from '../js/Magician';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Zombie from '../js/Zombie';

test('testing damage(points) function with type Deamon', () => {
  const daemon = new Daemon('test');
  daemon.damage(10);
  const { health } = daemon;
  const expected = 100 - (10 * (1 - 40 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Deamon', () => {
  const daemon = new Daemon('test');
  daemon.levelUp();
  const {
    level, health, attack, defence,
  } = daemon;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 12, defence: 48,
  });
});

test('testing damage(points) function with type Undead', () => {
  const undead = new Undead('test');
  undead.damage(10);
  const { health } = undead;
  const expected = 100 - (10 * (1 - 25 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Undead', () => {
  const undead = new Undead('test');
  undead.levelUp();
  const {
    level, health, attack, defence,
  } = undead;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 30, defence: 30,
  });
});

test('testing damage(points) function with type Magician', () => {
  const magician = new Magician('test');
  magician.damage(10);
  const { health } = magician;
  const expected = 100 - (10 * (1 - 40 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Magician', () => {
  const magician = new Magician('test');
  magician.levelUp();
  const {
    level, health, attack, defence,
  } = magician;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 12, defence: 48,
  });
});

test('testing damage(points) function with type Bowman', () => {
  const bowman = new Bowman('test');
  bowman.damage(10);
  const { health } = bowman;
  const expected = 100 - (10 * (1 - 25 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Bowman', () => {
  const bowman = new Bowman('test');
  bowman.levelUp();
  const {
    level, health, attack, defence,
  } = bowman;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 30, defence: 30,
  });
});

test('testing damage(points) function with type Swordsman', () => {
  const swordsman = new Swordsman('test');
  swordsman.damage(10);
  const { health } = swordsman;
  const expected = 100 - (10 * (1 - 10 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Swordsman', () => {
  const swordsman = new Swordsman('test');
  swordsman.levelUp();
  const {
    level, health, attack, defence,
  } = swordsman;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 48, defence: 12,
  });
});

test('testing damage(points) function with type Zombie', () => {
  const zombie = new Zombie('test');
  zombie.damage(10);
  const { health } = zombie;
  const expected = 100 - (10 * (1 - 10 / 100));
  expect(health).toBe(expected);
});
test('testing levelUp function with type Zombie', () => {
  const zombie = new Zombie('test');
  zombie.levelUp();
  const {
    level, health, attack, defence,
  } = zombie;
  const result = {
    level, health, attack, defence,
  };
  expect(result).toEqual({
    level: 2, health: 100, attack: 48, defence: 12,
  });
})