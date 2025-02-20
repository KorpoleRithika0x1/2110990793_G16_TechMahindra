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
    this.getCount=function(){
        console.log(count);
    }
}

var counter1=new counter();
counter1.increment(); // 1
counter1.increment(); //2
counter1.decrement(); //1
counter1.getCount();  //1
console.log(counter1.count);// undefined counter value remains private and cannot be accessed directly.

//Task2
//Fibonaci

function memoizedFibonacci(){
    var cache={};
    this.findfibonaci=function(n){
        if(n<=1){
            return n;
        }
        //if allready stored in cache
        if(cache[n]){
            return cache[n];
        }
        cache[n]=this.findfibonaci(n-1)+this.findfibonaci(n-2);
        return cache[n];
    };
}

var fibo = new memoizedFibonacci();
console.log("Number at positon 5 in fiobnaci = "+fibo.findfibonaci(5));
console.log("Number at positon 3 in fiobnaci = "+fibo.findfibonaci(3));
console.log("Number at positon 5 in fiobnaci = "+fibo.findfibonaci(5));