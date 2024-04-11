//************************************************************************************* */
// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// //************************************************************************************ */
// saveToDb(
//   "Apna College",
//   () => {
//     console.log("success: Data was saved ");
//     saveToDb(
//       "Apna",
//       () => {
//         console.log("success 2 : Data was saved ");
//         saveToDb(
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
//
//
//
function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
      resolve("success:Data was saved");
    } else {
      reject("failure: Weak conections");
    }
  });
}

saveToDb("ApnaCollege")
  .then((result) => {
    console.log("Sucess 1 : Data was saved");
    console.log("promise ", result);
    return saveToDb("Apna");
  })
  .then((result) => {
    console.log("success 2 : Data was saved");
    console.log("promise ", result);
    return saveToDb("College");
  })
  .then((result) => {
    console.log("Success 3 : Data was Saved ");
    console.log("promise ", result);
  })
  .catch((error) => {
    console.log("Error: Weak Connection");
    console.log("promise ", error);
  });
