 // console.log("2" > 1)
// console.log("02" > 1)
 // there is automatically type conversion by javascript
// but sometimes the output is different from the predicted output

// typescript have strict rules for that type conversions nothing else

// console.log(null >0); // false
// console.log(null ==0); // false 
// console.log(null >=0); // true

//The reason is that an equility check == and comparisons > < >= and <= work differntly.
//comparisons convert null to a number , treating it as 0. 
//That's why (2) null ==0 is false and (3) null>=0 is true


//    Stack and head
// primitive- stack and non-primitive - heap
// in primitive copy of a variable is formed and in non primivite address of that vaiable , function is passed

//  primitive
let myname="nisha"
let yourname=myname
myname="abc"

//  in the above case there is copy of myname variable is formed with the name of yourname variable

// non-primitive
// object
let user={
    name:"nisha",
    age:22,
}
let user1=user
user1.name="neeta"
// here the reference of user is passed in user1 because of that both the variable values user.name and user1.name get changed
console.log(user.name);
console.log(user1.name);

 