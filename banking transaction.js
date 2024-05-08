// Perform acount balances and transactions
//  calculate deposits
// calculate withdrawals
let acountBalance = 1000;
function deposit(amount) {
  if (isNaN (amount)|| amount <= 0) {
    console.log("Invalid input");
  } else {
    acountBalance += amount;

    console.log(`Deposit Amount: ${amount}`);
    console.log(`newbalance: ${acountBalance}`);
  }
}

function withdrawal(amount) {
  if (isNaN(amount) || amount <= 0) 
  {
    console.log(`Invalid input`);
  } else if (amount > acountBalance) {
    console.log(`Insufficient Funds`);
  }
  else {
    acountBalance -= amount;

    console.log(`Withdrawal Amount: ${amount}`);
    console.log(`newbalance: ${acountBalance}`);
  }
}
function newBalance() {
  console.log(`Account Balance: ${acountBalance}`);
}
deposit(30000);

withdrawal(18000);

newBalance(12000);