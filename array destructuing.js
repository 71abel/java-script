
const colors=["red", "green", "blue"];
const [firstcolor1,secondcolor2]=colors;


console.log(firstcolor1);
console.log(secondcolor2);
console.log(colors);

const numbers=[22, 33, 14, 65, 87]; // skipping elements
const [,,thirdnumber]=numbers;
console.log(thirdnumber);

const fruits=['apple','orange','banana'];
const [firstfruit, ...restfruits]= fruits; //rest parameters
console.log(firstfruit);
console.log(restfruits);

const shapes=['circle','square'];                  
const [firstshape, secondshape, thirdshape='hexagon']=shapes;   //default (values) shapes 
console.log(firstshape);
console.log(secondshape);
console.log(thirdshape);                                    //quation ???


let a=6;
let b=12;                //swapping values
[a,b]=[b,a];
console.log(a);
console.log(b);                

 

