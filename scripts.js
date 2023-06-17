// Quotes neeeded for the site
let quotes = [
    
    'Dont judge what you dont understand',  
    'You are a result of your past actions',
    "Whether you think you can or you think you can't, you're right.",
    "None of us is as smart as all of us.",
    "Believe you can and you're halfway there.",
    "Strive not to be a success, but rather to be of value.",
    "You can't use up creativity. The more you use, the more you have.",
    "A person who never made a mistake never tried anything new.",
    "If you want to lift yourself up, lift up someone else.",
    "Everything has beauty, but not everyone can see.",
    "We can't help everyone, but everyone can help someone.",
    "Everything you've ever wanted is on the other side of fear.",
    "Nothing will work unless you do."

];


function generateQuote() {
    // Formula needed to randomize the quotes
    let quoteList = Math.floor(Math.random() * quotes.length);
    // Assigns quotes to the quoteList variable so they can be randomized 
    let randQuote = quotes[quoteList];
    // Finds the paragraph class for the quotes in main.html
    let findQuoteClass = document.querySelector('.quote-text');
    // Adds the text from the paragraph class to the site, using the randQuote variable to make it random
    findQuoteClass.textContent = '"'+ randQuote + '"';
};

// Finds the button class to generate the quotes, and when clicked, it runs the generateQuote function
let generate = document.querySelector('.generate-quote');
generate.addEventListener('click', generateQuote)