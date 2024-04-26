let testscores = [94, 83, 75, 64, 50];
 
let testscore =83
 
let grade;
if(testscore >=90 && testscore <=100) {
    grade = "A";
} else if(testscore >=80 && testscore <=89) {
    grade = "B";
} else if(testscore >=70 && testscore <=79) {   
    grade = "C";
} else if(testscore >=60 && testscore <=69) {
    grade = "D";
} else {
    grade = "F";
}
console.log(` testscore: ${testscore}, grade: ${grade}`);
