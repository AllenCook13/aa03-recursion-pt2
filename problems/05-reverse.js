/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
// console.log('house'.slice(1) + 'house'[0]);
// function reverse(str) {
//   let newStr = '';
//   //base case str === ''
//   //recursive case shift str[1] to str[0]
//   if (str === '') {
//     return '';
//   } else {
//     return str.subString[1]
//   }

//}
function reverse(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return reverse(str.slice(1)) + str[0]
  }
}

function reverse(str) {
  if (str.length === 0) return str;
  return reverse(str.slice(i)) + str[0];
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
