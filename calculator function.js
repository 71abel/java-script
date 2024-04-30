function add (a,b){
    if(isNaN(a) || isNaN(b)){
        return "not valid number";
    }
    return a+b;
}
function subtraction (a,b){
    if(isNaN(a) || isNaN(b)){
        return "not valid number";
    }
    return a-b;
}
function multiply (a,b){
    if(isNaN(a) || isNaN(b)){
        return "not valid number";
    }
    return a*b;
}

function divide (a,b){
    if(isNaN(a) || isNaN(b)){
        return "not valid number";
    }
    return a/b;
}

console.log("add", add(2,3));

console.log("subtraction", subtraction(2,3));

console.log("multiply", multiply(2,3));

console.log("divide", divide(2,3));