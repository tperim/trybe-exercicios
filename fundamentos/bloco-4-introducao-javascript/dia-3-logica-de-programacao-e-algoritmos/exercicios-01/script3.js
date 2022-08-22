let a = 5;
let b = 7; 
let c = 3; 
let d = 9;

let bin1 = (a != 3 || b < 10 || c == 5);
let bin2 = (d > 8 && c == 3 || a >= 10);
let bin3 = (d == 12 && a != 10);
let bin4 = (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) );
let bin5 = (a == 3 || b > 10 || d == 8 );

console.log(bin1);
console.log(bin2);
console.log(bin3);
console.log(bin4);
console.log(bin5);