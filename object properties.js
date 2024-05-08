const car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,

    }
console.log(`car model:${car.model}`);
console.log(`car year:${car.year}`);
console.log(`car make:${car.make}`);

car.start= function(){
    console.log("the car is started");          //added new method 
}
car.start();
const book={
    title: "The Lord of the Rings",
    author: "Tolkien",
    pages: 1000
}
console.log("book valus",book);
