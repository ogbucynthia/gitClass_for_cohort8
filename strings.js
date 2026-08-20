const herName = "Esther";

console.log(herName.toLowerCase()); // esther
console.log(herName.toUpperCase()); // ESTHER

function lowerMe (value){
    return value.toLowerCase();
}
console.log(lowerMe(herName)); 

const trimExample = "   Hello, World!   ";
console.log(trimExample.trim()); // "Hello, World!"
console.log(trimExample.trimStart()); // "Hello, World!  "
console.log(trimExample.trimEnd()); // "   Hello, World!"

let fileName = "report_final_2024.pdf";

console.log(fileName.startsWith("repSort")); // true
console.log(fileName.startsWith("draft")); // false
console.log(fileName.endsWith(".pdf")); // true
console.log(fileName.endsWith(".doc")); // falses