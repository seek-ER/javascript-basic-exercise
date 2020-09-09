export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Flatten undefined or null array');
  }

  function flat(input, depth = 1, stack = []) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of input) {
      if (item instanceof Array && depth > 0) {
        flat(item, depth - 1, stack);
      } else {
        stack.push(item);
      }
    }
    return stack;
  }

  return flat(array);
}
