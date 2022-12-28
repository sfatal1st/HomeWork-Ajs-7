export default class Validator {
  validateUserName(userName) {
    if (/\d{4}/.test(userName)) {
      return false;
    }
    return /^[A-Za-z][\w-]*[A-Za-z]$/.test(userName);
  }
}
