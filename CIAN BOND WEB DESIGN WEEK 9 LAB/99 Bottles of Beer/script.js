/*
Name: Cian Bond
Student Number: x25115596
Date: 22/11/2025
File: script.js
*/

//Function to print the entire 99 bottles song
function printSong(){

	//Clear previous output
	document.getElementById("main").innerHTML="";
	
	//Loop from 99 down to 1
	for(i=99; i>=1; i=i-1){
	
		if(i>1){
		
			//Print verse for multiple bottles
			document.getElementById("main").innerHTML+="<br />"+i+" bottles of beer on the wall, "+i+" bottles of beer";
			
			if(i==2){
			
				document.getElementById("main").innerHTML+="<br />Take one down and pass it around, 1 bottle of beer on the wall";
				
			}
			else{
			
				document.getElementById("main").innerHTML+="<br />Take one down and pass it around, "+(i-1)+" bottles of beer on the wall";
				
			}
			
		}
		else{
		
			//Print verse for last bottle
			document.getElementById("main").innerHTML+="<br />1 bottle of beer on the wall, 1 bottle of beer";
			
			document.getElementById("main").innerHTML+="<br />Take one down and pass it around, no more bottles of beer on the wall";
			
		}
		
		//Add blank line between verses
		document.getElementById("main").innerHTML+="<br />";
		
	}
	
	//Print final verse
	document.getElementById("main").innerHTML+="<br />No more bottles of beer on the wall, no more bottles of beer";
	
	document.getElementById("main").innerHTML+="<br />Go to the store and buy some more, 99 bottles of beer on the wall";
	
}