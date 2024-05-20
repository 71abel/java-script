async function fetchProducts(){
    try{
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
        );
        return response.json();
    }catch(error){
        console.log("error block",error);
    
}
}

const result = fetchProducts();

result.then((data) => {

console.log(data);
}).catch((error)=>{
    console.log("error block",error);
})