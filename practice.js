//2020.5.10
var number = 4;
var guess = prompt("Guess a number");

if(Number(guess) === number){
	alert("you got right.")
}
else if (Number(guess) > number){
	alert("you got wrong.you are higher.")
}
else{
	alert("you got wrong.you are lower.")
}
for(var i = -10; i < 20; i++){
	console.log(i);
}
//2020.5.11
for(var i = 10; i < 41; i+=2){
	console.log(i);
}
var number = 10;
while(number <= 40){
	if (number%2 === 0)
	alert(number);
	number++;	
}

var number = 300;
while(number <= 333){
	if (number%2 === 1)
	alert(number);
	number++;	
}
for(var i = 300; i < 334; i++){
	if (i%2 === 1){
	 console.log(i);
	}
}

for(var i = 5; i < 51; i++){
	if (i%2 === 1){
		if (number%5 === 0 && number%3 ===0)
	 		console.log(i);
	}
}
var number = 5;
while(number <= 50){
	if (number%5 === 0 && number%3 ===0)
	alert(number);
	number++;	
}
str.indexOf("w");

// 2020.5.12

function isEven(number){
	if(number % 2 ===0){
		return true;
	}
	return false;
}
// return number % 2 === 0

var count = 1;
function isfactorial(number){
	if (number === 0){
		return 1;
	}
	else{
		while (number < 1){
			count = count * number;
			number ++;
		}
		return count;
	}
}

// var result = 1;
// for (var i = 1; i <= num; i++){
//	result = result*i;
//}
//  return result;

function kebabToSnake(str){
// 	if (str.indexOf("_")){
// 		var res = str.replace("_","-");
// 		return res;
// 	}
// 	else{
// 		return str;
// 	}
// }
var res = str.replace(/-/g,"-");
}

// //2020.5.14

function printReverse(arr){
	var length = arr.length;
	for (var i = length-1; i >= 0; i--){
		console.log(i);
	}
}

function isUniform(arr){
	var length = arr.length;
	for (var i = 0; i < length-1; i++){
		if (arr[i] !== arr[i+1]){
			return false;
		}
	}
	return true;
}
console.log(max([0,0,0,1]));

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(i){
		sum += i;
	})
	return sum;

}

function max (arr){
	var max = arr[0];
	arr.forEach(function(i){
		if(i > max){
			max = i;
		}
	})
	return max;
}
