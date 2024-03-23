// let i = 0;  //0
// while (i < 5) {      //0,1,2,3,4
//        i++;              //1,2,3,4,5
//   if (i === 3) {        
//     continue;
//   }
//   console.log(i);       //1,2,4,5
// }


// function newString(str) {
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       result += str[i];
//     }
//     return result;
//   }



//   for loop 5 questions

var Dona=5;
var sachu=10;

Dona+=sachu;

console.log(Dona);


// Regular expression pattern to match email addresses
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test email addresses
const emails = [
    "user@example.com",
    "another.user@mail.co.uk",
    "invalid-email.com",
    "user@domain"
];

// Iterate through each email and test against the pattern
emails.forEach(email => {
    if (emailPattern.test(email)) {
        console.log(`${email} is a valid email address.`);
    } else {
        console.log(`${email} is not a valid email address.`);
    }
});

  