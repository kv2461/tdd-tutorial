// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

var isIsomorphic = function(s, t) {
    let isomorphicMapS = new Map();
    let isomorphicMapT = new Map();
    let newWordArrayS = [];
    let newWordArrayT = [];
    for (let i = 0; i < t.length; i++) {
        if (isomorphicMapS.has(t[i]) && isomorphicMapS.get(t[i]) === s[i]) {
            newWordArrayS.push(isomorphicMapS.get(t[i]));
        } else if (isomorphicMapS.has(t[i]) && isomorphicMapS.get(t[i]) !== s[i]) {
          return false;
        } else {
            isomorphicMapS.set(t[i],s[i]);
            newWordArrayS.push(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (isomorphicMapT.has(s[i]) && isomorphicMapT.get(s[i]) === t[i]) {
            newWordArrayT.push(isomorphicMapT.get(s[i]));
        } else if (isomorphicMapT.has(s[i]) && isomorphicMapT.get(s[i]) !== t[i]) {
          return false;
        } else {
            isomorphicMapT.set(s[i],t[i]);
            newWordArrayT.push(t[i]);
        }
    }
    return (newWordArrayS.join('') === s && newWordArrayT.join('') === t);
};


module.exports = isIsomorphic;