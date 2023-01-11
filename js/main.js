var quotes = [
  {
    QouteName: `“Be yourself; everyone else is already taken.”`,
    SaidBy : `Oscar Wilde` ,
  },
  {
    QouteName: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    SaidBy : `Marilyn Monroe` ,
  },
  {
    QouteName: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    SaidBy : `Albert Einstein` ,
  },
  {
    QouteName: `“So many books, so little time.”`,
    SaidBy : `Frank Zappa` ,
  },
  {
    QouteName: `“A room without books is like a body without a soul.”`,
    SaidBy : `Marcus Tullius Cicero` ,
  },
  {
    QouteName: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    SaidBy : `Bernard M. Baruch` ,
  },
  {
    QouteName: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
    SaidBy : `William W. Purkey` ,
  },
  {
    QouteName: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    SaidBy : `Dr. Seuss` ,
  },
  {
    QouteName: `“You only live once, but if you do it right, once is enough.”`,
    SaidBy : `Mae West` ,
  },
  {
    QouteName: `“Be the change that you wish to see in the world.”`,
    SaidBy : `Mahatma Gandhi` ,
  },
  {
    QouteName: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    SaidBy : `Robert Frost` ,
  }
];

function displayQuotes(  ) {

var i =Math.floor(Math.random()*quotes.length) ;

  document.getElementById('quoteContent').innerHTML=`<p class="mt-4">${quotes[i].QouteName}</p>
  <span>${quotes[i].SaidBy}</span>`;
  
}

