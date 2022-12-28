import Validator from '../js/Validator';
import formatingTelNumber from '../js/formatingTelNumber';

test.each([
  ['User1111', false],
  ['1-_Tester_-1', false],
  ['Test_true', true],
  ['Helown-_111u', true],
])('testing validateUserName function with userName %s', (userName, expected) => {
  const name = new Validator();
  const result = name.validateUserName(userName);
  expect(result).toBe(expected);
});

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
])('testing formatingTelNumber function with name %s and %i health', (telNumber, expected) => {
  const result = formatingTelNumber(telNumber);
  expect(result).toBe(expected);
});
