
let daynumber = 3;

let dayname;

switch (daynumber) {
    case 1:
        dayname = "monday";
        break;
    case 2:
        dayname = "tuesday";
        break;
    case 3:
        dayname = "wednesday";
        break;
    case 4:
        dayname = "thursday";
        break;
    case 5:
        dayname = "friday";
        break;
    case 6:
        dayname = "saturday";
        break;
    case 7:
        dayname = "sunday";
        break;
    default:
        dayname = "Invalid day number";
        break;
}

console.log(`daynumber: ${daynumber},dayname: ${dayname}`);