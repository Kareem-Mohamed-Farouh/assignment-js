
var quotesOfDay = [
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: "Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: "Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: `“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”`,
    author: "William W. Purkey",
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    author: "Dr. Seuss",
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: "Mae West",
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: "Mahatma Gandhi",
  },
  {
    quote: `“Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”`,
    author: "Albert Camus",
  },
  {
    quote: `“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”`,
    author: "Steve Jobs",
  },
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    author: "Oscar Wilde",
  },
];

var lastRandomNumber = null;

function getRandomQuote() {
  var rand;
  do {
    rand = Math.floor(Math.random() * quotesOfDay.length);
  } while (rand === lastRandomNumber);
  lastRandomNumber = rand;
document.getElementById("author").innerHTML = quotesOfDay[rand].author;
document.getElementById("qoute").innerHTML = quotesOfDay[rand].quote;
  console.log(quotesOfDay[rand].author);
  console.log(quotesOfDay[rand].quote);
}

