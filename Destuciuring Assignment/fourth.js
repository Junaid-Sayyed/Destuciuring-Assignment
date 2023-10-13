// 04. Access random elements.

function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest[rest.length - 1];
    return [first, second, last];
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const result = extractElements(inputArray);
  
  console.log(result); // This will print [1, 2, 5]
  