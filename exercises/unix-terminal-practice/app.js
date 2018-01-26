//var input = "bookkeeper larry";

//No duplicates: "bokepr lay"
//The Extras: "okeerr"




//var removeDuplicateLettersFromString= (string)
//for (var i = 0; i < string.length; i++) {
  //if (string has duplicate charaters)
      //console.log(these characters)
//} else {
// leave them fucking be

//function removeDuplicateLettersFromString = {

//}




//}












//function find_unique_characters(str) {
  //var unique = '';
  //for (var i = 0; i < str.length; i++) {
    //if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      //unique += str[i];
  //  }
  //}
//  return unique;
//}

//console.log(find_unique_characters('baraban'));
//console.log(find_unique_characters('anaconda'));






//erics example

function removeDuplicates(originalString){
  var noDuplicatesString = "",
  var extras= "";

  for (var i = 0; i < originalString.length; i++) {
    if(noDuplicatesString.includes(originalString[i])){
        extras += originalString[i];
    } else {
      noDuplicates += originalString[i];
    }
  }
  console.log(noDuplicates, extras);
}


 removeDuplicates("bookkeeper larry");
