// Random Quote Generator

//First, create the quote collection - an array of objects.
var quotes = [
  {
    quote: "You don't have to live forever, you just have to live.",
    source: "Natalie Babbitt",
    citation: "Tuck Everlasting",
    year: 1975
  },
  {
    quote: "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
    source: "Leo Tolstoy",
    citation: "Anna Karenina",
    year: 1878
  },
  {
    quote: "For what you see and hear depends a good deal on where you are standing: it also depends on what sort of person you are.",
    source: "C.S. Lewis",
    citation: "The Magician's Nephew",
    year: 1955
  },
  {
    quote: "Beware for I am fearless, and therefore powerful.",
    source: "Mary Shelley",
    citation: "Frankenstein",
    year: 1818
  },
  {
    quote: "I can't go back to yesterday because I was a different person then.",
    source: "Lewis Carroll",
    citation: "Alice's Adventures in Wonderland",
    year: 1865
  },
  {
    quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
    source: "Narcotics Anonymous"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    source: "Albert Einstein"
  },
  {
    quote: "Everything you can imagine is real.",
    source: "Pablo Picasso"
  }
];

// Second, create a function that grabs a random quote object from the array
function getRandomQuote(array) {
  var ix = Math.floor(Math.random() * array.length);
  return array[ix];
}

// Third, create a function that randomly chooses a color for the background
// To avoid randomly getting a background that is too light
// (which would make the quote unreadable), I chose 210 as my maximum rgb argument
function randomColor() {
  var red = Math.floor(Math.random() * 211);
  var green = Math.floor(Math.random() * 211);
  var blue = Math.floor(Math.random() * 211);
  var color = red + ", " + green + ", " + blue;
  return color;
}

// Next, create a function that uses the random quote object
//and parses it into a string that gets inserted as HTML
// This function also calls the randomColor() function to change the background
function printQuote() {
  var newQuote = getRandomQuote(quotes);
  var message = "";
  message += "<p class='quote'>" + newQuote.quote + "</p>";
  message += "<p class='source'>" + newQuote.source;
  if(newQuote.hasOwnProperty("citation")){
    message += "<span class='citation'>" + newQuote.citation + "</span>";
  }
  if(newQuote.hasOwnProperty("year")){
    message += "<span class='year'>" + newQuote.year + "</span>";
  }
  message += "</p>";
  document.getElementById("quote-box").innerHTML = message;
  document.body.style.backgroundColor = "rgb(" + randomColor() + ")";
}


// Magical line of code that will get the next random quote displayed on the screen
// whenever the "Show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
