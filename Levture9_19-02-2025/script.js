//sum of array
// const arr=[5,7,3,1,8];
// var sumOfarr =0;
// //normal for loop
// for(let i=0;i<arr.length;i++){
//     sumOfarr+=arr[i];
// }
// console.log(sumOfarr);

//reduce : 2 parameters passed 
// acc- accumulator(maintains the state/count) , curr - current(iterator/pointer)
// const ans=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);// 0 is intial value
// console.log(ans);

//
// const users=[
//     { firstName:"Rithika",lastName:"Korpole",age:25},
//     { firstName:"Daksh",lastName:"Singh",age:22},
//     { firstName:"Sahil",lastName:"Kumar",age:26},
//     { firstName:"Avtar",lastName:"Juneja",age:25},
//     { firstName:"Jasmine",lastName:"Saini",age:21},
//     { firstName:"Amreen",lastName:"Pannu",age:22},
// ]

// const ans =users.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{});
// console.log(ans);

//max number
// datamap=[2,5,7,8,3,7]
// var maxNumber=0;
// for(let i=0;i<datamap.length;i++){
//     if(maxNumber<datamap[i]){
//         maxNumber=datamap[i];
//     }
// }
// console.log(maxNumber);

//using reduce
//acc - maxNumber(checks count); curr-every index of datamap(iterator)
// const ans=datamap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0);
// console.log(ans);

//Promise for the restraunt example on 12-0
// reachedrestro(function(){
//     console.log("Reached Eagle motel")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(StarterOrder)
// .then(maincourse)

// const myRestrauntPromise =  new Promise(resolve,reject){
//     if(1:30>time >2:30){
//         resolve("Yes i successfully reached")
//     }
//     else{
//         reject("Cant reach at time");
//     }
// }

// const gitHubData = fetch("https://apfi.github.com/users/pratiyushray");
// setTimeout(()=>{
//     console.log(gitHubData);
// },1000)
//console.log(gitHubData)

//e-commerce using promise
const cart=[];

// createOrder(cart,callback){
//     console.log("Order Creation");
//     OrderPayment(OrderId,callback){
//         console.log("Order Payment");
//         orderSummary(OrderId,callback){
//             console.log("Order Summary")
//             updatewallet(){
//                 console.log("Wallet updated");
//             }
//         }

//     }
// }

//through promise
function createOrder(cart){
    // console.log("Order created")//wont work as promise not create //error: cart undefined
    const myPromise = new Promise(function(resolve,reject){
        if(cart.length>0){
            // resolve("Order created succesfully");
            console.log("Order created succesfully");
            resolve("12345");//orderId
        }
        else{
            const err=new Error("Order Failed");// to not show the error on the webpade to user.
            reject(err.message);
        }
    });
    return myPromise;
}
function OrderPayment(orderId){
    console.log("Order Payment Succesful",orderId);
}
function OrderSummary(orderId){
    console.log("Order Summary Created",orderId);
}
function updateWallet(){
    console.log("Wallet Updated");
}

// console.log(createOrder(cart));//if cart is empty then it will through reject.

//  createOrder(cart)
//  .then(function OrderPayment(orderId){
//     console.log("Order Payment Succesfull",orderId)
//  })
//  .then(function orderSummary(orderId){
//     console.log("Order Summary",orderId)// undefined why? because orderId is not returned. 
//  })


//solution for the above undeifned problem
createOrder(cart)
.then(function(orderId){
    return OrderPayment(orderId)
})
.then(function(orderId){
    return OrderSummary(orderId)
})
.then(function(){
    return updateWallet()
})
.catch(function(err){
    console.log(err.message);
})//when cart empty undefined .y7y
// .then(OrderPayment(orderId))
// .then(OrderSummary(orderId))
// .then(updateWallet)