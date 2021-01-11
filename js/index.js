var hacker1 = "abcd";
var hacker2 = "abcda";

//Iteration 1
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Iteration 2
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters. ");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

//Iteration 3
var driverWithSpaces = "";
for (var i = 0; i < hacker1.length; i++) {
  driverWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverWithSpaces);

var navigatorReverse = "";
for (var i = 0; i < hacker2.length; i++) {
  navigatorReverse += hacker2[hacker2.length - (i + 1)];
}
console.log(navigatorReverse);

var equalNames = true;
for (var i = 0; i < hacker1.length; i++) {
  if (hacker2[i] == undefined) {
    console.log("The driver's name goes first.")
    equalNames = false;
    break;
  }
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.")
    equalNames = false;
    break;
  }
  if (hacker1[i] > hacker2[i]) {
    console.log("Yo, the navigator goes first definitely.")
    equalNames = false;
    break;
  }
}
if (equalNames && hacker2[hacker1.length] != undefined) {
  console.log("Yo, the navigator goes first definitely.")
} else if (equalNames) {
  console.log("What?! You both have the same name?")
}

//Bonus 1
var loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget posuere tellus. Pellentesque et dapibus enim. Nulla non tortor ligula. Aenean ornare rhoncus libero, et rutrum nisi laoreet sed. Sed nec venenatis libero. Quisque vel varius ante. Vivamus a tempus arcu. Duis gravida dolor nec quam dignissim pulvinar. Aliquam erat volutpat. Sed sed urna non enim rutrum elementum. Quisque sit amet consequat nibh, at venenatis sem. Nullam mollis ante erat, sed consectetur metus tempus id. Morbi pellentesque pretium ipsum, a cursus sapien feugiat id. Vestibulum non neque tincidunt sapien finibus varius imperdiet nec diam. Pellentesque tincidunt, urna sit amet tristique ornare, mauris justo semper purus, nec auctor justo lectus id lorem.

Donec nec mollis metus. Nunc sed erat non erat consequat dapibus quis et odio. Maecenas efficitur leo ac mi scelerisque venenatis. Mauris non leo convallis, iaculis urna vitae, fermentum arcu. Sed ullamcorper mattis ex nec dapibus. Curabitur congue ex vitae mi ultricies, et bibendum ipsum pulvinar. Quisque aliquet id tellus eget imperdiet. Sed vestibulum urna sed venenatis luctus. Donec et faucibus lectus. Donec fringilla nibh et dictum eleifend. Phasellus nec lobortis elit. Quisque arcu arcu, lacinia at leo nec, aliquet bibendum velit. Sed vestibulum orci bibendum, ultrices nibh varius, tempus est. Proin mollis rutrum magna, eu ultrices arcu placerat nec. In sit amet nisi quis sapien luctus interdum eu ac dui. Proin mi libero, pulvinar a luctus id, pellentesque non dolor.

Nullam sit amet tellus nec mauris pulvinar laoreet ut non velit. Maecenas sollicitudin pulvinar ex eu tempor. Quisque ullamcorper, nibh sit amet blandit rhoncus, sem risus imperdiet odio, sit amet porta ipsum quam dignissim lectus. Cras nec massa in mi vehicula luctus non a ligula. Aliquam auctor mi sit amet ipsum ultricies, ac finibus velit dictum. Phasellus auctor, nulla id congue mollis, ante risus bibendum lacus, ac scelerisque sapien tortor vel velit. Donec feugiat lorem vitae tristique imperdiet. In tincidunt justo mauris, nec sodales ex sagittis eget. Vivamus velit lectus, vehicula sed ultrices vitae, cursus vel felis. Etiam eget aliquam mi. Nullam sed ex quis lacus convallis euismod et vitae nunc. Fusce sed tempus purus.`

console.log("Numer of words = " + ((loremIpsum.split(" ").length) + (loremIpsum.split("\n\n").length - 1)));
console.log('Number of times "et" appears in the text = ' + (loremIpsum.split(" et").length - 1));

//Bonus 2
var phraseToCheck = "A man, a plan, a canal, Panama!";
var palindrome = true;

lowerPhraseToCheck = phraseToCheck.toLowerCase();

var cleanPhraseToCheck = "";
for (letter of lowerPhraseToCheck) {
  if (letter !== " " && letter !== "," && letter !== "!") {
    cleanPhraseToCheck += letter;
  }
}

for (var i = 0; i < cleanPhraseToCheck.length; i++) {
  if (cleanPhraseToCheck[i] !== cleanPhraseToCheck[cleanPhraseToCheck.length - (i+1)]){
    palindrome = false;
  }
}

if(palindrome){
  console.log('The phrase "' + phraseToCheck + '" is a palindrome');
} else {
  console.log('The phrase "' + phraseToCheck + '" is NOT a palindrome');
}