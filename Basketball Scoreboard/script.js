let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

// let homeScoreNumber = Number(homeScore);
// let guestScoreNumber = Number(guestScore);

// console.log(homeScoreNumber);
// console.log(guestScoreNumber);

function increment(el, amount) {
  let current = Number(el.textContent);
  el.textContent = String(current + amount);
}
