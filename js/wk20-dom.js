/*
1. Uncomment the following program. You should recognise it. Modify the program so that the feedback to the user is displayed in the <div id="feedback"></div> element of the HTML page. 
*/
/*
let score=0;
const capitalEngland=prompt("What is the capital of England");
const capitalFrance=prompt("What is the capital of France");
const capitalGermany=prompt("What is the capital of Germany");
if(capitalEngland==="London"){
    score++;
}
if(capitalFrance==="Paris"){
    score++;
}
if(capitalGermany==="Berlin"){
    score++;
}
console.log(`Your score is ${score} out of 3`);
*/


/*
2. Uncomment the following code. Again, you should recognise it. Test it works.
Instead of displaying matching countries in the console, get the program to display the feedback in the HTML page.
*/

/*
class Country {
  constructor(name, capital, continent, population) {
    this.name = name;
    this.capital = capital;
    this.continent = continent;
    this.population = population;
  }
}
const countries=[];
countries.push(new Country( "England","London", "Europe", 53000000));
countries.push(new Country( "USA","Washington", "N. America", 321000000));
countries.push(new Country( "France","Paris", "Europe", 66900000));
countries.push(new Country( "Japan","Tokyo", "Asia", 127000000));

const userContinent = prompt("Enter the name of a continent");

const matchingCountries = countries.filter(function(country){
    if(country.continent===userContinent){
        return true;
    }
    return false;
});

console.log("Matching countries are:");
matchingCountries.forEach(function(country){
    console.log(country.name)
})
*/

/*
3. Modify your answer to question 2 so that the program feeds back to the user if no matching countries are found e.g. 'No countries match your search term'. Again, the message should be displayed in the HTML page.  
*/

/*
4. Re-write your answer to question 1 but think about how you can structure the program using an object to store the user answers and a number of different functions. Look below, apart from getUserAnswers() and quizApp(), the functions have been declared for you but they have no body(no code inside them). Add code inside the functions so the program works in the same way as question 1. 
*/

/*
class UserAnswers{
    constructor(capEngland,capFrance,capGermany) {
        this.capEngland = capEngland;
        this.capFrance = capFrance;
        this.capGermany = capGermany;
    }
}

function getUserAnswers()
{
	const capitalEngland=prompt("What is the capital of England");
    const capitalFrance=prompt("What is the capital of France");
    const capitalGermany=prompt("What is the capital of Germany");
    const userAnswers = new UserAnswers(capitalEngland,capitalFrance,capitalGermany);
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
