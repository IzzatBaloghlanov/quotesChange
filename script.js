const quotes = [
    { quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`, person: `Aristotle` },
    { quote: `"The best way to find yourself is to lose yourself in the service of others."`, person: `Mahatma Gandhi` },
    { quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`, person: `Albert Einstein` },
    { quote: `"Your time is limited, so dont waste it living someone else's life."`, person: `Steve Jobs` },
    { quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`, person: `Benjamin Franklin` },
    { quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`, person: `Oprah Winfrey` },
    { quote: `"It does not matter how slowly you go as long as you do not stop."`, person: `Confucius` },
    { quote: `"The journey of a thousand miles begins with one step."`, person: `Lao Tzu` },
    { quote: `"Our lives begin to end the day we become silent about things that matter."`, person: `Martin Luther King, Jr.` },
    { quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`, person: `Dalai Lama` },
  ];

  //! HTML elementlərini seçdik 
  const quoteText = document.getElementById('quote');
  const quotePerson = document.getElementById('person');
  const addQuoteBtn = document.getElementById('addQuoteBtn');

  function quoteChange(){
      const randomIndex = Math.floor(Math.random() * quotes.length); 
      quoteText.textContent = quotes[randomIndex].quote;
      quotePerson.textContent = quotes[randomIndex].person.toUpperCase();

  }
  //! 
  addQuoteBtn.addEventListener('click', quoteChange) 