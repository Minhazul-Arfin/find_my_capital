// ARROW FUNCTION MUST CALL AFTER THE FUNCTION INITIALIZE

const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = data =>{
    const quote = document.getElementById('quote');
    console.log(data);
    quote.innerHTML = data.quote;
}

loadQuote();