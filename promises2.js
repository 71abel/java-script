const students =[

    {
    name: "abel",
    age: 20,
    gender: "male",
    education: "master"
}
   ,
    {
    name: "tsegay",
    age: 30,
    gender: "male",
    education: "master"
},
{
    name: "daniel",
    age: 35,
    gender: "male",
    education: "master"
}
]
 const simplepromise = new Promise((resolve, reject)=>{ 
    setTimeout(() =>{
        const above30 =students.filter((students )=> students.age >= 30 )
            if(above30.length>0){
                resolve(above30);
            }
            else{
                reject(above30)
            }
    },2000)  //2 seconds
});
    console.log(simplepromise)
    simplepromise.then(data=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("error block",error);
   })