const student = {
    name: "abel",
    age: 27,
    address:{
        street: "axum hotel",
        city: "mekelle",
        country: "Tigray"
    }
    
}
student.address.street="17 kebelle";
student.email = "abel@gmail.com";
console.log("student street",student.address.street);
console.log("student email",student.email);
console.log(student); 
   
                                                                       //add two method 
student.greet= function(){
    console.log(' hello '.concat(student.name));

}
student.changeAddress= (streat1, city1,country1) => {
    student.address.street=streat1;
    student.address.city=city1;
    student.address.country=country1;
}
let street1= 'hadnet 01';
let city1='70 enderta';
let country1= 'hagere tigrays';
student.greet(); 
student.changeAddress(street1, city1, country1);
console.log(`student city after modification: ${student.address.city}`);
