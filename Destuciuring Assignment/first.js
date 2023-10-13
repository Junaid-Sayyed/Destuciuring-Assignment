// 01. Count the occurrences.

function countWords(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g);
  
    const map = new Map();
  
    if (words) {
      for (let word of words) {
        if (map.has(word)) {
          map.set(word, map.get(word) + 1);
        } else {
          map.set(word, 1);
        }
      }
    }
  
    return map;
  }
  
  const sentence = "I am sayyed Junaid .";
  console.log(countWords(sentence));
  