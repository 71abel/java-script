let totalbillamount = 300;
let numberofpeople = 5;
let tipPercentage = 20;
let taxpercentage = 8;

let tipamount = (totalbillamount * tipPercentage)/100;

let taxamount =(totalbillamount * taxpercentage)/100;

let totalamount = totalbillamount + tipamount + taxamount;

let individualpayments = totalamount / numberofpeople;

console.log(`tip amount: ${tipamount}`);

console.log(`tax amount: ${taxamount}`);

console.log(`total bill amount: ${totalamount}`);

console.log(`individual payments: ${individualpayments}`);