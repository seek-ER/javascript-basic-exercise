export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || undefined === array) {
    throw new Error('Creating list from undefined array');
  }
  if (Array.isArray(array) && array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  function createList(n) {
    if (n === array.length - 1) {
      return { value: array[array.length - 1], next: null };
    }
    return { value: array[n], next: createList(n + 1) };
  }
  return createList(0);
}
