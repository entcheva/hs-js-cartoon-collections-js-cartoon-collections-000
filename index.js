function dwarfRollCall(dwarves) {

  var str = "";

  for (var i = 0; i < dwarves.length; i++) {
    str += i+1 + ". " + dwarves[i] + " ";
  }
  return str;
}



function summonCaptainPlanet(arr) {
  var upperCall = [];

  for (var i = 0; i < arr.length; i++) {
    upperCall.push(arr[i].toUpperCase() + "!")
  }
  return upperCall;
}



function longPlaneteerCalls(words) {

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}



function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];

  for (var i = 0; i < foods.length; i++) {

    if (cheeses.indexOf(foods[i]) !== -1) {
      return foods[i];
    }
  }
  return "no cheese!";
}
