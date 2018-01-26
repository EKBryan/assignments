function removeDuplicates(originalString){
    var noDuplicates = "";
    var extras = "" ;

    for(var i = 0; i < originalString.length; i++){
        if(noDuplicates.includes(originalString[i])){
            extras += originalString[i];
        } else {
           noDuplicates += originalString[i];
        }
    }
    console.log(noDuplicates, extras);
}

removeDuplicates("bookkeeper larry");
