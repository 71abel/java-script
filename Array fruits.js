//create an array called fruits 
const fruits = ['apple','banana','cherry'];
const fruits1 = new Array("apple","banana","cherry"); //second element or new keybord

console.log("second fruit", fruits);

fruits[2]="grape";                //change fruit(splice)
fruits[1]="orange";


console.log("length of fruit", fruits.length); //length of fruits

fruits.push("kiwi");
console.log("kiwi added", fruits); //added fruit 
 
fruits.pop();
console.log("kiwi removed",fruits); //removed fruit
 
for (let i=0; i<fruits.length; i++) {       //for loop
    console.log(fruits[i]);
}
 
fruits.forEach((fruit)=>{          //forEach loop
    console.log(fruit);
})

