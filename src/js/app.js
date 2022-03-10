function MemorableQuotes() {
  this.quote = [
    '"The needs of the many outweigh the needs of the few." - Spock',
    '"Live long and prosper." - Spock',
    '"Without followers, evil cannot spread." - Spock',
    '"After a time, you may find that having is not so pleasing a thing after all as wanting. It is not logical, but is often true." - Spock',
    '"Insufficient facts always invite danger." - Spock',
    '"Computers make excellent and efficient servants, but I have no wish to serve under them." - Spock',
    '"Today is a good day to code." - Klingon Programmer',
    `"Well it's ummm. It's green." - Scotty`
  ]
}

MemorableQuotes.prototype.provideAQuote = function() {
  return this.quote[Math.floor(Math.random() * (this.quote.length))];
}

const quote = new MemorableQuotes();

document.getElementById('memorable-quote').textContent = quote.provideAQuote();