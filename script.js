var form = document.getElementById("rockPaperScissorsForm");

form.addEventListener("submit", function(event){
    
	
	// Prevent page from refreshing
	event.preventDefault();
    
	// Call the playGame function
    playGame();
	
}

);

function playGame(){
	
    var userChoice;
	
    var computerChoice;
	
    var result;
	
    var randomNumber;
	
	userChoice = document.getElementById("userChoice").value;
	
	// Convert user input to lowercase to make it game case insensitive
	userChoice = userChoice.toLowerCase();
	
	// Generate random number for computer choice using javascript built in function
	randomNumber = Math.random();
    
    if(randomNumber < 0.33)
		
		{	
			computerChoice = "rock";
		}
		
    else if(randomNumber < 0.66)
		
		{
			computerChoice = "paper";
		}
    
	else
		
		{
			computerChoice = "scissors";
		}
		
	if(userChoice == computerChoice)
	
		{
			result = "Draw! You both chose " + computerChoice;
		}
	
	else if(userChoice == "rock" && computerChoice == "scissors")
	
		{
			result = "You win! Rock beats Scissors";
		}
	
	else if(userChoice == "rock" && computerChoice == "paper")
	
		{
			result = "You lose! Paper beats Rock";
		}
	
	else if(userChoice == "paper" && computerChoice == "rock")
	
		{
			result = "You win! Paper beats Rock";
		}
	
	else if(userChoice == "paper" && computerChoice == "scissors")
	
		{
			result = "You lose! Scissors beats Paper";
		}
	
	else if(userChoice == "scissors" && computerChoice == "paper")
	
		{
			result = "You win! Scissors beats Paper";
		}
	
	else if(userChoice == "scissors" && computerChoice == "rock")
	
		{
			result = "You lose! Rock beats Scissors";
		}
	
	else
	
		{
			result = "Invalid input! Please enter Rock, Paper, or Scissors";
		}
	
	// Display result in alert box
	alert("You chose: " + userChoice + "\nComputer chose: " + computerChoice + "\n\n" + result);
	
}
