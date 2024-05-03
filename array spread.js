const fruits1 =['cherry','banna','ornage'];
const fruits2 =['strawberry','mangoapple'];  //combined array 

const combined=[...fruits1,...fruits2];
console.log(combined);

const numbers =[5,7,9];
function addnumber(a,b,c){                 //function argument
    return a+b+c;                             //add numbers
}
const result = addnumber(...numbers);

console.log(result);

function Mult(...numbers){
  return numbers.reduce((total, num)=>total*num,2);    //multiply numbers 
}
const Result = Mult(2,2,3,4);

console.log(Result);

const color =['red' ,'green' ,'blue'];            //COPY 
const copyofcolor =[...color];

console.log(copyofcolor);
