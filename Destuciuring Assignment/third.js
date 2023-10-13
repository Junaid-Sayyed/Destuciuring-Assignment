// 03. Swap the values.

function swapValues(x, y) {
    // Use array destructuring to swap the values of x and y
    [x, y] = [y, x];

    return [x, y];
  }
  
  // Example usage:
  let a = 5;
  let b = 10;
  const result = swapValues(a, b);
  
  console.log(result); // This will print [10, 5]
  console.log(a); // This will now be 10
  console.log(b); // This will now be 5