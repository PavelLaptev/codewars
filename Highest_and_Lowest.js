function highAndLow(numbers){
  let strArr = numbers.split(" ");
  let strLength = strArr.length;
  let numArr = [];
  let result = [];
  for (i=0; i<strLength; i++){
    numArr.push(Number(strArr[i]));
  }
  result.push(Math.max.apply(Math, numArr));
  result.push(Math.min.apply(Math, numArr));
  return result.join(" ");
};

//example
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
