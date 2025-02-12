//setTimeout: Interview questions    //O/P
// console.log(1);                         //1
// console.log(sumOfTwo(10,5));
// function sumOfTwo(a,b){                 //15
//     return a+b;
// }
// setTimeout(()=>{
//   console.log(4); 
// },2000)
// var start=1;
// var end=100000000;
// while(start<end){// while will run first(cause synchronus runs first and doesnt stop)
//     start++;                               //run
// }
// console.log("End");                        //end 
// setInterval(()=>{
//     console.log(9);                        //4
//   },4000)                                  //9

//Types of functions
// function xyz(){
//     console.log("This is named and statement/declaration func");
// }
// var a = function abc(){
//     console.log("This is expression func");
// }
// var arrow =()=>{
//     console.log("This is arrow func");
// }
// xyz();
// a();
// arrow();

//CASE1
// xyz();//1
// abc();//Uncaught TypeError: abc is not a function
// function xyz(){
//     console.log(1);
//  }
//  var abc=function(){
//     console.log(2);
//  }

// //CASE2
// function xyz(){
//         console.log(1);
//      }
//      var abc=function cdf(){
//         console.log(2);
//      }
//      xyz();//1
//      abc();//2
//      cdf();//Uncaught ReferenceError: cdf is not defined