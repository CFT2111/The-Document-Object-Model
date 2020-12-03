/*
1. Uncomment the following program. You should recognise it. Modify the program so that the feedback to the user is displayed in the <div id="feedback"></div> element of the HTML page. (Slide 13)
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



const divElem = document.getElementById("feedback");
divElem.textContent = `Your score is ${score} out of 3`;

*/

/*
2. Uncomment the following code. Again, you should recognise it. Test it works.
Instead of displaying matching countries in the console, get the program to display the feedback in the HTML page (Slide 14).
*/

/*
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000},
    {name : "Japan", capital : "Tokyo", continent : "Asia", population: 127000000}
]

const userContinent = prompt("Enter the name of a continent");

const matchingCountries = countries.filter(function(country){
    if(country.continent === userContinent){
        return true;
    }
    return false;
});

const divElem = document.getElementById("feedback");
if(matchingCountries.length>0){
  const textNode = document.createTextNode(`The matching countries are:`);
  divElem.appendChild(textNode);
  matchingCountries.forEach(function(country){
      const newParagraph = document.createElement("p");
      newParagraph.textContent = country.name;
      divElem.appendChild(newParagraph);
  });
}else{
  divElem.textContent = `No results`
}

*/


/*
3. Modify your answer to question 2 so that the program feeds back to the user if no matching countries are found e.g. 'No countries match your search term'. Again, the message should be displayed in the HTML page.
*/

//see answer to question 2

/*
4. Re-write your answer to question 1 but think about how you can structure the program using an object to store the user answers and a number of different functions. Look below, apart from getUserAnswers() and quizApp(), the functions have been declared for you but they have no body(no code inside them). Add code inside the functions so the program works in the same way as question 1.
*/

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
  let score=0;
  if(userAnswers.capEngland==="London"){
      score++;
  }
  if(userAnswers.capFrance==="Paris"){
      score++;
  }
  if(userAnswers.capGermany==="Berlin"){
      score++;
  }
  return score;
}

function displayFeedback(score)
{
   const divElem = document.getElementById("feedback");
   divElem.textContent = `Your score is ${score} out of 3`;
}

function quizApp()
{
    const userAnswers = getUserAnswers();
    const userScore = calcScore(userAnswers);
    displayFeedback(userScore);
}

quizApp(); //run the application
*/
