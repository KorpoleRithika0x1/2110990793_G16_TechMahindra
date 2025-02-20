// const myPromiseFromNetflix = new Promise(function(resolve,reject){
//     setTimeout(() => {
//          resolve("Fetched data from Netflix");
//            //reject("error in netflix");
//     },5000);
// });
// const myPromiseFromTwitter= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         //resolve("Fetched data from Twitter");
//         reject("error manmade");
//     },2000);
// });
// const myPromiseFromGithub= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Github");
//         //reject("error in git");
//     },3000);
// });
// const myPromiseFromHotstar = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Fetched data from Hotstar");
//     },4000);
// });
//  const dataFromAll = Promise.all([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
//  console.log(dataFromAll);
// // //in promiseall() when reject shows Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
// // // when accept 

// const dataFromAllSettled = Promise.allSettled([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(dataFromAllSettled);

// const fromRace = Promise.race([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(fromRace);

// const Fromany = Promise.any([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromTwitter]);
// console.log(Fromany);

//async-await
console.log("Hello Class");
function techMahindra(){
    console.log("Student came")
}
console.log("Class End");
techMahindra();

