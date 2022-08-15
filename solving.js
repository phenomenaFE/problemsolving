/* 1-  Create a function which returns the number of true values there are in an array.
    countTrue([true, false, false, true, false]) ➞ 2
*/

function countTrue(arr) {
  let trueFlag = 0;
  arr.forEach((element) => {
    if (element == true) {
      trueFlag++;
    }
  });
  console.log("number of true count ", trueFlag);
}

countTrue([true, false, false, true, false]);

/*
   2- Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
   minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
*/

function minMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    } else if (arr[index] < min) {
      min = arr[index];
    }
  }

  console.log(max, min);
}

minMax([14, 35, 6, 1, 34, 54]);

/*
   3- Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.
*/

function curryingMulti(arr,multinumb) {
    let multiply=[]
    arr.forEach(element => {
        multiply=element*multinumb
     console.log("multiply-number",multiply)
   });
}
curryingMulti([1, 2, 3],2)


/*
   4- The right shift operation is similar to floor division by powers of two.
*/

function shiftToRight(x, y) {
	return x / (2**y)
}
console.log(shiftToRight(-24, 2))

/*
5- Write a function that takes a number and returns the perimeter of either a circle or a square. 
   The input will be in the form (letter l, number num) where the letter will be either "s" for square, 
   or "c" for circle, and the number will be the side of the square or the radius of the circle.
*/
function perimetersShape(typeShape,numSides){
    if(typeShape=='c'){
        return 6.28*numSides
    }else if(typeShape=='s'){
        return 4*numSides 
    }
}
console.log("this circle perm",perimetersShape('c',4))
console.log("this square perm",perimetersShape('s',7))


/*
6- Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
*/

function num_of_digits(num) {
	let splitNumber=num.toString();
    return splitNumber.length
}
console.log("this digits count",num_of_digits(1305981031))


/*
7- Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.
*/

function cubes(a) {
	return a ** 3
}
console.log("this cubes ",cubes(3))


/*
8- Create a function that takes the age in years and returns the age in days.
*/
function calcAge(age) {
	return age * 365; 
}
console.log("this calcAge ",calcAge(3))


/*
9- Create a function that takes voltage and current and returns the calculated power.
*/

function circuitPower(voltage, current) {
	return voltage * current;
}
console.log("this calcAge ",circuitPower(3,10))

/*
10- 
*/
