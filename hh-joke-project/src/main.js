
import { fetchSingularJoke, fetchTenJokes, fetchJokesByType, fetchRandomDog } from './fetchFunctions.js';
import { renderSingularJoke, renderTenJokes, renderJokesByType, renderDog } from './renderFunctions.js';

const main = async () => {
  const dog = await fetchRandomDog();
  if (dog) renderDog(dog);

  document.getElementById('fetch-dog').addEventListener('click', async () => {
    const dog = await fetchRandomDog();
    renderDog(dog);
  });

  const joke = await fetchSingularJoke();
  renderSingularJoke(joke);
  

  document.getElementById('joke-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const jokeOption = formData.get('joke-option');
    const jokeTypeOption = formData.get('joke-type-option');

    if (jokeOption === 'better') {
      const joke = await fetchSingularJoke();
      renderSingularJoke(joke);
    } else if (jokeOption === 'ten') {
      const jokes = await fetchTenJokes();
      renderTenJokes(jokes);
    } else if (jokeOption === 'type' && jokeTypeOption) {
      const jokes = await fetchJokesByType(jokeTypeOption);
      if (jokes) {
        renderJokesByType(jokes);
      } else {
        console.warn('No jokes were fetched.');
      }
    }
  });

  const jokeOptions = document.querySelectorAll('input[name="joke-option"]');
  const jokeTypeOptions = document.querySelectorAll('input[name="joke-type-option"]');

  function toggleJokeTypeOptions(disable) {
    jokeTypeOptions.forEach(option => {
      option.disabled = disable;
    });
  }

  jokeOptions.forEach(option => {
    option.addEventListener('change', function () {
      if (this.value === 'type') {
        toggleJokeTypeOptions(false);
      } else {
        toggleJokeTypeOptions(true);
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', main);
