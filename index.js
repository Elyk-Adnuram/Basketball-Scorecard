// create variable to obtain Home Scoreboard
let scoreHome = document.getElementById("score-display-home");

// create variable that will display home score
let scoreHomeTeam = 0;

//this function will add 1 point everytime the Home team button is clicked
function button1Home() {
  scoreHomeTeam += 1;
  scoreHome.textContent = scoreHomeTeam;
}

//this function will add 2 points everytime the Home team button is clicked
function button2Home() {
  scoreHomeTeam += 2;
  scoreHome.textContent = scoreHomeTeam;
}

//this function will add 3 point everytime the Home team button is clicked
function button3Home() {
  scoreHomeTeam += 3;
  scoreHome.textContent = scoreHomeTeam;
}

//// create variable to obtain Guest Scoreboard
let scoreGuest = document.getElementById("score-display-guest");

// create variable that will display guest score
let scoreGuestTeam = 0;

//this function will add 1 point everytime the Guest team button is clicked
function button1Guest() {
  scoreGuestTeam += 1;
  scoreGuest.textContent = scoreGuestTeam;
}

//this function will add 2 points everytime the Guest team button is clicked
function button2Guest() {
  scoreGuestTeam += 2;
  scoreGuest.textContent = scoreGuestTeam;
}

//this function will add 3 point everytime the Guest team button is clicked
function button3Guest() {
  scoreGuestTeam += 3;
  scoreGuest.textContent = scoreGuestTeam;
}

//this function clears the scoreboard for both Home and Guest teams
function clearBoard() {
  scoreGuestTeam = 0;
  scoreHomeTeam = 0;
  scoreGuest.textContent = scoreGuestTeam;
  scoreHome.textContent = scoreHomeTeam;
}
