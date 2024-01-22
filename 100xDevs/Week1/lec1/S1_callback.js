function sum(a,b,func){
    return(func(a+b));
}

function display(x){
    console.log("the sum is " + x);
}

function displayPassive(x){
    console.log("sum's value is " + x);
}

sum(1,4,display)