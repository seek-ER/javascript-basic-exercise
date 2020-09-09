export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const _array = [];
  if (start <= end) {
    for (let i = start; i < end; i += 1) {
      _array.push(i);
    }
  } else {
    for (let i = start; i > end; i -= 1) {
      _array.push(i);
    }
  }

  return _array;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let result = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    result += numbers[i];
  }
  return result;
}
