'use strict';
var userPoints = 0;
var user = prompt('Well Hello, please introduce yourself');
console.log('The user\'s name is ' + user);

alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer1 = prompt(user + ', this is a yes/no quesion so please answer with a Y or N. Do I like to hike?').toLowerCase();
console.log('The user answered Question 1:' + answer1);

if(answer1 === 'y') {
  alert('Good guess! Alison does like to hike');

} else if(answer1 === 'n')
  alert('of course she likes to hike,');

alert('Let\'s keep going, but answer Y or N, ok? There are rules to follow.');

var question2 = prompt('So, ' + user + ' Do I have children? Please answer with a Y or N').toLowerCase();

console.log('The user answered Question 2:' + question2);

if(question2 === 'y') {
  alert('Good guess! Alison does have children');

} else if(question2 === 'n') {

  alert('She sure does, 5 in fact and they all have flown the nest!');
}

var question3 = prompt('Next question, Am I a Husky?').toLowerCase();

console.log('The user answered Question 3:' + question3);

if(question3 === 'y') {

  alert('Nope! Alison is a Duck and proud of that, QUACK!');
} else if(question2 === 'n') {
  alert('That is right, Alison is in fact a Duck, no way a Husky!');
}
var question4 = prompt('Next question, what is my go-to free time activity?');

console.log('The user answered Question 4:' + question4);
alert('Hiking is the only way to go! ');

var question5 = prompt('Almost done, what is my dream profession?');

console.log('The user answered Question 5:' + question5);
alert('Front End Web Developer is Alison\'s dream job.');

var answer = prompt('Can you name some of Alison\'s favorite countries she has visited?');
console.log(answer);

var countriesVisited = ['France', 'Turkey', 'Moorea', 'Greece', 'Scotland', 'Australia'];

for (var i = 0; i < 7; i++) {
  console.log(countriesVisited[i]);
  alert('Thanks ' + user + ' for playing along');
}
if (answer === 'France' || answer === 'Turkey' || answer === 'Moorea' || answer === 'Greece' || answer === 'Scotland' || answer === 'Australia') {
  //if it's correct give them a point
  userPoints++;
} else {
  alert('Nope, try again.');
}
alert('you have ' + userPoints + ' points.');
