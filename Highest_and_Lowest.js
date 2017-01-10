function highAndLow(numbers){
  let strArr = numbers.split(" ");
  let strLength = strArr.length;
  let numArr = [];
  let result = [];
  for (i=0; i<strLength; i++){
    numArr.push(Number(strArr[i]));
    // for (j=0; j<numArr.length; j++){
    //   console.log(numArr);
    // }
  }
  result.push(Math.max.apply(Math, numArr));
  result.push(Math.min.apply(Math, numArr));
  return result.join(" ");
};
