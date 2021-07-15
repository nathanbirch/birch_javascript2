export function convertToNumber(num) {
  if (isNaN(num)) {
    return 'Please enter a valid number.';
  } else {
    return parseFloat(num);
  }
}
