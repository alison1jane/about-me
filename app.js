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

for (var i = 0; i <= 7; i++) {
  console.log(answer1[i]);
  userPoints++;
  alert('you have ' + userPoints + ' points.');
}
var question2 = prompt('So, ' + user + ' Do I have children? Please answer with a Y or N').toLowerCase();

console.log('The user answered Question 2:' + question2);

if(question2 === 'y') {
  alert('Good guess! Alison does have children');

} else if(question2 === 'n') {

  alert('She sure does, 5 in fact and they all have flown the nest!');
  userPoints++;
} else {
}
//if it's not correct, tell them to try again
alert('Nope, try again.');
for (var i = 0; i <= 6; i++) {
  console.log(answer1[i]);
  userPoints++;
  alert('you have ' + userPoints + ' points.');
}
var question3 = prompt('Next question, Am I a Husky?').toLowerCase();

console.log('The user answered Question 3:' + question3);

if(question3 === 'y') {

  alert('Nope! Alison is a Duck and proud of that, QUACK!');
} else if(question2 === 'n') {
  alert('That is right, Alison is in fact a Duck, no way a Husky!');
}
for (var i = 0; i <= 5; i++) {
  console.log(answer1[i]);
  userPoints++;
  alert('you have ' + userPoints + ' points.');
}
var question4 = prompt('Next question, what is my go-to free time activity?');

console.log('The user answered Question 4:' + question4);
alert('Hiking is the only way to go! ');

for (var i = 0; i <= 4; i++) {
  console.log(answer1[i]);
  userPoints++;
  alert('you have ' + userPoints + ' points.');
}

var question5 = prompt('Almost done, what is my dream profession?');

console.log('The user answered Question 5:' + question5);
alert('Front End Web Developer is Alison\'s dream job.');

for (var i = 0; i <= 3; i++) {
  console.log(answer1[i]);
  userPoints++;
  alert('you have ' + userPoints + ' points.');
}

var question6 = prompt('Almost done, how many children does Alison have? You have 6 attempts to get this right!');
if (question6 === 5) {
  document.write('You know her well! Alison has 5 children.');
} else {
  document.write('Try again, you have 5 more attempts');
}
//Question7
for (var i = 0; i < 8 && promptExit; i++) {
  var answer = prompt('Can you name some of Alison\'s favorite countries she has visited?').toLowerCase();

  console.log(answer);

  if (answer === countriesVisited[0] || answer === countriesVisited[1] || answer === countriesVisited[2] || answer === countriesVisited[3] || answer === countriesVisited[4] || answer === countriesVisited[5]) {

    alert('Great, ' + answer + 'is correct');
    promptExit = false;
  }else if (i === 7){

    alert('You are out of attempts');
  }
  else{
    alert('Keep trying');
  }
  for (var i = 0; i <= 2; i++) {
    console.log(answer1[i]);
    userPoints++;
    alert('you have ' + userPoints + ' points.');
  }
}
