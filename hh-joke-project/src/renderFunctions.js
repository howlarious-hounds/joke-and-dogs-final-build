// rendering singular joke
export const renderSingularJoke = (joke) => {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';
  jokeContainer.style.display = 'block'; 
  jokeContainer.style.margin = '0 auto'; 
  jokeContainer.style.maxHeight = 'none'; 
  jokeContainer.style.overflowY = 'visible'; 

  const jokeElement = document.createElement('div');
  jokeElement.classList.add('joke');

  const jokeUl = document.createElement('ul');
  const jokeSetup = document.createElement('li');
  jokeSetup.classList.add('joke-setup');
  jokeSetup.textContent = joke.setup;

  const jokePunchline = document.createElement('li');
  jokePunchline.classList.add('joke-punchline');
  jokePunchline.textContent = joke.punchline;

  jokeUl.append(jokeSetup, jokePunchline);
  jokeElement.appendChild(jokeUl);
  jokeContainer.appendChild(jokeElement);
}

// rendering multiple jokes
export const renderTenJokes = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';
  jokeContainer.style.display = 'block'; 
  jokeContainer.style.margin = '0 auto'; 
  jokeContainer.style.maxHeight = '80vh'; 
  jokeContainer.style.overflowY = 'auto'; 
  jokes.forEach(joke => {
    const jokeElement = document.createElement('div');
    jokeElement.classList.add('joke');

    const jokeUl = document.createElement('ul');
    const jokeSetup = document.createElement('li');
    jokeSetup.classList.add('joke-setup');
    jokeSetup.textContent = joke.setup;

    const jokePunchline = document.createElement('li');
    jokePunchline.classList.add('joke-punchline');
    jokePunchline.textContent = joke.punchline;

    jokeUl.append(jokeSetup, jokePunchline);
    jokeElement.appendChild(jokeUl);
    jokeContainer.appendChild(jokeElement);
  });
};

// rendering jokes by type
export const renderJokesByType = (jokes) => {
  const jokeContainer = document.getElementById('joke-container');
  jokeContainer.innerHTML = '';
  
  jokes.forEach(joke => {
    const jokeElement = document.createElement('div');
    jokeElement.classList.add('joke');

    const jokeUl = document.createElement('ul');
    const jokeSetup = document.createElement('li');
    jokeSetup.classList.add('joke-setup');
    jokeSetup.textContent = joke.setup;

    const jokePunchline = document.createElement('li');
    jokePunchline.classList.add('joke-punchline');
    jokePunchline.textContent = joke.punchline;

    jokeUl.append(jokeSetup, jokePunchline);
    jokeElement.appendChild(jokeUl);
    jokeContainer.appendChild(jokeElement);
  });
}

// rendering random dog
export const renderDog = (dog) => {
  const dogPicElement = document.getElementById('dog-pic');
  dogPicElement.src = dog.message;
  dogPicElement.alt = 'Random Dog';
}

