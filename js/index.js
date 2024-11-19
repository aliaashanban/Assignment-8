var quotes = [
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
        "“Be yourself; everyone else is already taken.”",
    "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  ];
  document.getElementById('btn').onclick = function getNewQuote(){
    var randomQuotes =Math.floor(Math.random() * quotes.length );
    var  newQuote=  document.getElementById('quote');
    newQuote.innerHTML =quotes[randomQuotes];
  }
  console.log(Math.random());
