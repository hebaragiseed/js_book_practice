// for (var i = 0; i < 10; i++) {
//   var total = (total || 0) + i;
//   var last = i;
//   if (total > 16) {
//     break;
//   }
// }
// console.log(typeof total !== "undefined");
// console.log(typeof last !== 'undefined');
// console.log(typeof i !== "undefined");
// console.log("total === " + total + ", last ===" + last);

// function foo() {
//   var b = "Can you acess me?"
// }
// console.log(typeof b === 'undefined');

try {
  throw new exception("fake exception");
} catch (err) {
  var test = "can you see me";
  console.log(err instanceof ReferenceError === true);
}
console.log(test === 'can you see me');
console.log(typeof err === 'undefined');