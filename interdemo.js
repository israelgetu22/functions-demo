let jonSnowHealth = 100;

jonSnowHealth = String(jonSnowHealth);

// jonSnowHealth + ''

// console.log(jonSnowHealth)

let theWinnerIs = "Jamie is the winner.";

// console.log(theWinnerIs)

let newWinner = theWinnerIs.replace("Jamie", "Jon");

if (newWinner.includes("Jon")) {
  // console.log('Replaced Jamie with Jon')
}

let newWinnerLower = newWinner.toLowerCase();
console.log(newWinner);
let newWinnerSplit = newWinnerLower.split(" ");
console.log(newWinnerSplit);
let newWinnerKebob = newWinnerSplit.join("-");
console.log(newWinnerKebob);
