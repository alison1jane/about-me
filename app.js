'use strict';
//This is the beginning of my about-me game
var userPoints = 0;
//Ask for user name
var user = prompt('Well Hello, please introduce yourself.');
console.log('The user\'s name is ' + user);
alert('Hi ' + user + '! I am so glad you want to play my game.');

// // //Question 1
// function hike() {
//   var hike = prompt(user + ', this is a yes/no quesion so please answer with a Y or N. Do I like to hike?').toLowerCase();
//   console.log('The user answered Question 1:' + hike);
//   //If/Else for question 1
//   if (hike === 'y') {
//     userPoints++;
//     alert('Good guess! Alison does like to hike. Your score is ' + userPoints);
//   } else {
//     alert('of course she likes to hike.');
//   }
// }
// hike();

//Question 2
// function children() {
//   var children = prompt('So, ' + user + ' Do I have children? Please answer with a Y or N').toLowerCase();
//   console.log('The user answered Question 2:' + children);
//   if (children === 'y') {
//     userPoints++;
//     alert('Good guess! Alison does have children. Your score is ' + userPoints);
//   } else {
//     alert('She sure does, 5 in fact and they all have flown the nest!');
//   }
// }
// children();

// //Question 3:
// function noWayHusky() {
//   var husky = prompt('Next question, Am I a Husky?').toLowerCase();
//   console.log('The user answered Question 3:' + husky);
//   if (husky === 'y') {
//     alert('Nope! Alison is a Duck and proud of that, QUACK!');
//   } else {
//     userPoints++;
//     alert('That is right, Alison is in fact a Duck, no way a Husky! Your score is ' + userPoints);
//   }
// }
// noWayHusky ();

//Question 4:
// function freeTime() {
//   var freeTime = prompt('Next question, what is my go-to free time activity?').toLowerCase();
//   console.log('The user answered Question 4:' + freeTime);
//   if (freeTime === 'working out') {
//     userPoints++;
//     alert('I love Working OUT! Your score is ' + userPoints);
//   } else {
//     alert('Sorry, spend more time with Alison and you might get this one right');
//   }
// }
// freeTime();

// //Question 5:
function profession() {
  var profession = prompt('Almost done, what is my dream profession?').toLowerCase();
  console.log('The user answered Question 5:' + profession);
  if (profession === 'web developer') {
    userPoints++;
    alert('You nailed it! Web Developer is the way to go. Your score is ' + userPoints);
  } else {
    alert('Actually Web Developer is Alison\'s dream job.');
  }
}
profession();

// //Question 6
// var question6 = prompt('Almost done, how many children does Alison have? You have 6 attempts to get this right!');
// if (question6 === 5) {
//   document.write('You know her well! Alison has 5 children.');
// } else {
//   document.write('Try again, you have 5 more attempts');
// }
//
// //Question7
// for (var i = 0; i < 8 && promptExit; i++) {
//   var answer = prompt('Can you name some of Alison\'s favorite countries she has visited?').toLowerCase();
//   console.log(answer);
//
//   if (answer === countriesVisited[0] || answer === countriesVisited[1] || answer === countriesVisited[2] || answer === countriesVisited[3] || answer === countriesVisited[4] || answer === countriesVisited[5]) {
//
//     alert('Great, ' + answer + 'is correct');
//     promptExit = false;
//   }else if (i === 7){
//
//     alert('You are out of attempts');
//   }
//   else{
//     alert('Keep trying');
//   }
//   for (var i = 0; i <= 2; i++) {
//     console.log(answer1[i]);
//     userPoints++;
//     alert('you have ' + userPoints + ' points.');
//   }
// }
