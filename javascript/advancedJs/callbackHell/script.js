let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if(num>3){
        reject("Error occured bro")
      }
      h1.style.color = color;
      resolve("color changed !");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("blue", 1000);
    await changeColor("purple", 1000);
  } catch (err) {
    console.log("error occured  here");
    console.log(err);
  }
  let a = 5;
  console.log(a);
}
// changeColor("red", 1000)
//   .then(() => {
//     console.log("red color was applied");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("orange color was applied");
//     return changeColor("blue", 1000);
//   })
//   .then(() => {
//     console.log("blue color was applied");
//   })

//   .catch(() => {
//     console.log("Error occured !");
//   });

// changeColor(
//   "Apna College",
//   () => {
//     console.log("success: Data was saved ");
//     changeColor(
//       "Apna",
//       () => {
//         console.log("success 2 : Data was saved ");
//         changeColor(
//           "college",
//           () => {
//             console.log("success 3 : Data was saved ");
//           },
//           () => {
//             console.log("failure 3:Data was not saved due to weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("failure 2:Data was not saved due to weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("failure:Data was not saved due to weak connection");
//   }
// );

//
//
// changeColor("red", 1000, () => {
//   changeColor("green", 2000, () => {
//     changeColor("orange", 3000);
//   });
// });
//
//
