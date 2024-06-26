// fetching singular joke 
export const fetchSingularJoke = async () => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  }
  catch (error) { 
    console.warn('Fetching singular joke failed:', error); 
  }
}

//fetching multiple jokes
export const fetchTenJokes = async () => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_ten');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.warn('Fetch ten jokes failed:', error);
    return null; 
  }
}

//fetching jokes by type
export const fetchJokesByType = async (type) => {
  try {
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/random`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(`Fetch jokes by type ${type} failed:`, error);
  }
}

//fetching dog data
export const fetchRandomDog = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data
  } catch (error) {
    console.warn('Fetch random dog failed:', error);
  }
}
