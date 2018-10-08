// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

let quotes = [{
        quote: "Your positive action combined with positive thinking results in success.",
        source: "Shiv Khera",
        tag: "succes"
    },
    {
        quote: "Change your life today. Don't gamble on the future, act now, without delay.",
        source: " Simone de Beauvoir"
    },
    {
        quote: "The inherent vice of capitalism is the unequal sharing of blessings. The inherent virtue of Socialism is the equal sharing of miseries.",
        source: "Winston Churchill",
        citation: "House of Commons",
        tag: "Politics"

    },
    {
        quote: "We Become What We Think About.",
        source: "Earl Nightingale",
        tag: "Life"
    },
    {
        quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        source: "Lao Tzu",
        tag: "Love"
    },
    {
        quote: "Clear-eyed, we can understand that there will be war, and still strive for peace",
        source: "President Obama",
        citation: "Nobel prize acceptance",
        year: 2009
    },
    {
        quote: "You must be the change you wish to see in the world.",
        source: "Mahatma Gandhi"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        source: "Albert Einstein",
        tag: "Life"

    }
];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
    let randomNumber = Math.floor(Math.random() * (array.length));
    let randomQuote = quotes[randomNumber];
    return randomQuote;

}
getRandomQuote(quotes);
// Create the randomColor funtion 
function getRandomColor() {
    const color = [];
    for (let i = 0; i < 3; i++) {
        let colorComponent = Math.floor(Math.random() * 256);
        color.push(colorComponent);

    }
    return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
}


// Create the printQuote funtion and name it printQuote

function printQuote() {

    let quoteObject = getRandomQuote(quotes);
    let stringOfQuoteProperties = "";
    stringOfQuoteProperties += "<p class='quote'>";
    stringOfQuoteProperties += quoteObject.quote;
    stringOfQuoteProperties += "</p>";
    stringOfQuoteProperties += "<p class='source'>";
    stringOfQuoteProperties += quoteObject.source;
    // Check if there is a citation
    if (quoteObject.citation) {
        stringOfQuoteProperties += "<span class = 'citation'>";
        stringOfQuoteProperties += quoteObject.citation;
        stringOfQuoteProperties += "</span>";
    }
    // Check if there is a year
    if (quoteObject.year) {
        stringOfQuoteProperties += "<span class = 'year'>";
        stringOfQuoteProperties += quoteObject.year;
        stringOfQuoteProperties += "</span>";
    }
    //Check if there is a tag
    if (quoteObject.tag) {
        stringOfQuoteProperties += "<span class = 'tag'><i>";
        stringOfQuoteProperties += quoteObject.tag;
        stringOfQuoteProperties += "</i></span>";
    }
    stringOfQuoteProperties += "</p>";
    let randomColor = getRandomColor();

    //Set the body background color to the random color
    document.body.style.backgroundColor = randomColor;

    //Set the button background color to the random color
    document.querySelector("#loadQuote").style.backgroundColor = randomColor;
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Create the changeQuotes function
function changeQuotes() {
    setInterval(printQuote, 20000);
}
// Call the changeQuotes function that changes the quote every 20 seconds
changeQuotes();