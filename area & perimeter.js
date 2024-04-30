//calculate area and perimeter of different geomertric shape rectangle and circle.
// rectangle area = L * W
// rectangle perimeter = 2*(L + W)
// circle area = PI* r*r   //(PI*math.pow(r, 2))
// circle circumference = 2*PI*r


const PI = 3.14;
let L=2;

let W=3;

const calculateRectangleArea = function (L, W){
    if (isNaN(L) || isNaN(W) ){
        return;
    }
    return L * W;
}
function calculateRectanglePerimeter(L, W){
    if (isNaN(L) || isNaN(W)){
        return;
    }
    return 2*(L + W);
}

const calculateCircleArea= (r)=>{
    if (isNaN(r) ){
        return;
    }
    return PI*r*r;
}

const calculateCircleCircumference = (r)=>{
    if (isNaN(r)){
        return;
    }
    return 2*PI*r;
}
 
//invokation
let rectangleAreaResult = calculateRectangleArea(2,3);
let rectanglePermiteResult = calculateRectanglePerimeter(2,3);
let circleAreaResult = calculateCircleArea(2);
let circleCircumferenceResult = calculateCircleCircumference(3);

console.log(`rectangleArea: ${rectangleAreaResult}`);

console.log(`rectanglePerimeter: ${rectanglePermiteResult}`);

console.log(`circleArea: ${circleAreaResult}`);

console.log(`circleCircumference: ${circleCircumferenceResult}`);