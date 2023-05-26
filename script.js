// Function to make an API request and display meow facts
function getMeowFacts(count) {
  const url = `https://meowfacts.herokuapp.com/?count=${count}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const factsContainer = document.getElementById('facts');
      factsContainer.innerHTML = '';

      data.data.forEach(fact => {
        const factElement = document.createElement('div');
        factElement.classList.add('fact');
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

// Event listener for the refresh button
document.getElementById('refresh').addEventListener('click', () => {
  const count = parseInt(prompt('Enter the number of Meow Facts to retrieve:'), 10);
  if (!isNaN(count) && count > 0) {
    getMeowFacts(count);
  } else {
    alert('Invalid input. Please enter a positive number.');
  }
});
