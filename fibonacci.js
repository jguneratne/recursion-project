//Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13

// GENERATE FIBONACCI SEQUENCE WITH ITERATION

// function fibs(seqLength) {
//   let fibArray = [];

//   let num = 0;
//   fibArray.push(num, num + 1);

//   for (let i = 0; fibArray[i] < seqLength; i++) {
//     num = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
//     fibArray.push(num);
//   }

//   return fibArray;
// }

// let fibSeq = fibs(8);
// console.log(fibSeq);

// GENERATE FIBONACCI SEQUENCE WITH RECURSION

function fibonacci(fibArray, seqLength) {
  //Base Case
  if (seqLength <= 0) {
    return [];
  } else if (fibArray.length === seqLength) {
    return fibArray;
    //Recursive Case
  } else {
    fibonacci(
      fibArray.push(
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      )
    );
  }

  return fibArray;
}

let fib = fibonacci([0, 1], 8);
console.log(fib);
