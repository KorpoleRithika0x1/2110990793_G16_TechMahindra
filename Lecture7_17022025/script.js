// function a(){
//     console.log("First");
// }
// function b(a){
//     console.log("Second");
//     a();
// }
// b(a);
// var count =0;
// const element =document.getElementById("bttn-click");
// element.addEventListener("click" ,function(){
//     count++;
//     console.log("Clicked");
// })
// const element2 =document.getElementById("bttn-click2");
// element2.addEventListener("click" ,function(){
//     count++;
//     console.log("Clicked");
// })
//Patterns: Real Life example
function reachedrestro(callback){
    console.log("You reached restraunt");
    setTimeout(callback,1000);
}
function TableFinding(callback){
    console.log("Table Finding");
    setTimeout(callback,1000);
}
function MenuDiscover(callback){
    console.log("Menu Discover");
    setTimeout(callback,1000);
}
function PriceCheck(callback){
    console.log("Price Check");
    setTimeout(callback,1000);
}
function StarterOrder(callback){
    console.log("Starter Order");
    setTimeout(callback,1000);
}
function maincourse(callback){
    console.log("main course order");
    setTimeout(callback,1000);
}
function dessert(callback){
    console.log("dessert order");
    setTimeout(callback,1000);
}
function payBill(){
    console.log("bill");
}

//chaining of callbacks
//reachedrestro(TableFinding(MenuDiscover(PriceCheck(StarterOrder(maincourse(dessert(payBill())))))));//gives error
//Use arrow function 
reachedrestro(()=>{
    TableFinding(()=>{
        MenuDiscover(()=>{
            PriceCheck(()=>{
                StarterOrder(()=>{
                    maincourse(()=>{
                        dessert(()=>{
                            payBill();
                        })
                    })
                })
            })
        })
    })
})
//Drawback with more callbacks in in arrow function: No readability , Debbugging in way to impossible
//Pyramid of doom occurs (expansion of code horizontally). resolved by promises.

