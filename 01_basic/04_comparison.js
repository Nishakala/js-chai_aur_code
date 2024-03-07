// console.log("2" > 1)
// console.log("02" > 1)
 // there is automatically type conversion by javascript
// but sometimes the output is different from the predicted output

// typescript have strict rules for that type conversions nothing else

console.log(null >0); // false
console.log(null ==0); // false 
console.log(null >=0); // true

//The reason is that an equility check == and comparisons > < >= and <= work differntly.
//comparisons convert null to a number , treating it as 0. 
//That's why (2) null ==0 is false and (3) null>=0 is true
 