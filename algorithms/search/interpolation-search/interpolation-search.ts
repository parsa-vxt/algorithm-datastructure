const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const interpolationSearch = (arr: number[], target: number) => {
  let higherBound = arr.length - 1;
  let lowerBound = 0;

  while (
    target >= arr[lowerBound] &&
    target <= arr[higherBound] &&
    lowerBound <= higherBound
  ) {
    const pointer =
      lowerBound +
      ((target - arr[lowerBound]) * (higherBound - lowerBound)) /
        (arr[higherBound] - arr[lowerBound]);

    if (arr[pointer] === target) {
      return pointer;
    } else if (arr[pointer] < target) {
      lowerBound = pointer + 1;
    } else {
      higherBound = pointer - 1;
    }
  }

  return -1;
};

console.log("Result:", interpolationSearch(arr, 5));
