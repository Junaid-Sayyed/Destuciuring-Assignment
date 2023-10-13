// 05. Min and max values.

function findMaxAndMin(arr) {
    if (arr.length === 0) {
      return { max: undefined, min: undefined };
    }
  
    const max = Math.max(...arr);
    const min = Math.min(...arr);
  
    return { max, min };
  }
  
  // Example usage:
  const inputArray = [5, 2, 7, 1, 9];
  const result = findMaxAndMin(inputArray);
  
  console.log(result); // This will print { max: 9, min: 1 }
  