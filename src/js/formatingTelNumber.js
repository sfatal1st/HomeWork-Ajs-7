export default function formatingTelNumber(telNumber) {
  telNumber = telNumber.replace(/\s{1,}/g, '');
  telNumber = telNumber.replace(/-/g, '');
  telNumber = telNumber.replace(/\(/g, '');
  telNumber = telNumber.replace(/\)/g, '');
  if (/^8/.test(telNumber)) {
    telNumber = telNumber.replace(/^8/, '+7');
  }
  return telNumber;
}
