var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

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
