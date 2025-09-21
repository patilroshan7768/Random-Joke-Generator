// Select elements using querySelector
const button = document.querySelector(".btn");
const jokeElement = document.querySelector(".joke");

// async function to fetch joke
async function getJoke() {
  try {
    jokeElement.textContent = "Loading joke... 😂"; // show loading text

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    // Display setup + punchline
    jokeElement.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokeElement.textContent = "Oops! Could not fetch a joke 😅";
    console.error(error);
  }
}

// event listener for button
button.addEventListener("click", getJoke);
