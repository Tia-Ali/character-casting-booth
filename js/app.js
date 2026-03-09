const form = document.getElementById("castForm");
const output = document.getElementById("output");

form.addEventListener("submit", async function (event) {

event.preventDefault();

const genre = document.getElementById("genre").value;
const mood = document.getElementById("mood").value;

try {

const response = await fetch("data/character.json");
const characters = await response.json();

/* filter characters by genre */

const matchingCharacters = characters.filter(character => character.genre === genre);

/* pick a random one */

const character = matchingCharacters[Math.floor(Math.random() * matchingCharacters.length)];

/* build output text */

const text = `
Name: ${character.name}

Role: ${character.role}

World: ${genre}

Mood: ${mood}

Voice Line:
"${character.voice}"
`;

/* display result */

output.textContent = text;

/* trigger animation */

output.classList.remove("reveal");
void output.offsetWidth;
output.classList.add("reveal");

}

catch (error) {

output.textContent = "Something went wrong generating your character.";

}

});