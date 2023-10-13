// 02. Only unique items are allowed.
function removeDuplicatesFromArray(arr) {
    const uniqueSet = new Set(arr);
  
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = removeDuplicatesFromArray(numbers);
  
  console.log(uniqueNumbers); // This will print [1, 2, 3, 4, 5]