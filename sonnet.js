var sonnet = document.getElementById("sonnet").innerHTML;
console.log("sonnet", sonnet);

var ophanSearch = sonnet.search("orphans");
console.log("ophanSearch", ophanSearch);

console.log("Sonnet Length", sonnet.length);

//first occurance 
var replaceWinter = sonnet.replace("winter", "yuletide");
console.log("replaceWinter", replaceWinter);
//sonnet = replaceWinter;

//Replace all occurances of the string "the" with "a large"
var myRegex = /the /gi;
var theALarge = sonnet.replace(myRegex, 'a large ');
console.log("theALarge", theALarge); 
//sonnet = theALarge;

document.getElementById("sonnet").innerHTML = theALarge;