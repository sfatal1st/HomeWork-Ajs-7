import { playerStatus, sortList } from '../app';

test.each([
  ['Маг', 95, 'healthy'],
  ['Воин', 35, 'wounded'],
  ['Лучник', 5, 'critical'],
  ['Лекарь', 55, 'healthy'],
])('testing playerStatus function with name %s and %i health', (_, health, expected) => {
  const result = playerStatus({ _, health });
  expect(result).toBe(expected);
});
test('testing sortList function', () => {
  const unsortList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortList(unsortList);
  expect(result).toEqual(expected);
});
