/*
Name: Cian Bond
Student Number: x25115596
Date: 22/11/2025
File: script.js
*/

//Function to calculate and display student results
function calculateResults(){

	//Clear previous output
	document.getElementById("main").innerHTML = "";
	
	//Ask user how many subjects they take
	var numSubjects = Number(prompt("How many subjects do you take?"));
	
	//Initialize sum to 0
	var sum = 0;
	
	//Loop to get marks for each subject
	for(i = 1; i <= numSubjects; i = i+1){
	
		var mark = Number(prompt("Enter mark for subject "+i+" (0-100):"));
		
		//Check if mark is valid (between 0 and 100)
		if(mark < 0 || mark > 100){
		
			document.getElementById("main").innerHTML += "<br />Error: Mark for subject "+i+" must be between 0 and 100!";
			
			return;
			
		}
		
		sum = sum + mark;
		
	}
	
	//Calculate average
	var average = sum/numSubjects;
	
	//Display average result
	document.getElementById("main").innerHTML += "<br />Your average result is: "+average.toFixed(2)+"%";
	
	//Bonus: Determine grade based on average
	var grade = "";
	
	if(average >= 85){
	
		grade = "A";
		
	}
	else if(average >= 70){
	
		grade = "B";
		
	}
	else if(average >= 55){
	
		grade = "C";
		
	}
	else if(average >= 40){
	
		grade = "D";
		
	}
	else if(average >= 30){
	
		grade = "E";
		
	}
	else{
	
		grade = "F";
		
	}
	
	//Display grade
	document.getElementById("main").innerHTML += "<br />Your grade is: "+grade;
	
}