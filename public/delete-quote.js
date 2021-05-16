const submitButton = document.getElementById('delete-quote');
const newQuoteContainer = document.getElementById('new-quote');

submitButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;

  fetch(`/api/quotes/${id}`, {
    method: 'DELETE',
  })
  .then(() => {
    const newQuote = document.createElement('div');
    newQuote.innerHTML = `
    <h3>The quote was deleted!</h3>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `
    newQuoteContainer.appendChild(newQuote);
  });
});
