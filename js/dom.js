
//1. Uncomment the following program. 
//   We looked at this programm a couple of weeks ago. 
//   Modify the program so that the feedback to the user is displayed in the <div id="feedback"></div> element of the HTML page. 


// let score=0;
// const capitalEngland=prompt("What is the capital of England");
// const capitalFrance=prompt("What is the capital of France");
// const capitalGermany=prompt("What is the capital of Germany");
// if(capitalEngland==="London"){
//     score++;
// }
// if(capitalFrance==="Paris"){
//     score++;
// }
// if(capitalGermany==="Berlin"){
//     score++;
// }
// console.log(`Your score is ${score} out of 3`);




//2. Uncomment the following code. Again, it is an example we have looked at previously. Test it works.
//Instead of displaying matching countries in the console, get the program to display the feedback in the HTML page.

// const countries=[
//     {name : "England", capital : "London", continent : "Europe", population: 53000000},
//     {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
//     {name : "USA", capital : "Washington", continent : "N. America", population: 325000000},
//     {name : "Japan", capital : "Tokyo", continent : "Asia", population: 127000000}
// ];

// const userContinent = prompt("Enter the name of a continent");
// const matchingCountries = countries.filter(function(country){
//     if(country.continent===userContinent){
//         return true;
//     }
//     return false;
// });

// console.log("Matching countries are:");

// matchingCountries.forEach(function(country){
//     console.log(country.name)
// })



//3. Modify your answer to question 2 so that the program feeds back to the user if no matching countries are found 
//   e.g. 'No countries match your search term'. Again, the message should be displayed in the HTML page.


//4. Re-write your answer to question 1 but think about how you can structure the program using an object to store the user answers and a number of different functions. 
//   Look below, apart from getUserAnswers() and quizApp(), the functions have been declared for you but they have no body(no code inside them). 
//   Uncomment the code and add code inside the functions so the program works in the same way as question 1.


/*
function getUserAnswers()
{
    const capitalEngland=prompt("What is the capital of England");
    const capitalFrance=prompt("What is the capital of France");
    const capitalGermany=prompt("What is the capital of Germany");
    const userAnswers = {capEngland:capitalEngland,capFrance:capitalFrance,capGermany:capitalGermany}
    return userAnswers;
}

function calcScore(userAnswers)
{
	//add code here to calculate a score and return it
}

function displayFeedback(score)
{
	//add code here
}

function quizApp()
{
	const userAnswers = getUserAnswers();
	const userScore = calcScore(userAnswers);
	displayFeedback(userScore);
}

quizApp(); //run the application
*/
