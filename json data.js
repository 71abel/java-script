const data = `[
    {
    "title": "axum",
    "author": "Tolkien",
    "publishedyear": "2015",
    "price": 99.99  
   },
   {
    "title": "soloda",
    "author": "Mr x",
    "publishedyear": "1940",
    "price": 70
   },
   {
    "title": "hakfen",
    "author": "birhane",
    "publishedyear": "1999",
    "price": 65.88
   }
]`
const parsedBooks = JSON.parse(data);         // parse json data
 console.log(parsedBooks);

 const pricesum = parsedBooks.reduce((total,book)=>total+book.price,0);    // total price of books 
 console.log("price sum",pricesum);

 const filteredBooks = parsedBooks.filter((book)=>book.publishedyear<1960);     // filter books
 console.log("filteredBooks", filteredBooks);

 const sortedBooks = parsedBooks.sort((book1,book2)=>book2.publishedyear-book1.publishedYear);  //sort books
 console.log("sortedBooks", sortedBooks);
