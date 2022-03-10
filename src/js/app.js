import MemorableQuotes from "./memorableQuotes.js";

const quote = new MemorableQuotes();

document.getElementById('memorable-quote').textContent = quote.provideAQuote();