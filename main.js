const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);

function groupAnagrams(arr) {
    const anagrams = {};
  
    arr.forEach(arr => {
      const sortedWord = arr.split('').sort().join('');
      anagrams[sortedWord] = anagrams[sortedWord] || [];
      anagrams[sortedWord].push(arr);
    });
  
    return Object.values(anagrams);
}
  

