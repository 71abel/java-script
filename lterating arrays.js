const numbers =[4,5,6,7];
for (let i=0; i<numbers.length; i++) {   //for loop  
    console.log(numbers[i]);
}

numbers.forEach((number)=>{               //forEach loop
    console.log(number);
}
)

const grades = new Array(40,40,60);
const squaredgrades= grades.map((grade)=>grade*grade);  //map method
console.log(`squar grades: ${squaredgrades}`);

const ages =[15,25,34,54];
const adults = ages.filter(age=>age>18);                //filter method
console.log(`ages greater than 18: ${adults}`);

