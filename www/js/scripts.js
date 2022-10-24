//CREAT NUTRIENTS JUST LIKE DRY OUT

var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

//water health
var waterlevel = 20;
var nowater = 0;
var drowing = 40;

//nutrients
var food = 30;
var nofood = 0;
var overfed = 40; 

var neardeath = false;
var trimmed = false;

function dryout(){
  waterlevel--;
  //console.log(waterlevel);
  checkhealth();
  var watertimer = setTimeout(dryout, 500);
}

dryout();

function starving() {
  food--;
  console.log(food);
  checkhealth();
  var foodtimer = setTimeout(starving, 500);
}
starving();

function checkhealth() {
  if(waterlevel <= nowater || waterlevel >= drowing || food <= nofood) {
    neardeath = true; 
    console.log("HELP!");
    $("#plant path").css("fill", "chocolate");
  }
  if (neardeath && waterlevel > nowater && food > nofood && trimmed) {
    $("#plant path").css("fill", "#568b62");
    neardeath = false;
    setTimeout(function () {
      $("#trim").fadeIn();
      trimmed = false;
    }, 5000)
  }
}

$("#water-me").on("click", function () {
  waterlevel += 20;
  $("#water").fadeIn().delay(3000).fadeOut();
});

$("#feed-me").on("click", function () {
  food += 20;
  $("#food").fadeIn().delay(3000).fadeOut();
});

$("#trim-me").on("click", function () {
  trimmed = true;
  $("#scissors").fadeIn().delay(2000).fadeOut();
  $("#trim").fadeOut();
});




// by default:
// - Plant starts healthy
// - dry out over time
// - deplete in nutrients over time

// interactions:
// - water it, replenish the plant
// - feed it, nutruents for the plant
// - trim it

// care:
// too much water, plant near death state
// - too much fertilizer
// - if the plant falls into a near death state, you can only heal it by trimming it.

