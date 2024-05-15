function sum(a,b,callback) {
    
    if(isNaN(a) || isNaN(b) )
        {
            console.log("not a number");
         return;
        }
    res=a+b;
    callback(res);
}
function call(res) {
    console.log("result of the sum is",res);
}

sum('abel','goitom',callback)

sum(2,3,call)




function validateEmail(email, callback) {

    if (email.length==0) {

        return "Please enter a valid email";




}

    const isvalid = email.includes("@") && email.includes(".");

    callback(isvalid)

    }

    function callback(isvalid) {

        console.log("is it valied email",isvalid);

    }

    validateEmail("abel.",callback);

    validateEmail("abel4@gmail.com",callback);