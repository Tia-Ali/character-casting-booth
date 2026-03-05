const form = document.getElementById("castForm");
const output = document.getElementById("output");

const API_URL = "";

function pickRandom(items) {
return items[Math.floor(Math.random() * items.length)];
}

function toWorldLabel(value) {
if (value === "space") return "Space Adventure";
if (value === "cyberpunk") return "Cyberpunk City";
if (value === "alien") return "Alien Worlds";
return value;
}

function toMoodLabel(value) {
if (value === "heroic") return "Heroic";
if (value === "mysterious") return "Mysterious";
if (value === "chaotic") return "Chaotic";
return value;
}

function renderCharacter(c) {
return `Meet Your Character

Name: ${c.name}
Role: ${c.role}
World: ${c.world}
Mood: ${c.mood}

Trait:
${c.trait}

Voice Line:
"${c.voice_line}"`;
}

form.addEventListener("submit", async (event) => {

event.preventDefault();

const genre = document.getElementById("genre").value;
const mood = document.getElementById("mood").value;

output.textContent = "Casting...";

try {

let character;

if (API_URL) {

const res = await fetch(API_URL + "?genre=" + genre + "&mood=" + mood);
character = await res.json();

}

else {

const res = await fetch("character.json");
const characters = await res.json();

const worldLabel = toWorldLabel(genre);
const moodLabel = toMoodLabel(mood);

const matches = characters.filter(
c => c.world === worldLabel && c.mood === moodLabel
);

character = matches.length ? pickRandom(matches) : pickRandom(characters);

character = { ...character, world: worldLabel, mood: moodLabel };

}

setTimeout(() => {
output.textContent = renderCharacter(character);
}, 800);

}

catch (error) {

output.textContent = "Something went wrong.";

}

});