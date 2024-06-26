// rendering singular joke
export const renderSingularJoke = (joke) => {
  const jokeContainer = document.querySelector('.starter-joke article');
  jokeContainer.innerHTML = '';

  const jokeUl = document.createElement('ul');
  const jokeSetup = document.createElement('li');
  jokeSetup.classList.add('joke-setup');
  jokeSetup.textContent = joke.setup;

  const jokePunchline = document.createElement('li');
  jokePunchline.classList.add('joke-punchline');
  jokePunchline.textContent = joke.punchline;

  jokeUl.append(jokeSetup, jokePunchline);
  jokeContainer.appendChild(jokeUl);
}

// rendering multiple jokes
export const renderTenJokes = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');

  jokeContainer.innerHTML = '';
  const jokeUl = document.createElement('ul'); 

  jokes.forEach(joke => {
    const jokeSetup = document.createElement('li');
    jokeSetup.classList.add('joke-setup');
    jokeSetup.textContent = joke.setup;
  
    const jokePunchline = document.createElement('li');
    jokePunchline.classList.add('joke-punchline');
    jokePunchline.textContent = joke.punchline;

    jokeUl.appendChild(jokeSetup);
    jokeUl.appendChild(jokePunchline);
  });

  jokeContainer.appendChild(jokeUl); 
};

// rendering jokes by type
export const renderJokesByType = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';

  const jokeUl = document.createElement('ul'); 

  jokes.forEach(joke => {
    const jokeSetup = document.createElement('li');
    jokeSetup.classList.add('joke-setup');
    jokeSetup.textContent = joke.setup;
  
    const jokePunchline = document.createElement('li');
    jokePunchline.classList.add('joke-punchline');
    jokePunchline.textContent = joke.punchline;

    jokeUl.append(jokeSetup, jokePunchline);
  });

  jokeContainer.appendChild(jokeUl); 
}

// rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}
