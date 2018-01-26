//funtion var chips= (){
  //var sunChips= ["Sour Cream"]
  //var redChips= ["Garden Salsa"]

  //chips.concat(sunChips,redChips)
//}
function luvMonkeys(){
var animals = "Monkey";
var indexAnimals = animals.indexOf("o");
  console.log(indexAnimals);
}


//match
function myBeavers (){
var beavers = "My name is Beavers, I love beavers, and beaver love me. And other beavers."
var res = beavers.match(/beavers/)
console.log (res)
}


//replace
function myWater (){
  var plastic = "Plastic water bottles suck but that`s life."
  var noPlastic = plastic.replace("Plastic", "All");
  console.log(noPlastic)
}

//slice
function peanuts(){
  var str = "Trail mix is bomb.";
  var newStr = str.slice(3,6);
  console.log(newStr);
}


//.split()
function almonds(){
  var newAlmonds= "Yo momma is an almond.";
  var newAlmondsYum= newAlmonds.split(" ");
  console.log(newAlmondsYum)
}


//.toLowerCase()
function lemons() {
  var strLemons = "My name is Liz Lemon."
  var lowLemons = strLemons.toLowerCase();
  console.log(lowLemons)
}


//.toUpperCase()
function limes() {
  var greenLimes = "I like green and yellow limes, but not brown limes."
  var upLimes = greenLimes.toUpperCase()
  console.log(upLimes)
}
//.substr()
