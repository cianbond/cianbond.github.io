/*
Name: Cian Bond
Student Number: x25115596
Date: 30/11/2025
File: script.js
*/

let numbers = [];

function go(){

	//Ask user how many numbers they want to enter
	var howMany = parseInt(prompt("How many numbers do you want to enter?"));
	
	//Loop to get each number from user
	for(i = 0; i < howMany; i = i + 1){
	
		numbers.push(parseInt(prompt("Enter number " + (i + 1))));
		
	}
	
	//Calculate sum
	var sum = 0;
	
	for(i = 0; i < numbers.length; i = i + 1){
	
		sum = sum + numbers[i];
		
	}
	
	//Calculate mean
	var mean = sum / numbers.length;
	
	//Display results
	document.getElementById("main").innerHTML = "Numbers: " + numbers.toString() + "<br /><br />" + "Sum: " + sum + "<br /><br />" + "Mean: " + mean;

}