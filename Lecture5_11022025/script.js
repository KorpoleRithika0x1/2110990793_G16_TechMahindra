// console.log(a);
// var a=10;
// function asumOftwo(a,b){
//     var sum=a+b;
//     return sum;
// }
// console.log(asumOftwo(10,9));
// console.log(a);

// SETINTERVAL
// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1)
// console.log(two);
// setInterval(()=>{
//     console.log(3);
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(5);
// },5000)
// console.log(6);

//Function based settimeout
//original ans - 777777
//have to get-123456
//therefore we use function here
// function ans(a){
//     setTimeout(()=>{
//         console.log(a);
//     },1000)
// }
// for(var i=1;i<=6;i++){
//     ans(i)
// }


//CASE1
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     // CASE 2 a=100; o/p : 100
//     return y;
// }
// var z=x();
// console.log(z);
// z();


// function z(){
//     var b = 900;
//     function x(){
//         var a=7;
//         function y(){

//         }
//     }
// }


//IMP CASE OF CLOUSURES- data hiding and encapsulation.
// function outside(){
// var count=0; //globally stored can be tampered. 
// return function increment(){ // HOF: Higher Order Function
//      count++;
//      console.log(count);
// }
// // increment();
// // increment();
// // increment();
// }
// var outside1=outside();
// outside1();
// outside1();
// // increment()//when used ans is 3 only cause parent cannot called child.
// // outside();//protecting now the count cannot be changed from outside

//adding decrement as well
function counter(){
    var count=0;
    this.increment=function(){
        count++;
        console.log(count);
    }
    this.decrement=function(){
        count--;
        console.log(count);
    }
}

var counter1=new counter();
counter1.increment();
counter1.increment();
counter1.decrement();
