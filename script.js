//  function pyramid(rows){
//     // space=" "
//     // let pattern="*"
//     for(i=rows;i<=rows;i++){
//         space=" "
//     }
//     for(j=1;j<=i;j++){
//         space = space + " ";
//     }
//      for(k=1;i<=2;i++){
// console.log(pattern)
//  }
//  let rows=3
//  console.log(pyramid(rows));



function generateAlphabetPattern() {
  let char = "A";
  for (let i = 1; i <= 5; i++) {
    
    let row = "";
    for (let j = 1; j <= i; j++) {
      
      row += char; 
      char = String.fromCharCode(char.charCodeAt(0) + 1); 
    }
    console.log(row); 
  }
}

generateAlphabetPattern();


function generatePyramidPattern() {
  let char = "A"; 
  const rows = 3; 

  for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= rows - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += char + " ";
      char = String.fromCharCode(char.charCodeAt(0) + 1); 
    }

    console.log(row.trimEnd()); 
  }
}

generatePyramidPattern();
