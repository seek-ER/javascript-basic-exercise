export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  // return new Promise((resolve, reject) => {
  //   const result = [];
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const promise of promises) {
  //     promise.then(
  //       value => result.push({ status: 'fulfilled', value }),
  //       reason => result.push({ status: 'rejected', reason }),
  //     );
  //   }
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const iterator of result) {
  //     if (iterator.status === 'rejected') {
  //       reject();
  //     }
  //   }
  //   resolve();
  // });


  function allSettled(iterable) {
    // eslint-disable-next-line no-restricted-syntax
    for (const promise of iterable) {
      if (typeof promise.then !== 'function') {
        throw new Error('Not all elements are promises.');
      }
    }
    return new Promise((resolve, reject) => {
      function addElementToResult(i, elem) {
        result[i] = elem;
        elementCount += 1;
        if (elementCount === result.length) {
          // eslint-disable-next-line no-restricted-syntax
          for (const iterator of result) {
            if (iterator.status === 'rejected') {
              reject();
            }
          }
          resolve();
        }
      }
      let index = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const promise of iterable) {
        // Capture the current value of `index`
        const currentIndex = index;
        promise.then(
          value => addElementToResult(
            currentIndex, {
              status: 'fulfilled',
              value,
            },
          ),
          reason => addElementToResult(
            currentIndex, {
              status: 'rejected',
              reason,
            },
          ),
        );
        index += 1;
      }
      let elementCount = 0;
      const result = new Array(index);
    });
  }


  return allSettled(promises);
}
