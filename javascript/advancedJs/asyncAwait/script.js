// async function greet() {
//   throw"404 not found!"
// //   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("Promise was resolved", result);
//   })
//   .catch((error) => {
//     console.log("Error occurred", error);
//   });

function getnum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      console.log(randomNum);
      resolve();
    }, 1000);
  });
}
async function callNum() {
  await getnum();
  await getnum();
  await getnum();
  await getnum();
   getnum();
}
