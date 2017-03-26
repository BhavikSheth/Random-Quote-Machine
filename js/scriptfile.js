// This is one of my earliest projects and the code here is weak.
// I choose not to come back and refactor this code because it reminds me of my journey and how far I have come. It shows that everyone was once a beginner.
window.onload = function() {
  var randomQuote = "";
  var randomAuthor = "";
  
  function newQuote() {
    var quotejson = [{
      "quote": "Success is going from failure to failure without losing your enthusiasm.",
      "author": "Winston Churchill",
    }, {
      "quote": "The journey of a thousand miles begins with one step.",
      "author": "Lao Tzu",
    }, {
      "quote": "Dream big and dare to fail.",
      "author": "Norman Vaughan",
    }, {
      "quote": "What you do speaks so loudly that I cannot hear what you say.",
      "author": "Ralph Waldo Emerson",
    }, {
      "quote": "You must be the change you wish to see in the world.",
      "author": "Mahatma Gandhi",
    }, {
      "quote": "Tough times never last, but tough people do.",
      "author": "Dr. Robert Schuller",
    }, {
      "quote": "Keep your face to the sunshine and you can never see the shadow.",
      "author": "Helen Keller",
    }, {
      "quote": "There is only one success: to be able to spend your life in your own way.",
      "author": "Christopher Morley",
    }, {
      "quote": "The best way out is always through.",
      "author": "Robert Frost",
    }, {
      "quote": "The power of imagination makes us infinite.",
      "author": "John Muir",
    }, {
      "quote": "Make each day your masterpiece.",
      "author": "John Wooden",
    }, {
      "quote": "The best dreams happen when you’re awake.",
      "author": "Cherie Gilderbloom",
    }, {
      "quote": "Once you choose hope, anything’s possible.",
      "author": "Christopher Reeve",
    }, {
      "quote": "Every moment is a fresh beginning.",
      "author": "T.S. Eliot",
    }, {
      "quote": "Believe and act as if it were impossible to fail.",
      "author": "Charles Kettering",
    }, {
      "quote": "Don’t count the days, make the days count.",
      "author": "Muhammad Ali",
    }, {
      "quote": "The difference between ordinary and extraordinary is that little extra.",
      "author": "Jimmy Johnson",
    }, {
      "quote": "You must not only aim right, but draw the bow with all your might.",
      "author": "Henry David Thoreau",
    }, {
      "quote": "Light tomorrow with today.",
      "author": "Elizabeth Barrett Browning",
    }, {
      "quote": "Even if you’re on the right track, you’ll get run over if you just sit there.",
      "author": "Will Rogers",
    }, {
      "quote": "When you come to a roadblock, take a detour.",
      "author": "Mary Kay Ash",
    }, {
      "quote": "Every strike brings me closer to the next home run.",
      "author": "Babe Ruth",
    }, {
      "quote": "Believe you can and you’re halfway there.",
      "author": "Theodore Roosevelt",
    }, {
      "quote": "Don’t wait. The time will never be just right.",
      "author": "Napoleon Hill",
    }, {
      "quote": "Everything you’ve ever wanted is on the other side of fear.",
      "author": "George Addair",
    }, {
      "quote": "A year from now you may wish you had started today.",
      "author": "Karen Lamb",
    }, {
      "quote": "It is never too late to be what you might have been.",
      "author": "George Eliot",
    }, {
      "quote": "There are no traffic jams along the extra mile.",
      "author": "Roger Staubach",
    }, {
      "quote": "Do what you can, where you are, with what you have.",
      "author": "Teddy Roosevelt",
    }, {
      "quote": "The road to Easy Street goes through the sewer.",
      "author": "John Madden",
    }, {
      "quote": "If there is no struggle, there is no progress.",
      "author": "Frederick Douglass",
    }, {
      "quote": "What we fear doing most is usually what we most need to do.",
      "author": "Tim Ferriss",
    }, {
      "quote": "To avoid criticism, do nothing, say nothing, be nothing.",
      "author": "Elbert Hubbard",
    }, {
      "quote": "The more I want to get something done, the less I call it work.",
      "author": "Richard Bach",
    }, {
      "quote": "Your imagination is your preview of life’s coming attractions.",
      "author": "Albert Einstein",
    }, {
      "quote": "Do what you love and the money will follow.",
      "author": "Marsha Sinetar",
    }, {
      "quote": "The harder I work, the luckier I get.",
      "author": "Gary Player",
    }, {
      "quote": "You`ve got to bumble forward into the unknown.",
      "author": "Frank Gehry",
    }, {
      "quote": "Even if you fall on your face, you’re still moving forward.",
      "author": "Victor Kiam",
    }, {
      "quote": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama",
    }, {
      "quote": "The dreamers are the saviors of the world.",
      "author": "James Allen",
    }, {
      "quote": "The price of anything is the amount of life you exchange for it.",
      "author": "Henry David Thoreau",
    }, {
      "quote": "Obsessed is just a word the lazy use to describe the dedicated.",
      "author": "Russell Warren",
    }, {
      "quote": "Someday is not a day of the week.",
      "author": "Denise Brennan-Nelson",
    }, {
      "quote": "There are no short cuts to any place worth going.",
      "author": "Beverly Sills",
    }, {
      "quote": "Very often a change of self is needed more than a change of scene.",
      "author": "Arthur Christopher Benson",
    }, {
      "quote": "If you can’t outplay them, outwork them.",
      "author": "Ben Hogan",
    }, {
      "quote": "The best way to predict the future is to invent it.",
      "author": "Alan Kay",
    }, {
      "quote": "Champions keep playing until they get it right.",
      "author": "Billie Jean King",
    }, {
      "quote": "Change your thoughts and you change your world.",
      "author": "Norman Vincent Peale",
    }, {
      "quote": "Always make a total effort, even when the odds are against you.",
      "author": "Arnold Palmer",
    }, {
      "quote": "If you have everything under control, you’re not moving fast enough.",
      "author": "Mario Andretti",
    }, {
      "quote": "Action is the foundational key to all success",
      "author": "Pablo Picasso",
    }, {
      "quote": "I will go anywhere as long as it is forward.",
      "author": "David Livingston",
    }, {
      "quote": "If you aren’t going all the way, why go at all?",
      "author": "Joe Namath",
    }, {
      "quote": "Try not. Do, or do not. There is no try.",
      "author": "Yoda",
    }, {
      "quote": "Just keep going. Everybody gets better if they keep at it.",
      "author": "Ted Williams",
    }, {
      "quote": "Choosing a goal and sticking to it changes everything.",
      "author": "Scott Reed",
    }, {
      "quote": "Don’t wish it were easier, wish you were better.",
      "author": "Jim Rohn",
    }, {
      "quote": "The creation of a thousand forests is in one acorn.",
      "author": "Ralph Waldo Emerson",
    }, {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky",
    }, {
      "quote": "It’s not whether you get knocked down, it’s whether you get up.",
      "author": "Vince Lombardi",
    }, {
      "quote": "What the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill",
    }, {
      "quote": "It wasn’t raining when Noah built the ark.",
      "author": "Howard Ruff",
    }, {
      "quote": "Never let your memories be greater than your dreams.",
      "author": "Doug Ivester",
    }]
      var randomId = Math.floor(Math.random() * quotejson.length);
    randomQuote = quotejson[randomId].quote;
    randomAuthor = quotejson[randomId].author;
      $(".quote").html(randomQuote);
      $(".author").html("<em>- " + randomAuthor + "</em>");
    }
    
  function newTweet() {
    window.open("https://www.twitter.com/intent/tweet?hashtags=Quotes&text=" + "\"" + randomQuote + "\" - " + randomAuthor);
  }
  
  $(document).ready(newQuote);
  
  $(".newquote").on("click", newQuote);
  
  $(".twitter").on("click", newTweet);
}