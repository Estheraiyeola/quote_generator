document.addEventListener('DOMContentLoaded', function (){
    const newQuoteButton = document.getElementById('new-quote-btn');
    const quoteContainer = document.getElementById('quote-container');

    newQuoteButton.addEventListener('click', getQuote);

    async function getQuote(){
        try{
            const response = await fetch('https://api.kanye.rest');
            const data = await response.json();

            const {quote} = data;

            quoteContainer.innerHTML = `<p>"${quote}"</p>`;
        }catch(error){
            console.error('Error fetching quote:', error);
            quoteContainer.innerHTML = '<p>Failed to fetch a new quote. Please try again later.</p>'
        }
    }

})