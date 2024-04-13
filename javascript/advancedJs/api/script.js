// let catFact =
//   '{"fact":"The first official cat show in the UK was organised at Crystal Palace in 1871.","length":78}';

// let neuData = JSON.parse(catFact);
// console.log("It is JSON: ", catFact);
// console.log("It is object: ", neuData);

// let againJson = JSON.stringify(neuData);
// console.log("Again JSON :", againJson);
//************************************************************************ */
//API request
//************************************************************************* */
// let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Here is data 1 : ", data.fact);
//     return fetch(url);
//   })
//   .then((res) => {

//     return res.json();
//   })
//   .then((data) => {
//     console.log("Here is data 2 : ", data.fact);
//   })

//   .catch((err) => {
//     console.log("error occured : ", err);
//   });
//******************************************* */
