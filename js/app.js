const form = document.getElementById("castForm");
const output = document.getElementById("output");

form.addEventListener("submit", async function (event) {

event.preventDefault();

const genre = document.getElementById("genre").value;
const mood = document.getElementById("mood").value;

try {

const response = await fetch("data/character.json");
const characters = await response.json();

/* pick random character */

const character = characters[Math.floor(Math.random() * characters.length)];

/* build output */

const text = `
Name: ${character.name}

Role: ${character.role}

World: ${genre}

Mood: ${mood}

Voice Line:
"${character.voice_line}"
`;

output.textContent = text;

/* animation */

output.classList.remove("reveal");
void output.offsetWidth;
output.classList.add("reveal");

}

catch (error) {

output.textContent = "Something went wrong generating your character.";

}

});